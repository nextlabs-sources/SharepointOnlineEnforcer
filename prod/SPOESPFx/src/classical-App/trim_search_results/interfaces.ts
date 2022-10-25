import { SearchResultTableType } from '../../common/enumerations';

export interface RawRelevantSearchResult {
  SiteName?: string;
  SPWebUrl?: string;
  Path?: string;
  UniqueId?: string;
  IsContainer?: boolean;
  Title: string;
}

export interface RawSearchResultTable {
  ResultRows: RawRelevantSearchResult[];
  TableType: SearchResultTableType;
}

export interface SearchResultTableCollection {
  ResultTables: RawSearchResultTable[];
}
