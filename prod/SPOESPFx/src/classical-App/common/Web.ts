import { isUndefined, convertIntoODataName } from '../../util';
import { ExceptionBehavior, SitePropertyLevel } from '../../common/enumerations';
import { ExpandedWebInfo, JPCConfig, SitePropertiesContainer } from '../../common/interfaces';
import PROMPT_MESSAGES from '../../common/prompt-messages';

export default class Web {
  public readonly id: string;
  public readonly url: string;
  public readonly allProperties: Map<string, any>;

  constructor(id: string, url: string, allProperties: Map<string, any>) {
    this.id = id;
    this.url = url;
    this.allProperties = allProperties;
  }

  public getExceptionBehavior(): ExceptionBehavior {
    return this.allProperties.get('SPOLEDefaultBehavior');
  }

  public getSPOLEServerOrigin(): string {
    const serverDomainName: string = this.allProperties.get('SPOLEServerDomainName');

    if (isUndefined(serverDomainName)) {
      throw new Error(PROMPT_MESSAGES.wrongSPOLEServerOrigin);
    }

    return `https://${serverDomainName}`;
  }

  public getJPCConfig(): JPCConfig {
    const jpcConfig: JPCConfig = new Map();
    const jpcConfigString: string = this.allProperties.get('SPOLEGeneralSetInfo');
    const { JavaPcHost, OAUTHHost, ClientSecureID, ClientSecureKey } = JSON.parse(
      jpcConfigString || '{}'
    );

    jpcConfig.set('jpcHost', JavaPcHost);
    jpcConfig.set('oAuthHost', OAUTHHost);
    jpcConfig.set('clientSecureID', ClientSecureID);
    jpcConfig.set('clientSecureKey', ClientSecureKey);

    return jpcConfig;
  }

  /** @returns A map of selected lists. The `key` is selected list's ID and the `value` is title. */
  public getSelectedListMap(): Map<string, string> {
    const selectedListsString: string = this.allProperties.get('SPOLESelectedLists');
    const selectedListsObj: Record<string, string> = JSON.parse(selectedListsString || '{}');

    return new Map(Object.entries(selectedListsObj));
  }

  private getSitePropertyLevel(): SitePropertyLevel {
    return this.allProperties.get('SPOLESitePropertyLevel');
  }

  private getSitePropertiesContainers(): SitePropertiesContainer[] {
    const sitePropertiesContainerString: string = this.allProperties.get('SPOLESitePropertyList');

    return JSON.parse(sitePropertiesContainerString || '[]');
  }

  public static parseFromSPResponse(webInfo: ExpandedWebInfo): Web {
    const { Id: id, Url: url, AllProperties } = webInfo;
    const allProperties = new Map(Object.entries(AllProperties));

    return new Web(id, url, allProperties);
  }

  public static getSelectedSitePropertyMap(rootWeb: Web, currentWeb: Web): Map<string, string> {
    const selectedLevel: SitePropertyLevel = rootWeb.getSitePropertyLevel();
    const sitePropertiesContainers: SitePropertiesContainer[] = rootWeb.getSitePropertiesContainers();
    let selectedSitePropertyMap = new Map<string, string>();

    switch (selectedLevel) {
      case SitePropertyLevel.Subsite:
        if (!Web.isSameWeb(rootWeb, currentWeb)) {
          selectedSitePropertyMap = Web.getPropertyMap(sitePropertiesContainers, currentWeb, false);
        }
        break;
      case SitePropertyLevel.SiteCollection:
        selectedSitePropertyMap = Web.getPropertyMap(sitePropertiesContainers, rootWeb, true);
        break;
      case SitePropertyLevel.Both:
        if (Web.isSameWeb(rootWeb, currentWeb)) {
          selectedSitePropertyMap = Web.getPropertyMap(sitePropertiesContainers, rootWeb, true);
        } else {
          // Can not use spread operator with Map, because the error of Babel loose mode
          // The error: https://github.com/babel/babel/issues/8298
          Web.getPropertyMap(sitePropertiesContainers, rootWeb, true).forEach((value, key) =>
            selectedSitePropertyMap.set(key, value)
          );

          Web.getPropertyMap(sitePropertiesContainers, currentWeb, false).forEach((value, key) =>
            selectedSitePropertyMap.set(key, value)
          );
        }
        break;
      // no default
    }

    return selectedSitePropertyMap;
  }

  private static getPropertyMap(
    sitePropertiesContainers: SitePropertiesContainer[],
    web: Web,
    isRootWeb: boolean
  ): Map<string, string> {
    const propertyMap = new Map<string, string>();
    const sitePropertiesContainer: SitePropertiesContainer = sitePropertiesContainers.find(
      (value) => value.id === web.url
    );

    sitePropertiesContainer.siteProperties.forEach((siteProperty) => {
      const sitePropertyDisplayName: string = siteProperty.displayName;
      const sitePropertyODataName: string = convertIntoODataName(sitePropertyDisplayName);
      const sitePropertyValue: string = web.allProperties.get(sitePropertyODataName);
      propertyMap.set(
        `${isRootWeb ? 'sc.' : 'ss.'}${sitePropertyDisplayName}`,
        String(sitePropertyValue)
      );
    });

    return propertyMap;
  }

  private static isSameWeb(web: Web, anotherWeb: Web): boolean {
    return web.id === anotherWeb.id;
  }
}
