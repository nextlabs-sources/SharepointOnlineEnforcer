export enum OBAttributeForFilter {
  ColName = 'ColName',
  Operator = 'Operator',
  ColValue = 'ColValue',
}

export enum SitePropertyLevel {
  None = 'None',
  Subsite = 'Subsite',
  SiteCollection = 'SiteCollection',
  Both = 'Both',
}

export enum ExceptionBehavior {
  Deny = 'deny',
  Allow = 'allow',
}

export enum ListTemplateType {
  InvalidType = '-1',
  NoListTemplate = '0',
  GenericList = '100',
  DocumentLibrary = '101',
  Survey = '102',
  Links = '103',
  // Others: https://docs.microsoft.com/en-us/previous-versions/office/sharepoint-csom/ee541191(v=office.15)
}

export enum ListExperienceRadioInputValue {
  Default = 'RadDisplayOnAutoExperience',
  New = 'RadDisplayOnNewExperience',
  Classic = 'RadDisplayOnClassicExperience',
}

export enum SearchResultTableType {
  RelevantResults = 'RelevantResults',
  RefinementResults = 'RefinementResults',
  PersonalFavoriteResults = 'PersonalFavoriteResults',
}
