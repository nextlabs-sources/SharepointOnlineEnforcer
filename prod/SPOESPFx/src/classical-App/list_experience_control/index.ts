import Logger from '../../common/Logger';
import { SharePointServerProxy } from '../common';
import { getPageContextInfo, trimString } from '../../util';
import ListExperienceController from './ListExperienceController';

import { SpPageContextInfo } from '../../types/custom';
import { ExpandedWebInfo } from '../../common/interfaces';
import { LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH } from '../../common/constants';

window.addEventListener('DOMContentLoaded', () => {
  const pageCTX: SpPageContextInfo = getPageContextInfo();
  const { serverRequestPath, webAbsoluteUrl } = pageCTX;

  if (serverRequestPath === LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH) {
    const currentListId: string = trimString(pageCTX.listId, '{', '}');

    const spServerProxy = new SharePointServerProxy(webAbsoluteUrl);
    const rootWebInfo: ExpandedWebInfo = spServerProxy.getRootWebInfo();

    spServerProxy
      .execute()
      .then(() => {
        const selectedLists = JSON.parse(rootWebInfo.AllProperties.SPOLESelectedLists || '{}');

        if (selectedLists[currentListId]) {
          ListExperienceController.preventChanging();
        }
      })
      .catch(Logger.printError);
  }
});
