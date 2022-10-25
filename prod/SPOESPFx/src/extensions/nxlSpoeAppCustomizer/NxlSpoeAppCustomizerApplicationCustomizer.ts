import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { sp, SPBatch } from '@pnp/sp/presets/all';

import PolicyControl from './PolicyControl';
import { CACHING_CONFIG } from '../../common/constants';
import hideListBody from './hide-list-body';
import { ListTemplateType } from '../../common/enumerations';
import { SPPropertyValues } from '../../common/interfaces';
import Logger from '../../common/Logger';

/** A Custom Action which can be run during execution of a Client Side Application */
export default class NxlSpoeAppCustomizerApplicationCustomizer extends BaseApplicationCustomizer<
  void
> {
  @override
  public onInit(): Promise<void> {
    // eslint-disable-next-line no-underscore-dangle
    const pageCTX = window._spPageContextInfo;

    // In modern custom page, _spPageContextInfo is not defined.
    const listBaseTemplate: string = pageCTX && pageCTX.listBaseTemplate.toString();
    if (
      listBaseTemplate !== ListTemplateType.DocumentLibrary &&
      listBaseTemplate !== ListTemplateType.GenericList
    ) {
      return Promise.resolve();
    }

    hideListBody();

    return super.onInit().then(() => {
      Logger.printMessage('Access Control for Morden Page');
      const batch: SPBatch = sp.web.createBatch();

      let rootWebProperties: SPPropertyValues;
      sp.site.rootWeb.allProperties
        .usingCaching()
        .inBatch(batch)
        .get()
        .then((res) => {
          rootWebProperties = res;
        })
        .catch(Logger.printError);

      let currentWebProperties: SPPropertyValues;
      sp.web.allProperties
        .usingCaching()
        .inBatch(batch)
        .get()
        .then((res) => {
          currentWebProperties = res;
        })
        .catch(Logger.printError);

      // Get user info
      const userLoginName: string = this.context.pageContext.user.loginName;
      let userProfilesProperties: any[];
      sp.profiles.myProperties
        .usingCaching()
        .inBatch(batch)
        .get()
        .then((res) => {
          userProfilesProperties = res.UserProfileProperties.results || res.UserProfileProperties;
        })
        .catch(Logger.printError);

      // Start policy control when all above done
      batch
        .execute()
        .then(() => {
          Logger.printMessage('Root Web All Properties: ', rootWebProperties);
          Logger.printMessage('Current Web All Properties: ', currentWebProperties);
          Logger.printMessage('User Login Name: ', userLoginName);
          Logger.printMessage('User Profiles Properties', userProfilesProperties);
          if (!rootWebProperties.SPOLEGeneralSetInfo) return;

          const policyControl = new PolicyControl(
            rootWebProperties,
            currentWebProperties,
            userLoginName,
            userProfilesProperties
          );
          policyControl.start();
        })
        .catch(Logger.printError);

      // Establish context
      sp.setup({
        spfxContext: this.context,
        defaultCachingStore: CACHING_CONFIG.cachingStore,
        defaultCachingTimeoutSeconds: CACHING_CONFIG.cachingTimeoutSeconds,
      });
    });
  }
}
