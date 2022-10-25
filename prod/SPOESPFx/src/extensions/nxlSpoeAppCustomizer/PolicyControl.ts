import { IFieldInfo } from '@pnp/sp/fields';
import { override } from '@microsoft/decorators';
import { debounce } from '../../util';
import BasePolicyControl from '../../common/BasePolicyControl';
import { Obligation } from '../../QueryCloudAzJS';
import ConditionURL from './ConditionURL';
import hideListBody from './hide-list-body';
import { PROMPT_MESSAGE_CLASS_NAME } from '../../common/constants';
import Logger from '../../common/Logger';

/** A class encapsulating something about policy control for morden page */
class PolicyControl extends BasePolicyControl {
  @override
  public start(): void {
    this.runPolicyControl();

    // Listening to customed shouldrerun event to apply policy control
    this.createShouldRerunEvent();
    const rerunPolicyControl = debounce(() => {
      hideListBody();
      this.runPolicyControl();
    }, 0);
    window.addEventListener('shouldrerun', rerunPolicyControl.bind(this));
  }

  @override
  protected filterList(obligations: Obligation[], fields: IFieldInfo[], viewId: string): void {
    const oblConditionURL: ConditionURL = ConditionURL.parseObligations(
      obligations,
      fields,
      viewId
    );
    if (!oblConditionURL || oblConditionURL.noFilterCons()) {
      this.showListBody();
      return;
    }

    const { location } = window;
    // Using page jump to filter the list
    const currentConditionURL: ConditionURL = ConditionURL.parseURL(location.search);
    if (!currentConditionURL) {
      location.search = oblConditionURL.toString();
    } else if (!oblConditionURL.includes(currentConditionURL)) {
      location.search = currentConditionURL.combine(oblConditionURL).toString();
    } else {
      this.showListBody();
    }
  }

  /** Create a shouldrerun event which will be dispatched when push, replace and pop history */
  private createShouldRerunEvent(): void {
    const shouldrerun = new Event('shouldrerun', {
      bubbles: true,
    });

    const { history } = window;

    history.pushState = ((f) => {
      return function pushState(...args: any[]) {
        const ret = f.apply(this, ...args);
        dispatchEvent(shouldrerun);
        Logger.printMessage('pushState: ', window.location.href);
        return ret;
      };
      // eslint-disable-next-line @typescript-eslint/unbound-method
    })(history.pushState);

    history.replaceState = ((f) => {
      return function replaceState(...args) {
        const ret = f.apply(this, ...args);
        dispatchEvent(shouldrerun);
        Logger.printMessage('replaceState: ', window.location.href);
        return ret;
      };
      // eslint-disable-next-line @typescript-eslint/unbound-method
    })(history.replaceState);

    window.addEventListener('popstate', () => {
      dispatchEvent(shouldrerun);
      Logger.printMessage('popState', window.location.href);
    });
  }

  @override
  protected handleError(e: Error): void {
    // To Be Done
    alert(e);
  }

  @override
  protected denyAccess(): void {
    // To Be Done
    alert('deny access');
  }

  @override
  protected showListBody(): void {
    const messageClassName = PROMPT_MESSAGE_CLASS_NAME.message;
    const messageElement: HTMLElement = document.getElementsByClassName(
      messageClassName
    )[0] as HTMLElement;
    messageElement.style.display = 'none';

    const listBodyElement: HTMLElement = document.getElementsByClassName(
      'ms-List'
    )[0] as HTMLElement;
    listBodyElement.style.display = '';

    Logger.printMessage('showBody');
  }
}

export default PolicyControl;
