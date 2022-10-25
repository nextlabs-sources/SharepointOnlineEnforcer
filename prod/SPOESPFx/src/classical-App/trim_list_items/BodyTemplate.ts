import ListData from './ListData';
import Logger from '../../common/Logger';
import DOMController from './DOMController';
import { getHideListItemDOMString, ListItem } from '../common';
import PolicyResultCache from '../common/PolicyResultCache';
import { isUndefined, trimString } from '../../util';

import { ContextInfo, RawListItemData } from '../../common/interfaces';
import {
  LIST_ITEM_ID_IS_NAN,
  TRIM_LIST_ITEMS_START,
  ITEM_DOES_NOT_EXIST,
} from '../../common/constants';

export default class BodyTemplate {
  public static render(listCTX: ContextInfo): string {
    const webAbsoluteURL: string = listCTX.HttpRoot;
    const rows: RawListItemData[] = listCTX.ListData.Row;
    const listID: string = trimString(listCTX.listName, '{', '}').toLowerCase();

    if (rows.length === 0) {
      return window.RenderBodyTemplate(listCTX);
    }

    Logger.printMessage('Original data: ', rows);

    // Change the number of group's items into "*".
    // TODO: Change the number of group's items after trimming.
    rows.forEach((row) => {
      Object.keys(row).forEach((key) => {
        if (key.endsWith('COUNT.group')) {
          row[key] = '*';
        }
      });
    });

    const isAllCached = rows.every((row) => {
      // Skip the row which is not about list item data, for example group data.
      if (!ListItem.isListItemData(row)) {
        return true;
      }

      const resourceURL = encodeURI(new URL(webAbsoluteURL).origin + row.FileRef);
      const isAccessible = PolicyResultCache.get(resourceURL);

      if (!isUndefined(isAccessible)) {
        row.shouldBeTrimed = !isAccessible;
        return true;
      }

      return false;
    });

    if (isAllCached) {
      const trimedRows = rows.filter((row) => !row.shouldBeTrimed);
      listCTX.ListData.Row = trimedRows;

      const start = Number(sessionStorage.getItem(TRIM_LIST_ITEMS_START));
      Logger.printMessage(`Trim list items spend: ${Date.now() - start}ms`);
      return window.RenderBodyTemplate(listCTX);
    }

    const hideListItemBodyTemplate: string = getHideListItemDOMString(listCTX);
    const listData = new ListData(rows, webAbsoluteURL, listID);

    listData
      .trim()
      .then((listItemDataRows) => {
        const trimedRows = listCTX.ListData.Row.filter(
          (row) => !listItemDataRows.some((value) => value.ID === row.ID && value.shouldBeTrimed)
        );
        Logger.printMessage('Trimed data: ', trimedRows);

        listCTX.ListData.Row = trimedRows;

        // Function "window.ReRenderListView()" is set by "inplview.js", and the js file load too late,
        // so we need to delay running the code until it loaded.
        window.ExecuteOrDelayUntilScriptLoaded(() => {
          window.ReRenderListView(listCTX);
          // "window.g_ExpGroupTable" will store the expanded group, so we should reset it before re-expand group.
          window.g_ExpGroupTable = [];
          window.ExpDataViewGroupOnPageLoad();

          const start = Number(sessionStorage.getItem(TRIM_LIST_ITEMS_START));
          Logger.printMessage(`Trim list items spend: ${Date.now() - start}ms`);
        }, 'inplview.js');
      })
      .catch((err) => {
        // Deal with the error when upload new file. It's id is not a number at first time.
        if (err.message.includes(LIST_ITEM_ID_IS_NAN)) {
          Logger.printWarn(err);
          return;
        }

        // Deal with the error of "Item does not exist" when set policies about denying edit and view in the same time.
        // In this situation, when upload an file which should be denied, sometimes it will request for a deleted item because edit denying is post denying(Upload first and delete it latter).
        if (err.message.includes(ITEM_DOES_NOT_EXIST)) {
          Logger.printWarn(err);
          DOMController.showListItems(listCTX.wpq);
          return;
        }

        const { wpq } = listCTX;

        Logger.printError(err);
        DOMController.changePrompt(wpq, err);
        DOMController.clearListItemsDOM(wpq);

        const start = Number(sessionStorage.getItem(TRIM_LIST_ITEMS_START));
        Logger.printMessage(`Trim list items spend: ${Date.now() - start}ms`);
      });

    return hideListItemBodyTemplate;
  }
}
