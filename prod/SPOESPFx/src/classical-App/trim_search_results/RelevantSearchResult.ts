import {
  User,
  SharePointServerProxy,
  Web,
  List,
  PolicyRequestor,
  ListItem,
  SPOLEServerProxy,
} from '../common';
import Logger from '../../common/Logger';
import { PEPResponse, DecisionType } from '../../QueryCloudAzJS';

import { RawRelevantSearchResult } from './interfaces';
import { ExceptionBehavior } from '../../common/enumerations';
import {
  JPCConfig,
  ExpandedWebInfo,
  ExpandedListInfo,
  RawListItemData,
} from '../../common/interfaces';
import Field from '../common/Field';
import PolicyResultCache from '../common/PolicyResultCache';
import { isUndefined } from '../../util';

export default class RelevantSearchResult {
  private url: URL;
  private webAbsoluteURL: string;
  private isContainer: boolean;
  private uniqueId: string;
  private siteName: string;

  private rootWeb: Web;
  private currentWeb: Web;
  private list: List;
  private listItem: ListItem;

  constructor(relevantSearchResultRow: RawRelevantSearchResult) {
    const {
      Path: path,
      SPWebUrl: webAbsoluteURL,
      SiteName: siteName,
      IsContainer: isContainer,
      UniqueId: uniqueId,
    } = relevantSearchResultRow;

    this.url = new URL(path);
    this.webAbsoluteURL = webAbsoluteURL;
    this.siteName = siteName;
    this.isContainer = isContainer;
    this.uniqueId = uniqueId;
  }

  public async isAccessible(user: User): Promise<boolean> {
    const resourceURL: string = this.url.href;
    try {
      const cachedPolicyResult: boolean = PolicyResultCache.get(resourceURL);
      if (!isUndefined(cachedPolicyResult)) {
        return cachedPolicyResult;
      }

      await this.initTrim();

      const listID: string = this.list.id;
      const selectedListMap: Map<string, string> = this.rootWeb.getSelectedListMap();

      if (!selectedListMap.has(listID)) {
        PolicyResultCache.set(resourceURL, true);
        return true;
      }

      // TODO: 重构 去重
      const spoleServerProxy = new SPOLEServerProxy(this.rootWeb.getSPOLEServerOrigin());
      const selectedFields: Field[] = await spoleServerProxy.getListSelectedFields(this.list);

      const jpcConfig: JPCConfig = this.rootWeb.getJPCConfig();
      const policyRequestor = new PolicyRequestor(jpcConfig, user);
      const selectedSiteProperties: Map<string, string> = Web.getSelectedSitePropertyMap(
        this.rootWeb,
        this.currentWeb
      );
      const policyResult: PEPResponse = await policyRequestor
        .getPolicyResultsForViewListItems([this.listItem], selectedFields, selectedSiteProperties)
        .then((res) => res[0]);
      const result: boolean = policyResult.getDecision() === DecisionType.PERMIT;

      PolicyResultCache.set(resourceURL, result);
      return result;
    } catch (error) {
      // Based on the property of "isDocument" and "isContainer", we can not know whether the search result is a file or a folder.
      // For example the "isDocument" is false for "JavaScript" file, and the "isContainer" is true for a site URL. So we request it first.
      // If it response "System.IO.FileNotFoundException" error, we consider it is not a file or a folder, and we will not enforce it.
      if (error.message.includes('System.IO.FileNotFoundException')) {
        Logger.printWarn(error);

        PolicyResultCache.set(resourceURL, true);
        return true;
      }

      Logger.printError(error);

      const exceptionBehavior: ExceptionBehavior =
        this.rootWeb && this.rootWeb.getExceptionBehavior();

      if (exceptionBehavior && exceptionBehavior === ExceptionBehavior.Allow) {
        PolicyResultCache.set(resourceURL, true);
        return true;
      }

      PolicyResultCache.set(resourceURL, false);
      return false;
    }
  }

  /**
   * Request SharePoint for getting the info about web, list and list item.
   * And use these info to construct relevant object.
   */
  private async initTrim(): Promise<void> {
    const relativeURL: string = decodeURI(this.url.pathname);

    // Sometimes SPWebUrl is null, so we need to get it.
    if (!this.webAbsoluteURL) {
      // It seems that $batch API is sensitive to the casing(https://github.com/pnp/pnpjs/issues/82#issuecomment-384366318).
      // But siteName is always lower case, so we need make a separate request to get the case sensitive URL.
      const spServerProxy = new SharePointServerProxy(this.siteName);
      const currentWebInfo = await spServerProxy.getWebInfo();

      this.webAbsoluteURL = currentWebInfo.Url;
    }

    const spServerProxy = new SharePointServerProxy(this.webAbsoluteURL);
    const rootWebInfo: ExpandedWebInfo = spServerProxy.getRootWebInfo();
    const currentWebInfo: ExpandedWebInfo = spServerProxy.getCurrentWebInfo();
    const listInfo: ExpandedListInfo = spServerProxy.getListInfoByURL(relativeURL);
    let fileOrFolderInfo: Record<string, any>;

    if (this.isContainer) {
      fileOrFolderInfo = spServerProxy.getFolderByID(this.uniqueId);
    } else {
      fileOrFolderInfo = spServerProxy.getFileByID(this.uniqueId);
    }

    await spServerProxy.execute();

    this.rootWeb = Web.parseFromSPResponse(rootWebInfo);
    this.currentWeb = Web.parseFromSPResponse(currentWebInfo);
    this.list = List.parseFromSPResponse(listInfo);

    const listID: string = this.list.id;
    const listItemID: number = fileOrFolderInfo.ListItemAllFields.ID;
    const listItemInfo: RawListItemData = spServerProxy.getListItemAllFieldValues(
      listID,
      listItemID
    );
    await spServerProxy.execute();

    this.listItem = new ListItem(this.list, listItemInfo);
  }
}
