import Logger from '../../common/Logger';
import DOMController from './DOMController';
import RelevantSearchResultTable from './RelevantSearchResultTable';

import { SearchResultTableCollection } from './interfaces';
import { SearchResultTableType } from '../../common/enumerations';
import { TRIM_SEARCH_RESULTS_START } from '../../common/constants';

window.ExecuteOrDelayUntilScriptLoaded(() => {
  window.sessionStorage.setItem(TRIM_SEARCH_RESULTS_START, `${Date.now()}`);

  const { Result } = window.Srch;
  const oldProcessResultReady = Result.prototype.processResultReady;

  Result.prototype.processResultReady = function newProcessResultReady(
    resultTableCollection: SearchResultTableCollection
  ): void {
    Logger.printMessage(resultTableCollection);

    const { RelevantResults, RefinementResults, PersonalFavoriteResults } = SearchResultTableType;

    resultTableCollection.ResultTables.forEach((rawSearchResultTable) => {
      switch (rawSearchResultTable.TableType) {
        case RelevantResults:
          {
            Logger.printMessage('Relevant Search Results: ', rawSearchResultTable.ResultRows);

            const relevantSearchResultTable = new RelevantSearchResultTable(rawSearchResultTable);

            relevantSearchResultTable
              .trim()
              .then((trimedRelevantResults) => {
                rawSearchResultTable.ResultRows = trimedRelevantResults;
                oldProcessResultReady.call(this, resultTableCollection);

                const start = Number(sessionStorage.getItem(TRIM_SEARCH_RESULTS_START));
                Logger.printMessage(`Trim search results spend: ${Date.now() - start}ms`);
              })
              .catch((err: Error) => {
                Logger.printError(err.stack);
              });

            rawSearchResultTable.ResultRows = [];
          }
          break;
        case RefinementResults:
          // doing nothing
          break;
        case PersonalFavoriteResults:
          // doing nothing
          break;
        // no default
      }
    });

    oldProcessResultReady.call(this, resultTableCollection);
    DOMController.showPromptElement();
  };
}, 'search.clientcontrols.js');
