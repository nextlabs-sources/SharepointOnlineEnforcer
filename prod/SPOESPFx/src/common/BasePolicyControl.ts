import { IList, sp, IListInfo, IFieldInfo, IViewInfo } from '@pnp/sp/presets/all';
import {
  NextLabsPEPAgent,
  Environment,
  Host,
  Subject,
  Action,
  AttributeDataType,
  PEPResponse,
  Resource,
  DecisionType,
  Obligation,
} from '../QueryCloudAzJS';
import Filter from './Filter';
import { SitePropertyLevel } from './enumerations';
import { Site, SPPropertyValues, SPKeyValue } from './interfaces';
import { RESOURCE_TYPE, PROMPT_MESSAGE_CLASS_NAME } from './constants';
import { isModernPage } from '../util';
import PROMPT_MESSAGES from './prompt-messages';
import { SpPageContextInfo } from '../types/custom';
import Logger from './Logger';

/** A class encapsulating something about policy control */
abstract class BasePolicyControl {
  protected rootWebProperties: SPPropertyValues;

  private currentWebProperties: SPPropertyValues;

  private agent: NextLabsPEPAgent;

  private environment: Environment;

  private host: Host;

  private user: Subject;

  private action: Action;

  protected filters: Filter[];

  /**
   * Creates a new BasePolicyControl object
   * @param rootWebProperties All properties of root web
   * @param currentWebProperties All properties of current web
   * @param userLoginName The login name of current user
   * @param userProfilesProperties The profiles of current user
   */
  public constructor(
    rootWebProperties: SPPropertyValues,
    currentWebProperties: SPPropertyValues,
    userLoginName: string,
    userProfilesProperties: SPKeyValue[]
  ) {
    this.rootWebProperties = rootWebProperties;
    this.currentWebProperties = currentWebProperties;
    const {
      JavaPcHost: jpcHost,
      OAUTHHost: oAuthHost,
      ClientSecureID: clientID,
      ClientSecureKey: clientSecure,
    } = JSON.parse(rootWebProperties.SPOLEGeneralSetInfo);

    this.agent = new NextLabsPEPAgent(jpcHost, oAuthHost, clientID, clientSecure);
    this.environment = new Environment();
    this.environment.addAttribute('dont-care-acceptable', AttributeDataType.String, 'yes');
    this.host = new Host('HostName', '10.23.60.12');
    this.user = new Subject(userLoginName, userLoginName);
    userProfilesProperties.forEach((property) => {
      this.user.addAttribute(property.Key, AttributeDataType.String, property.Value);
    });
    this.action = new Action('VIEW');
  }

  /** Start policy control */
  public abstract start(): void;

  /** Run policy control once */
  protected runPolicyControl(): void {
    Logger.printMessage('Run policy control once');
    const currentLocation: Location = window.location;
    const list: IList = sp.web.getList(currentLocation.pathname);
    const batch = sp.createBatch();
    let currentList: IListInfo;
    let currentView: IViewInfo;
    let currentFields: IFieldInfo[];

    list
      .inBatch(batch)
      .usingCaching()
      .get()
      .then((res: IListInfo) => {
        currentList = res;
      })
      .catch(Logger.printError);

    list.views
      .inBatch(batch)
      .usingCaching()
      .get()
      .then((views: IViewInfo[]) => {
        Logger.printMessage('views: ', views);
        views.forEach((view: IViewInfo) => {
          if (decodeURI(currentLocation.pathname) === view.ServerRelativeUrl) {
            currentView = view;
          }
        });
      })
      .catch(Logger.printError);

    list.fields
      .inBatch(batch)
      .usingCaching()
      .get()
      .then((fields: IFieldInfo[]) => {
        currentFields = fields;
      })
      .catch(Logger.printError);

    batch
      .execute()
      .then(async () => {
        Logger.printMessage('currentList: ', currentList);
        Logger.printMessage('currentView: ', currentView);
        Logger.printMessage('currentFields: ', currentFields);

        const currentListId: string = currentList.Id;
        const selectedLists = JSON.parse(this.rootWebProperties.SPOLESelectedLists || '{}');

        // Prompt return to classic page
        if (selectedLists[currentListId] && isModernPage()) {
          const messageClassName = PROMPT_MESSAGE_CLASS_NAME.message;
          const messageElement: HTMLElement = document.getElementsByClassName(
            messageClassName
          )[0] as HTMLElement;
          messageElement.innerText = PROMPT_MESSAGES.returnToClassicPage;
          return;
        }

        if (!currentListId || !selectedLists[currentListId] || !currentView) {
          Logger.printMessage(`Don't care about this page`);
          this.showListBody();
          return;
        }

        try {
          const policyResult: PEPResponse = await this.getPolicyResult(
            currentLocation.href,
            currentList
          );
          Logger.printMessage(policyResult);
          this.applyPolicyControl(policyResult, currentView, currentFields);
        } catch (e) {
          this.handleError(e);
        }
      })
      .catch(Logger.printError);
  }

  /**
   * Get the policy result from JPC
   * @param resourceUrl URL of the resource
   * @param currentList The current list info
   */
  private async getPolicyResult(resourceUrl: string, currentList: any): Promise<PEPResponse> {
    Logger.printMessage('Resource URL: ', resourceUrl);
    const resource = new Resource(resourceUrl, RESOURCE_TYPE);
    let subType;
    switch (currentList.BaseType) {
      case 0:
        subType = 'list';
        break;
      case 1:
        subType = 'library';
        break;
      // no default
    }
    resource.addAttribute(
      'url',
      AttributeDataType.String,
      resourceUrl.replace(/https|http/, 'sharepoint')
    );
    resource.addAttribute('name', AttributeDataType.String, currentList.Title);
    resource.addAttribute('desc', AttributeDataType.String, currentList.Description);
    resource.addAttribute('type', AttributeDataType.String, 'portlet');
    resource.addAttribute('sub_type', AttributeDataType.String, subType);

    const sitePropertyLevel: SitePropertyLevel =
      this.rootWebProperties.SPOLESitePropertyLevel || SitePropertyLevel.None;
    const siteList: Site[] = JSON.parse(this.rootWebProperties.SPOLESitePropertyList || '[]');

    // eslint-disable-next-line no-underscore-dangle
    const pageCTX: SpPageContextInfo = window._spPageContextInfo;
    const rootWebUrl = pageCTX.siteAbsoluteUrl;
    const currentWebUrl = pageCTX.webAbsoluteUrl;

    Logger.printMessage('site list: ', siteList);
    if (sitePropertyLevel === SitePropertyLevel.Subsite && currentWebUrl !== rootWebUrl) {
      this.addResourceAttribute(
        resource,
        siteList,
        currentWebUrl,
        this.currentWebProperties,
        false
      );
    } else if (sitePropertyLevel === SitePropertyLevel.SiteCollection) {
      this.addResourceAttribute(resource, siteList, rootWebUrl, this.rootWebProperties, true);
    } else if (sitePropertyLevel === SitePropertyLevel.Both) {
      if (currentWebUrl === rootWebUrl) {
        this.addResourceAttribute(resource, siteList, rootWebUrl, this.rootWebProperties, true);
      } else {
        this.addResourceAttribute(resource, siteList, rootWebUrl, this.rootWebProperties, true);
        this.addResourceAttribute(
          resource,
          siteList,
          currentWebUrl,
          this.currentWebProperties,
          false
        );
      }
    }

    Logger.printMessage('resource: ', resource);
    const policyResult = await this.agent
      .decide(this.user, this.action, resource, this.environment, this.host)
      .then((res: PEPResponse[]) => res[0]);

    return policyResult;
  }

  /**
   * Apply policy control according to pllicy result
   * @param policyResult Policy result
   * @param view The info of current view
   * @param fields The fields of current list
   */
  private applyPolicyControl(
    policyResult: PEPResponse,
    view: IViewInfo,
    fields: IFieldInfo[]
  ): void {
    const decision: DecisionType = policyResult.getDecision();
    const obligations: Obligation[] = policyResult.getObligations();

    switch (decision) {
      case DecisionType.DENY:
        Logger.printMessage('deny');
        this.denyAccess();
        break;
      case DecisionType.PERMIT:
        Logger.printMessage('permit');
        this.filterList(obligations, fields, view.Id);
        break;
      case DecisionType.NOTAPPLICABLE:
        Logger.printMessage('NotApplicable');
        break;
      default:
        Logger.printMessage('default decision');
    }
  }

  /**
   * Filter the list
   * @param obligations The obligations responded from JPC
   * @param fields The fields of current list
   * @param viewId The id of current view
   */
  protected abstract filterList(
    obligations: Obligation[],
    fields: IFieldInfo[],
    viewId: string
  ): void;

  /** Deny access */
  protected abstract denyAccess(): void;

  /** Show the list body */
  protected abstract showListBody(): void;

  /** Handle error */
  protected abstract handleError(e: Error): void;

  /**
   * Add selected site properties to resource attribute
   * @param resource The resource info which will send to JPC
   * @param siteList The site list contains the selected site properties
   * @param webUrl The web url
   * @param webProperties All properties of the web
   * @param isRootWeb Wheather or not is root web
   */
  private addResourceAttribute(
    resource: Resource,
    siteList: Site[],
    webUrl: string,
    webProperties: any,
    isRootWeb: boolean
  ): void {
    for (let i = 0; i < siteList.length; i += 1) {
      const site: Site = siteList[i];
      if (site.id === webUrl) {
        site.siteProperties.forEach((property) => {
          const propertyName: string = property.displayName;
          const convertedPropertyName: string = propertyName
            .replace(/_/g, '_x005f_')
            .replace(/ /g, '_x0020_')
            .replace(/^_/, 'OData__');
          const propertyValue: string = webProperties[convertedPropertyName];
          resource.addAttribute(
            `${isRootWeb ? 'sc.' : 'ss.'}${propertyName}`,
            AttributeDataType.String,
            propertyValue
          );
        });
      }
    }
  }
}

export default BasePolicyControl;
