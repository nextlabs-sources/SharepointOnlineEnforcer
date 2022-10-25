import {
  Web,
  List,
  User,
  PolicyRequestor,
  ListItem,
  SharePointServerProxy,
  Field,
  SPOLEServerProxy,
} from '../common';
import Logger from '../../common/Logger';
import { isUndefined, isEmptyObject } from '../../util';
import { PEPResponse, DecisionType } from '../../QueryCloudAzJS';
import ListExperienceController from '../list_experience_control/ListExperienceController';

import {
  JPCConfig,
  RawListItemData,
  ExpandedWebInfo,
  ExpandedListInfo,
  UserInfo,
} from '../../common/interfaces';
import { ExceptionBehavior } from '../../common/enumerations';
import PolicyResultCache from '../common/PolicyResultCache';
import { LIST_ITEM_ID_IS_NAN } from '../../common/constants';

export default class ListData {
  public listItemDataRows: RawListItemData[];
  private listID: string;
  private webAbsoluteURL: string;

  private rootWeb: Web;
  private currentWeb: Web;
  private list: List;
  private user: User;

  constructor(rows: RawListItemData[], webAbsoluteURL: string, listID: string) {
    // Skip the row which is not about list item data, for example group data.
    this.listItemDataRows = rows.filter((row) => ListItem.isListItemData(row));
    this.listID = listID;
    this.webAbsoluteURL = webAbsoluteURL;
  }

  public isAllPolicyResultsCached(): boolean {
    return this.listItemDataRows.every((row) => {
      const resourceURL = new URL(this.webAbsoluteURL).origin + row.FileRef;
      const isAccessible = PolicyResultCache.get(resourceURL);

      if (!isUndefined(isAccessible)) {
        return true;
      }
      return false;
    });
  }

  /** Trim the list data */
  public async trim(): Promise<RawListItemData[]> {
    if (this.listItemDataRows.length === 0) {
      return this.listItemDataRows;
    }

    try {
      await this.initTrim();

      const selectedListMap: Map<string, string> = this.rootWeb.getSelectedListMap();

      if (!selectedListMap.has(this.listID)) {
        this.listItemDataRows.forEach((row) => {
          const resourceURL = new URL(this.webAbsoluteURL).origin + row.FileRef;
          PolicyResultCache.set(resourceURL, true);
        });

        return this.listItemDataRows;
      }

      ListExperienceController.preventGoingToModern();

      const spoleServerProxy = new SPOLEServerProxy(this.rootWeb.getSPOLEServerOrigin());
      const selectedFields: Field[] = await spoleServerProxy.getListSelectedFields(this.list);

      const jpcConfig: JPCConfig = this.rootWeb.getJPCConfig();
      const policyRequestor = new PolicyRequestor(jpcConfig, this.user);
      const listItems: ListItem[] = await this.getListItems();
      const selectedSiteProperties: Map<string, string> = Web.getSelectedSitePropertyMap(
        this.rootWeb,
        this.currentWeb
      );

      const policyResults: PEPResponse[] = await policyRequestor.getPolicyResultsForViewListItems(
        listItems,
        selectedFields,
        selectedSiteProperties
      );

      Logger.printMessage(policyResults);

      listItems.forEach((listItem, index) => {
        const isAccessible = policyResults[index].getDecision() === DecisionType.PERMIT;
        this.listItemDataRows[index].shouldBeTrimed = !isAccessible;

        PolicyResultCache.set(listItem.url, isAccessible);
      });

      return this.listItemDataRows;
    } catch (error) {
      if (error.message.includes(LIST_ITEM_ID_IS_NAN)) {
        throw new Error(error);
      }

      if (!isUndefined(this.rootWeb)) {
        const exceptionBehavior = this.rootWeb.getExceptionBehavior();

        if (!isUndefined(exceptionBehavior) && exceptionBehavior === ExceptionBehavior.Allow) {
          Logger.printError(error.stack);

          this.listItemDataRows.forEach((row) => {
            const resourceURL = new URL(this.webAbsoluteURL).origin + row.FileRef;
            PolicyResultCache.set(resourceURL, true);
          });

          return this.listItemDataRows;
        }
      }

      throw new Error(error);
    }
  }

  /**
   * Request SharePoint for getting the info about web, list and user.
   * And use these info to construct relevant object.
   */
  private async initTrim(): Promise<void> {
    const spServerProxy = new SharePointServerProxy(this.webAbsoluteURL);
    const rootWebInfo: ExpandedWebInfo = spServerProxy.getRootWebInfo();
    const currentWebInfo: ExpandedWebInfo = spServerProxy.getCurrentWebInfo();
    const listInfo: ExpandedListInfo = spServerProxy.getListInfoByID(this.listID);
    const currentUserProfiles: UserInfo = spServerProxy.getCurrentUserInfo();
    await spServerProxy.execute();

    this.rootWeb = Web.parseFromSPResponse(rootWebInfo);
    this.currentWeb = Web.parseFromSPResponse(currentWebInfo);
    this.list = List.parseFromSPResponse(listInfo);
    this.user = User.parseFromSPResponse(currentUserProfiles);
  }

  private async getListItems(): Promise<ListItem[]> {
    const spServerProxy = new SharePointServerProxy(this.webAbsoluteURL);

    const rawListItemDataArr: RawListItemData[] = this.listItemDataRows.map((row) => {
      const listItemID = Number(row.ID);
      if (Number.isNaN(listItemID)) {
        throw new Error(LIST_ITEM_ID_IS_NAN);
      }

      return spServerProxy.getListItemAllFieldValues(this.listID, listItemID);
    });

    await spServerProxy.execute().catch((error) => {
      // Every error will be deal with in get()
      // https://github.com/pnp/pnpjs/issues/548#issuecomment-472329724
    });

    const listItems: ListItem[] = rawListItemDataArr
      .map((rawListItemData, index) => {
        // It will be empty object when there is an error happened.
        // We will ignore it and catch the accessibility with false.
        if (isEmptyObject(rawListItemData)) {
          const row = this.listItemDataRows[index];
          const resourceURL = new URL(this.webAbsoluteURL).origin + row.FileRef;
          PolicyResultCache.set(resourceURL, false);
          return undefined;
        }

        return new ListItem(this.list, rawListItemData);
      })
      .filter((listItem) => !isUndefined(listItem));

    return listItems;
  }
}
