import { getElementByString } from '../../util';
import { getListPromptDOMString, getAllItemsTrimedPromptDOMString, ListItem } from '../common';
import { PROMPT_MESSAGE_CLASS_NAME } from '../../common/constants';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import { ContextInfo, RawListItemData } from '../../common/interfaces';

export default class DOMController {
  /**
   * Show list items in the web part.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   * @description Show list items by remove the hide class.
   */
  public static showListItems(wpq: string): void {
    const webpartElement: HTMLElement = document.getElementById(`script${wpq}`);
    const promptElements: HTMLCollectionOf<Element> = webpartElement.getElementsByClassName(
      PROMPT_MESSAGE_CLASS_NAME.message
    );
    const listItemElements: HTMLCollectionOf<Element> = webpartElement.getElementsByClassName(
      PROMPT_MESSAGE_CLASS_NAME.row
    );

    Array.from(promptElements).forEach((promptElement) => {
      promptElement.classList.add(PROMPT_MESSAGE_CLASS_NAME.hide);
    });

    Array.from(listItemElements).forEach((listItemElement) => {
      listItemElement.classList.remove(PROMPT_MESSAGE_CLASS_NAME.hide);
    });
  }

  /**
   * Clear all list items' DOM in the web part.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   */
  public static clearListItemsDOM(wpq: string): void {
    const webpartElement: HTMLElement = document.getElementById(`script${wpq}`);
    const listItemElements = webpartElement.getElementsByClassName(PROMPT_MESSAGE_CLASS_NAME.row);

    Array.from(listItemElements).forEach((listItem) => {
      listItem.remove();
    });
  }

  /**
   * Change the prompt in the web part.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   * @param newPrompt The new message.
   */
  public static changePrompt(wpq: string, newPrompt: string): void {
    const promptElementID: string = DOMController.getPromptElementID(wpq);
    const promptElement: Element = document.getElementById(promptElementID);

    if (promptElement) {
      promptElement.innerHTML = newPrompt;
    }
  }

  /**
   * Insert an empty prompt element in the web part if there is no one.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   */
  public static insertPromptElement(wpq: string): void {
    const webPartElementID: string = DOMController.getWebPartElementID(wpq);
    const webPartElement: HTMLElement = document.getElementById(webPartElementID);

    const promptElementID: string = DOMController.getPromptElementID(wpq);
    let promptElement: HTMLElement | DocumentFragment = document.getElementById(promptElementID);

    if (!promptElement) {
      promptElement = getElementByString(getListPromptDOMString(promptElementID));
      webPartElement.insertBefore(promptElement, webPartElement.firstElementChild);
    }
  }

  /**
   * Show the prompt.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   * @param message The message which should represent in the prompt element.
   */
  public static showPromptElement(wpq: string, message: string): void {
    const promptElementID: string = DOMController.getPromptElementID(wpq);
    const promptElement: HTMLElement = document.getElementById(promptElementID);

    if (promptElement) {
      promptElement.innerHTML = message;
      promptElement.style.display = '';
    } else {
      DOMController.insertPromptElement(wpq);
      DOMController.changePrompt(wpq, message);
    }
  }

  /**
   * Hide the prompt.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   */
  public static hidePromptElement(wpq: string): void {
    const promptElementID = DOMController.getPromptElementID(wpq);
    const promptElement = document.getElementById(promptElementID);

    if (promptElement) {
      promptElement.style.display = 'none';
    }
  }

  /**
   * Insert a prompt element after the list item element.
   * @param listItemID The element ID of list item which will be inserted after.
   * @param domString The DOMString represent the element.
   */
  public static insertListItemPromptElementAfter(listItemID: string, domString: string): void {
    const listItemElement = document.getElementById(listItemID);
    const promptElementID = `${listItemID}.prompt`;
    const promptElement = document.getElementById(promptElementID);

    if (listItemElement && !promptElement) {
      const newPromptElement = getElementByString(domString);

      listItemElement.parentElement.appendChild(newPromptElement);
    }
  }

  public static hideElementByID(elementID: string): void {
    const element = document.getElementById(elementID);

    if (element) {
      element.style.display = 'none';
    }
  }

  public static hidePlaceholderElement(ctx: ContextInfo): void {
    const { placeholderListItemIndex, getPlaceholderListItem } = ListItem;

    for (let i = 0; i <= placeholderListItemIndex; i += 1) {
      const placeholderListItem: RawListItemData = getPlaceholderListItem(i);
      const placeholderListItemID = window.GenerateIIDForListItem(ctx, placeholderListItem);

      DOMController.hideElementByID(placeholderListItemID);
    }
  }

  public static insertAllListItemsTrimedPromptElement(ctx: ContextInfo): void {
    const { placeholderListItemIndex, getPlaceholderListItem } = ListItem;

    for (let i = 0; i <= placeholderListItemIndex; i += 1) {
      const placeholderListItem: RawListItemData = getPlaceholderListItem(i);
      const placeholderListItemID = window.GenerateIIDForListItem(ctx, placeholderListItem);
      const promptElementID = `${placeholderListItemID}.prompt`;

      const allItemsTrimedPromptDOMString: string = getAllItemsTrimedPromptDOMString(
        promptElementID,
        PROMPT_MESSAGES.allListItemsTrimed
      );

      DOMController.insertListItemPromptElementAfter(
        placeholderListItemID,
        allItemsTrimedPromptDOMString
      );
    }
  }

  /**
   * Get the web part element's ID.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   * @returns Returns the ID of the web part.
   */
  private static getWebPartElementID(wpq: string): string {
    return `script${wpq}`;
  }

  /**
   * Get the prompt element's ID in a web part.
   * @param wpq The web part qualifier which is a unique Web Part name within a Web Part Page.
   * @returns Returns the ID of prompt element.
   */
  private static getPromptElementID(wpq: string): string {
    return `nxlPrompt${wpq}`;
  }
}
