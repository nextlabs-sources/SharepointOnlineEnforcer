import { SPBatch, SPRest, ISharePointQueryableInstance, IWebInfo } from '@pnp/sp/presets/all';
import {
  UserInfo,
  RawListItemData,
  ExpandedWebInfo,
  ExpandedListInfo,
} from '../../common/interfaces';
import Logger from '../../common/Logger';
import { ITEM_DOES_NOT_EXIST } from '../../common/constants';

export default class SharePointServerProxy {
  private sp: SPRest;
  private batch: SPBatch;

  constructor(baseURL: string) {
    this.sp = new SPRest(null, baseURL);
    this.batch = this.sp.createBatch();
  }

  public getRootWebInfo(): ExpandedWebInfo {
    return this.get(this.sp.site.rootWeb.expand('AllProperties')) as ExpandedWebInfo;
  }

  public getCurrentWebInfo(): ExpandedWebInfo {
    return this.get(this.sp.web.expand('AllProperties')) as ExpandedWebInfo;
  }

  // TODO: Separate the single request and batch request.
  public getWebInfo(): Promise<IWebInfo> {
    return this.sp.web.expand('AllProperties').get();
  }

  public getCurrentUserInfo(): UserInfo {
    return this.get(this.sp.profiles.myProperties) as UserInfo;
  }

  public getListInfoByID(listID: string): ExpandedListInfo {
    const request = this.sp.web.lists
      .getById(listID)
      .expand('Fields', 'RootFolder', 'ParentWeb', 'ParentWeb/AllProperties');

    return this.get(request) as ExpandedListInfo;
  }

  public getListInfoByURL(listRelativeURL: string): ExpandedListInfo {
    const request = this.sp.web
      .getList(listRelativeURL)
      .expand('Fields', 'RootFolder', 'ParentWeb', 'ParentWeb/AllProperties');

    return this.get(request) as ExpandedListInfo;
  }

  public getListItemFieldValues(
    listID: string,
    listItemID: number,
    fieldInternalNames: string[]
  ): Record<string, any> {
    const request = this.sp.web.lists
      .getById(listID)
      .items.getById(listItemID)
      .fieldValuesAsText.select('FileLeafRef', ...fieldInternalNames);

    return this.get(request, SharePointServerProxy.decodeRes);
  }

  public getListItemAllFieldValues(listID: string, listItemID: number): RawListItemData {
    const request = this.sp.web.lists.getById(listID).items.getById(listItemID).fieldValuesAsText;

    return this.get(request, SharePointServerProxy.decodeRes) as RawListItemData;
  }

  public getFileByID(fileUniqueID: string): Record<string, any> {
    return this.get(this.sp.web.getFileById(fileUniqueID).expand('ListItemAllFields'));
  }

  public getFolderByID(folderUniqueID: string): Record<string, any> {
    return this.get(this.sp.web.getFolderById(folderUniqueID).expand('ListItemAllFields'));
  }

  public execute(): Promise<void> {
    const batchPromise: Promise<void> = this.batch.execute();
    this.batch = this.sp.createBatch();

    return batchPromise;
  }

  private get(
    request: ISharePointQueryableInstance,
    callBack = SharePointServerProxy.defaultResHandler
  ): Record<string, any> {
    const result = {};

    request
      .inBatch(this.batch)
      .get()
      .then(callBack(result))
      .catch((error) => {
        // Deal with the error of "Item does not exist" when set policies about denying edit and view in the same time.
        // In this situation, when upload an file which should be denied, sometimes it will request for a deleted item because edit denying is post denying(Upload first and delete it latter).
        if (error.message.includes(ITEM_DOES_NOT_EXIST)) {
          Logger.printWarn(error);
          return;
        }

        Logger.printError(error);
      });

    return result;
  }

  private static defaultResHandler(result): (res: any) => void {
    return (res): void => {
      Object.assign(result, res);
    };
  }

  private static decodeRes(result): (res: any) => void {
    return (res): void => {
      Object.keys(res).forEach((key) => {
        const newKey = key.replace(/^OData_/, '').replace(/_x005f_/g, '_');
        if (newKey !== key) {
          res[newKey] = res[key];
          delete res[key];
        }
      });

      Object.assign(result, res);
    };
  }
}
