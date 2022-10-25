import ListData from './ListData';
import { trimString, hijack } from '../../util';
import Logger from '../../common/Logger';
import { PolicyResultCache, ListItem } from '../common';

import { LIST_ITEM_ID_IS_NAN } from '../../common/constants';
import { RawListData, RawListItemData, ContextInfo } from '../../common/interfaces';
import DOMController from './DOMController';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import { ListTemplateType } from '../../common/enumerations';

// Hijack "window.RenderListView" to trim list items in common situation.
hijack(window, 'RenderListView', (oldRenderListView) => {
  return function newRenderListView(listCTX: ContextInfo, wpq: string, ...args): void {
    const startTime: number = Date.now();

    const listTemplateType = listCTX.listTemplate;

    if (
      listTemplateType !== ListTemplateType.GenericList &&
      listTemplateType !== ListTemplateType.DocumentLibrary
    ) {
      oldRenderListView(listCTX, wpq, ...args);
      DOMController.hidePromptElement(wpq);
      return;
    }

    const webAbsoluteURL: string = listCTX.HttpRoot;
    const rows: RawListItemData[] = listCTX.ListData.Row;
    const listID: string = trimString(listCTX.listName, '{', '}').toLowerCase();
    const listData = new ListData(rows, webAbsoluteURL, listID);
    const placeHolderListItem: RawListItemData = ListItem.getPlaceholderListItem();

    if (rows.length === 0) {
      oldRenderListView(listCTX, wpq, ...args);
      DOMController.hidePromptElement(wpq);
      DOMController.hidePlaceholderElement(listCTX);
      return;
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

    if (listData.isAllPolicyResultsCached()) {
      const trimedRows: RawListItemData[] = rows.filter((row) => {
        if (ListItem.isListItemData(row)) {
          const resourceURL = new URL(webAbsoluteURL).origin + row.FileRef;
          const isAccessible = PolicyResultCache.get(resourceURL);

          return isAccessible;
        }

        return true;
      });

      if (trimedRows.length === 0) {
        // Add a customized row to let the other functions work correctly.
        listCTX.ListData.Row = [placeHolderListItem];
      } else {
        listCTX.ListData.Row = trimedRows;
      }

      oldRenderListView(listCTX, wpq, ...args);
      DOMController.hidePromptElement(wpq);
      DOMController.hidePlaceholderElement(listCTX);
      DOMController.insertAllListItemsTrimedPromptElement(listCTX);

      Logger.printMessage(`Trim list items spend: ${Date.now() - startTime}ms`);
    } else {
      const oldRows = listCTX.ListData.Row;
      // Add a customized row to let the other functions work correctly.
      listCTX.ListData.Row = [placeHolderListItem];
      oldRenderListView(listCTX, wpq, ...args);
      DOMController.showPromptElement(wpq, PROMPT_MESSAGES.waiting);
      DOMController.hidePlaceholderElement(listCTX);
      listCTX.ListData.Row = oldRows;

      listData
        .trim()
        .then((listItemDataRows) => {
          const trimedRows = listCTX.ListData.Row.filter(
            (row) => !listItemDataRows.some((value) => value.ID === row.ID && value.shouldBeTrimed)
          );
          Logger.printMessage('Trimed data: ', trimedRows);

          if (trimedRows.length === 0) {
            // Add a customized row to let the other functions work correctly.
            listCTX.ListData.Row = [placeHolderListItem];
          } else {
            listCTX.ListData.Row = trimedRows;
          }

          // Function "window.ReRenderListView()" is set by "inplview.js", and the js file load too late,
          // so we need to delay running the code until it loaded.
          window.ExecuteOrDelayUntilScriptLoaded(() => {
            window.ReRenderListView(listCTX);
            // "window.g_ExpGroupTable" will store the expanded group, so we should reset it before re-expand group.
            window.g_ExpGroupTable = [];
            window.ExpDataViewGroupOnPageLoad();

            DOMController.hidePlaceholderElement(listCTX);
            DOMController.insertAllListItemsTrimedPromptElement(listCTX);

            Logger.printMessage(`Trim list items spend: ${Date.now() - startTime}ms`);
          }, 'inplview.js');
        })
        .catch((err) => {
          // Deal with the error when upload new file. It's id is not a number at first time.
          if (err.message.includes(LIST_ITEM_ID_IS_NAN)) {
            Logger.printWarn(err);
            return;
          }

          DOMController.showPromptElement(wpq, err);
          Logger.printError(err);
        });
    }
  };
});

// Function "window.CLVP.prototype.OnReadyStateChangeCallback" is set by "inplview.js", and the js file load too late,
// so we need to delay running the code until it loaded.
window.ExecuteOrDelayUntilScriptLoaded(() => {
  // Hijack "window.CLVP.prototype.OnReadyStateChangeCallback" to trim list items in the group.
  hijack(window.CLVP.prototype, 'OnReadyStateChangeCallback', (oldCallBack) => {
    return function newOnReadyStateChangeCallback(
      reqStatus: number,
      reqResponse: string,
      strUrl: string,
      authRedirect,
      isEcbInfo: boolean,
      tBody: HTMLElement,
      groupBody: HTMLElement,
      ...args
    ): void {
      const startTime: number = Date.now();

      const { wpq, listTemplate } = this.ctx as ContextInfo;
      const newCallBack = (newReqResponse: string = reqResponse): void => {
        return oldCallBack.call(
          this,
          reqStatus,
          newReqResponse,
          strUrl,
          authRedirect,
          isEcbInfo,
          tBody,
          groupBody,
          ...args
        );
      };

      // If it is not a callBack about group, we will not deal with it.
      if (
        (listTemplate !== ListTemplateType.GenericList &&
          listTemplate !== ListTemplateType.DocumentLibrary) ||
        groupBody == null ||
        !this.ctx.IsClientRendering
      ) {
        newCallBack();
        return;
      }

      // If it's response's row is empty, we will not deal with it.
      const rawListData: RawListData = JSON.parse(reqResponse);
      const rows: RawListItemData[] = rawListData.Row;
      if (rows.length === 0) {
        newCallBack();
        DOMController.hidePromptElement(wpq);
        DOMController.hidePlaceholderElement(this.ctx);
        return;
      }

      const webAbsoluteURL: string = this.ctx.HttpRoot;
      const listID: string = trimString(this.ctx.listName, '{', '}').toLowerCase();
      const listData = new ListData(rows, webAbsoluteURL, listID);
      const placeHolderListItem: RawListItemData = ListItem.getPlaceholderListItem();

      Logger.printMessage('Original data: ', rows);

      if (listData.isAllPolicyResultsCached()) {
        const trimedRows: RawListItemData[] = rows.filter((row) => {
          if (ListItem.isListItemData(row)) {
            const resourceURL = new URL(webAbsoluteURL).origin + row.FileRef;
            const isAccessible = PolicyResultCache.get(resourceURL);

            return isAccessible;
          }

          return true;
        });

        if (trimedRows.length === 0) {
          // Add a customized row to let the other functions work correctly.
          rawListData.Row = [placeHolderListItem];
        } else {
          rawListData.Row = trimedRows;
        }
        const newReqResponse: string = JSON.stringify(rawListData);

        newCallBack(newReqResponse);
        DOMController.hidePromptElement(wpq);
        DOMController.hidePlaceholderElement(this.ctx);
        DOMController.insertAllListItemsTrimedPromptElement(this.ctx);

        Logger.printMessage(`Trim list items spend: ${Date.now() - startTime}ms`);
      } else {
        listData
          .trim()
          .then((listItemDataRows) => {
            const trimedRows = listItemDataRows.filter((row) => !row.shouldBeTrimed);
            if (trimedRows.length === 0) {
              // Add a customized row to let the other functions work correctly.
              rawListData.Row = [placeHolderListItem];
            } else {
              rawListData.Row = trimedRows;
            }
            const newReqResponse = JSON.stringify(rawListData);

            newCallBack(newReqResponse);
            DOMController.hidePromptElement(wpq);
            DOMController.hidePlaceholderElement(this.ctx);
            DOMController.insertAllListItemsTrimedPromptElement(this.ctx);

            Logger.printMessage(`Trim list items spend: ${Date.now() - startTime}ms`);
          })
          .catch((err) => {
            // Deal with the error when upload new file. It's id is not a number at first time.
            if (err.message.includes(LIST_ITEM_ID_IS_NAN)) {
              Logger.printWarn(err);
              return;
            }

            DOMController.showPromptElement(wpq, err);
            Logger.printError(err);
          });
      }
    };
  });
}, 'inplview.js');

const postRender = (ctx: ContextInfo): void => {
  const { wpq } = ctx;
  DOMController.insertPromptElement(wpq);
};

window.SPClientTemplates.TemplateManager.RegisterTemplateOverrides({
  OnPostRender: postRender,
  ListTemplateType: ListTemplateType.DocumentLibrary,
});

window.SPClientTemplates.TemplateManager.RegisterTemplateOverrides({
  OnPostRender: postRender,
  ListTemplateType: ListTemplateType.GenericList,
});
