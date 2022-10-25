import Web from './Web';
import Field from './Field';
import { ExpandedListInfo } from '../../common/interfaces';

export default class List {
  public readonly baseType: number;
  public readonly description: string;
  public readonly fields: Field[];
  public readonly id: string;
  public readonly parentWeb: Web;
  public readonly title: string;
  public readonly url: string;

  constructor(
    baseType: number,
    description: string,
    fields: Field[],
    id: string,
    parentWeb: Web,
    title: string,
    url: string
  ) {
    this.baseType = baseType;
    this.description = description;
    this.fields = fields;
    this.id = id;
    this.parentWeb = parentWeb;
    this.title = title;
    this.url = url;
  }

  /**
   * Use the list info to construct a List object.
   * @param listInfo The list info which is responded from SharePoint server.
   * @returns A List object.
   */
  public static parseFromSPResponse(listInfo: ExpandedListInfo): List {
    const {
      BaseType: listBaseType,
      Description: listDescription,
      Fields: listFieldInfos,
      Id: listID,
      ParentWeb: listParentWebInfo,
      Title: listTitle,
      RootFolder: listRootFolder,
    } = listInfo;

    const listFields: Field[] = listFieldInfos.map((fieldInfo) =>
      Field.parseFromSPResponse(fieldInfo)
    );
    const listParentWeb: Web = Web.parseFromSPResponse(listParentWebInfo);
    const listURL: string = new URL(listParentWeb.url).origin + listRootFolder.ServerRelativeUrl;

    return new List(
      listBaseType,
      listDescription,
      listFields,
      listID,
      listParentWeb,
      listTitle,
      listURL
    );
  }
}
