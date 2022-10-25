import { getSrchCheckingPoliciesPromptDOMString } from '../common';
import { getElementByString, isDOMLoaded } from '../../util';

export default class DOMController {
  public static showPromptElement(): void {
    if (!isDOMLoaded()) {
      window.addEventListener('load', () => {
        DOMController.insertPromptElement();
      });
    } else {
      DOMController.insertPromptElement();
    }
  }

  public static insertPromptElement(): void {
    const searchResultGroupsElement: HTMLElement = document.getElementById('Groups');
    const promptElement: DocumentFragment = getElementByString(
      getSrchCheckingPoliciesPromptDOMString()
    );

    searchResultGroupsElement.parentElement.insertBefore(promptElement, searchResultGroupsElement);
  }
}
