import {
  getListExpChangeWarningDOMString,
  getSrchCheckingPoliciesPromptDOMString,
  getHideListItemDOMString,
} from '../html_templates';
import PROMPT_MESSAGES from '../../../common/prompt-messages';
import { PROMPT_MESSAGE_ID, PROMPT_MESSAGE_CLASS_NAME } from '../../../common/constants';
import { ContextInfo } from '../../../common/interfaces';
import { ListTemplateType } from '../../../common/enumerations';

// TODO: Do not clear all space.
function clearSpace(str: string): string {
  return str.replace(/\s/g, '');
}

describe(`${getListExpChangeWarningDOMString.name}()`, () => {
  test('returns DOM string of warning when change list experience', () => {
    const domString = getListExpChangeWarningDOMString();
    const expectedResult = `
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

    expect(clearSpace(domString)).toBe(clearSpace(expectedResult));
  });
});

describe(`${getHideListItemDOMString.name}()`, () => {
  test('returns DOM string in which list items are hided and prompt is showed', () => {
    const listCTX: ContextInfo = {
      wpq: 'WPQ1',
      listName: '{AAFD9D3E-0429-49A1-9037-D6AFC9A95776}',
      listUrlDir: '/sites/louis-add-ins/Test%20trim%20library',
      listTemplate: ListTemplateType.DocumentLibrary,
      ListData: {
        Row: [],
      },
      HttpRoot: 'https://nextlabstest.sharepoint.com/sites/louis-add-ins',
    };

    const expectedResult = `
      <tr class="${PROMPT_MESSAGE_CLASS_NAME.message}">
        <td colspan="10">
          ${PROMPT_MESSAGES.waiting}
        </td>
      </tr>
      <tr class="${PROMPT_MESSAGE_CLASS_NAME.row} ${PROMPT_MESSAGE_CLASS_NAME.hide}">
      </tr>
    `;

    window.RenderBodyTemplate = jest.fn().mockReturnValue('<tr></tr>');

    const hideListItemDOMString = getHideListItemDOMString(listCTX);
    expect(window.RenderBodyTemplate).toBeCalled();
    expect(clearSpace(hideListItemDOMString)).toEqual(clearSpace(expectedResult));
  });
});

describe(`${getSrchCheckingPoliciesPromptDOMString.name}()`, () => {
  test('returns checking policies prompt DOM string', () => {
    expect(getSrchCheckingPoliciesPromptDOMString()).toBe(
      `<p id="nxlPrompt" class="${PROMPT_MESSAGE_CLASS_NAME.message}">${PROMPT_MESSAGES.waiting}</p>`
    );
  });
});
