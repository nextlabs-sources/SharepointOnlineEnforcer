import DOMController from '../DOMController';
import { getListExpChangeWarningDOMString } from '../../common';
import { PROMPT_MESSAGE_ID, PROMPT_MESSAGE_CLASS_NAME } from '../../../common/constants';

describe('showListExpChangeWarning()', () => {
  test('when there is a warning element', () => {
    const id: string = PROMPT_MESSAGE_ID.expChangeWarning;

    document.body.innerHTML = `<table><tbody></tbody></table>`;
    const listExperienceTableBody: HTMLTableSectionElement = document.querySelector('tbody');
    listExperienceTableBody.innerHTML = getListExpChangeWarningDOMString();
    const warnElement: HTMLElement = document.getElementById(id);
    warnElement.classList.add(PROMPT_MESSAGE_CLASS_NAME.hide);

    DOMController.showListExpChangeWarning(listExperienceTableBody);
    expect(warnElement.classList.contains(PROMPT_MESSAGE_CLASS_NAME.hide)).toEqual(false);
  });

  test('when there is no warning element', () => {
    const id: string = PROMPT_MESSAGE_ID.expChangeWarning;

    document.body.innerHTML = `<table><tbody></tbody></table>`;
    const listExperienceTableBody = document.querySelector('tbody');

    DOMController.showListExpChangeWarning(listExperienceTableBody);

    const warnElement: HTMLElement = document.getElementById(id);
    expect(warnElement).not.toBeNull();
    expect(warnElement.classList.contains(PROMPT_MESSAGE_CLASS_NAME.hide)).toEqual(false);
  });
});

describe('hideListExpChangeWarning()', () => {
  test('when there is a warning element', () => {
    const id: string = PROMPT_MESSAGE_ID.expChangeWarning;
    document.body.innerHTML = `<table><tbody></tbody></table>`;
    const listExperienceTableBody = document.querySelector('tbody');
    listExperienceTableBody.innerHTML = getListExpChangeWarningDOMString();

    DOMController.hideListExpChangeWarning();

    const warnElement: HTMLElement = document.getElementById(id);
    expect(warnElement.classList.contains(PROMPT_MESSAGE_CLASS_NAME.hide)).toBe(true);
  });

  test('when there is no warning element', () => {
    const id: string = PROMPT_MESSAGE_ID.expChangeWarning;
    document.body.innerHTML = `<table><tbody></tbody></table>`;

    DOMController.hideListExpChangeWarning();

    const warnElement: HTMLElement = document.getElementById(id);
    expect(warnElement).toBe(null);
  });
});

describe('removeExistClassicExpLink()', () => {
  test('remove the exit classic experience link when it appear', () => {
    document.body.innerHTML = `
      <div id="existClassicExp">
        <a onclick="GoToModern(true)" href="#">Exit classic experience</a>
      </div>
    `;

    DOMController.removeExistClassicExpLink();

    expect(document.querySelector('#existClassicExp')).toBe(null);
  });

  test('do nothing when there is no the exit classic experience link', () => {
    document.body.innerHTML = `
      <div id="existClassicExp">
        <a href="#">Test</a>
      </div>
    `;

    DOMController.removeExistClassicExpLink();

    expect(document.querySelector('#existClassicExp')).not.toBe(null);
  });
});
