import { getElementByString } from '../../util';
import { getListExpChangeWarningDOMString } from '../common';
import { PROMPT_MESSAGE_ID, PROMPT_MESSAGE_CLASS_NAME } from '../../common/constants';

export default class DOMController {
  /**
   * Show list experience change warning.
   * @param listExpOptionsTableBody The HTML element of list experience options.
   */
  public static showListExpChangeWarning(listExpOptionsTableBody: HTMLTableSectionElement): void {
    const id: string = PROMPT_MESSAGE_ID.expChangeWarning;
    const warnElement: HTMLElement = document.getElementById(id);

    if (warnElement) {
      warnElement.classList.remove(PROMPT_MESSAGE_CLASS_NAME.hide);
    } else {
      const listExpChangeWarningElement: DocumentFragment = getElementByString(
        getListExpChangeWarningDOMString()
      );

      listExpOptionsTableBody.append(listExpChangeWarningElement);
    }
  }

  /** Hide list experience change warning. */
  public static hideListExpChangeWarning(): void {
    const id: string = PROMPT_MESSAGE_ID.expChangeWarning;
    const warnElement: HTMLElement = document.getElementById(id);

    if (warnElement) {
      warnElement.classList.add(PROMPT_MESSAGE_CLASS_NAME.hide);
    }
  }

  /** Remove exist classic experience link if it has. */
  public static removeExistClassicExpLink(): void {
    const anchorElementCollection = document.querySelectorAll('a');

    Array.from(anchorElementCollection).forEach((anchorElement) => {
      if (anchorElement.getAttribute('onclick') === 'GoToModern(true)') {
        anchorElement.parentElement.remove();
      }
    });
  }
}
