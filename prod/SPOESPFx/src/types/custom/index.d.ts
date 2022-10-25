import { ContextInfo, RawListItemData } from '../../common/interfaces';
import { SearchResultTableCollection } from '../../classical-App/trim_search_results/interfaces';
import { ListTemplateType } from '../../common/enumerations';

export interface SpPageContextInfo {
  webAbsoluteUrl: string;
  viewId: string;
  listId: string;
  userLoginName: string;
  serverRequestPath: string;
  siteAbsoluteUrl: string;
  listBaseTemplate: number;
}

declare global {
  interface Window {
    SPClientTemplates: {
      TemplateManager?: {
        RegisterTemplateOverrides?: (options: {
          OnPreRender?: Function | Function[];
          OnPostRender?: Function | Function[];
          ListTemplateType: ListTemplateType;
        }) => void;
      };
    };
    RenderBodyTemplate: (ctx: ContextInfo) => string;
    _spPageContextInfo: SpPageContextInfo;
    isSupportedBrowser: boolean;
    Proxy: any;
    GoToModern: Function;
    g_ctxDict: Record<string, any>;
    g_ExpGroupTable: any[];
    g_ExpGroupInProgress: boolean;
    RenderListView: (ctx: ContextInfo, wpq: string) => void;
    ReRenderListView: (ctx: ContextInfo) => void;
    Srch: {
      Result: {
        prototype: {
          processResultReady: (resultTableCollection: SearchResultTableCollection) => void;
        };
      };
    };
    ExpDataViewGroupOnPageLoad: () => void;
    ExecuteOrDelayUntilScriptLoaded: (func: () => void, scriptName: string) => void;
    GenerateIIDForListItem: (ctx: ContextInfo, listItem: RawListItemData) => string;
    CLVP: {
      prototype: {
        OnReadyStateChangeCallback: (
          reqStatus: number,
          reqResponse: string,
          strUrl: string,
          authRedirect,
          isEcbInfo: boolean,
          tBody: HTMLElement,
          groupBody: HTMLElement,
          ...args: any[]
        ) => void;
      };
    };
  }

  interface EventTarget {
    attachEvent(event: string, listener: EventListener): boolean;
    detachEvent(event: string, listener: EventListener): void;
  }
}
