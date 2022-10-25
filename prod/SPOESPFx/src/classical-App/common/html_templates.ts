import './style.css';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import { PROMPT_MESSAGE_CLASS_NAME, PROMPT_MESSAGE_ID } from '../../common/constants';
import { ContextInfo } from '../../common/interfaces';

/** Get the DOM string about list experience change warning. */
export function getListExpChangeWarningDOMString(): string {
  return `
    <tr>
      <td
        id="${PROMPT_MESSAGE_ID.expChangeWarning}"
        class="${PROMPT_MESSAGE_CLASS_NAME.error}"
        colspan="10"
      >
        ${PROMPT_MESSAGES.listExpChangeWarning}
      </td>
    </tr>
  `;
}

/**
 * Get string html segment about checking access policies prompt.
 * @returns The string html segment prompt checking access policies.
 */
function getListCheckingPoliciesPromptHTML(): string {
  return `<tr class="${PROMPT_MESSAGE_CLASS_NAME.message}"><td colspan="10">${PROMPT_MESSAGES.waiting}</td></tr>`;
}

/** Get the string html prefix segment of hided list item. */
function getHidedRowPreHTMLSegment(): string {
  return `<tr class="${PROMPT_MESSAGE_CLASS_NAME.row} nxl-hide"`;
}

/**
 * Get the DOM string in which list items are hided and prompt is showed.
 * @param listCTX The list context info.
 * @description Add a hide class for every list item row, and insert the prompt before all of it.
 */
export function getHideListItemDOMString(listCTX: ContextInfo): string {
  const oldBody: string = window.RenderBodyTemplate(listCTX);
  const prompt: string = getListCheckingPoliciesPromptHTML();

  const hidedRowPrefix: string = getHidedRowPreHTMLSegment();
  const hidedBodyTemplate: string = oldBody
    .replace(/<tr/g, hidedRowPrefix)
    .replace('<tr', `${prompt}<tr`);

  return hidedBodyTemplate;
}

export function getSrchCheckingPoliciesPromptDOMString(): string {
  return `<p id="nxlPrompt" class="${PROMPT_MESSAGE_CLASS_NAME.message}">${PROMPT_MESSAGES.waiting}</p>`;
}

/**
 * Get the DOMString represent prompt element.
 * @param id The ID of the element to locate.
 * @param message A DOMString representing the rendered prompt message.
 * @returns The DOMString represent prompt element.
 */
export function getListPromptDOMString(id: string, message = ''): string {
  return `<p id="${id}" class="${PROMPT_MESSAGE_CLASS_NAME.message}"">${message}</p>`;
}

/**
 * Get the DOMString represent all items trimed prompt element.
 * @param id The ID of the element to locate.
 * @param message A DOMString representing the rendered prompt message.
 * @returns The DOMString represent all items trimed prompt element.
 */
export function getAllItemsTrimedPromptDOMString(id: string, message = ''): string {
  return `
    <tr id="${id}" class="${PROMPT_MESSAGE_CLASS_NAME.message}"">
      <td colspan="20">
        ${message}
      </td>
    </tr>`;
}
