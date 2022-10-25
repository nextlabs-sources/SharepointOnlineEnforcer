import { Promise as BluebirdPromise } from 'bluebird';

import Logger from '../../common/Logger';
import { getPageContextInfo } from '../../util';
import { SharePointServerProxy, User } from '../common';
import RelevantSearchResult from './RelevantSearchResult';

import { UserInfo } from '../../common/interfaces';
import { RawRelevantSearchResult, RawSearchResultTable } from './interfaces';
import { SpPageContextInfo } from '../../types/custom';

export default class RelevantSearchResultTable {
  public readonly resultRows: RawRelevantSearchResult[];

  constructor(rawSearchResultTable: RawSearchResultTable) {
    this.resultRows = rawSearchResultTable.ResultRows;
  }

  public async trim(): Promise<RawRelevantSearchResult[]> {
    const pageCTX: SpPageContextInfo = getPageContextInfo();
    const searchPageWebAbsoluteURL: string = pageCTX.webAbsoluteUrl;

    const spServerProxy = new SharePointServerProxy(searchPageWebAbsoluteURL);
    const currentUserInfo: UserInfo = spServerProxy.getCurrentUserInfo();
    await spServerProxy.execute();

    const user: User = User.parseFromSPResponse(currentUserInfo);
    const newRelevantResultRows: RawRelevantSearchResult[] = await BluebirdPromise.filter(
      this.resultRows,
      (item) => new RelevantSearchResult(item).isAccessible(user)
    );

    Logger.printMessage('newRelevantResultRows: ', newRelevantResultRows);

    return newRelevantResultRows;
  }
}
