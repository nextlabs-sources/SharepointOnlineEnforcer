import { IFieldInfo, IWebInfo, IListInfo, FieldTypes } from '@pnp/sp/presets/all';
import { SitePropertyLevel, ExceptionBehavior, ListTemplateType } from './enumerations';

interface SiteProperty {
  displayName: string;
}

export interface RawListItemData {
  ID: string;
  FSObjType: string;
  Title?: string;
  FileRef?: string;
  File_x0020_Type?: string;
  shouldBeTrimed?: boolean;
  UniqueId?: string;
  [propName: string]: any;
}

export interface RawListData {
  Row: RawListItemData[];
}

export interface SPOEConfigInfo {
  JavaPcHost: string;
  OAUTHHost: string;
  ClientSecureID: string;
  ClientSecureKey: string;
}

export interface Site {
  siteProperties: SiteProperty[];
  id: string;
}

export interface CachingConfiguration {
  cachingStore: 'session' | 'local';
  cachingTimeoutSeconds: number;
}

export interface ContextInfo {
  wpq: string;
  listName: string;
  listUrlDir: string;
  listTemplate: ListTemplateType;
  ListData: RawListData;
  HttpRoot: string;
}

export interface SPPropertyValues {
  SPOLESelectedLists?: string;
  SPOLEGeneralSetInfo?: string;
  SPOLESitePropertyLevel?: SitePropertyLevel;
  SPOLESitePropertyList?: string;
  SPOLEDefaultBehavior?: ExceptionBehavior;
  [key: string]: any;
}

export interface SPKeyValue {
  Key: string;
  Value: string;
  ValueType: string;
}

export type JPCConfig = Map<'jpcHost' | 'oAuthHost' | 'clientSecureID' | 'clientSecureKey', string>;

export interface ExpandedFieldInfo extends IFieldInfo {
  OutputType?: FieldTypes;
}

export interface ExpandedListInfo extends IListInfo {
  Fields: ExpandedFieldInfo[];
  ParentWeb: ExpandedWebInfo;
  BaseType: number;
  Description: string;
}

export interface ExpandedWebInfo extends IWebInfo {
  AllProperties: SPPropertyValues;
}

export interface SitePropertiesContainer {
  siteProperties: SiteProperty[];
  id: string;
}

export type TrimResult = Map<'isAccessDenied', boolean> & Map<'trimedRows', RawListItemData[]>;

export interface UserInfo {
  AccountName: string;
  UserProfileProperties: SPKeyValue[];
}
