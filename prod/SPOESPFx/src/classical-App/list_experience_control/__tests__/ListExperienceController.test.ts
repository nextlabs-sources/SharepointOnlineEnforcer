import DOMController from '../DOMController';
import ListExperienceController from '../ListExperienceController';

jest.mock('../DOMController');

describe('preventChange()', () => {
  beforeAll(() => {
    Event.prototype.preventDefault = jest.fn();
    ListExperienceController.preventChanging();

    document.body.innerHTML = `
      <p id="another">Another Element</p>
      <table><tbody><tr><td>
        <input id="RadDisplayOnAutoExperience" type="radio" value="RadDisplayOnAutoExperience" />
        <input id="RadDisplayOnNewExperience" type="radio" value="RadDisplayOnNewExperience" />
        <input id="RadDisplayOnClassicExperience" type="radio" value="RadDisplayOnClassicExperience" />
        <input id="NotValidOption" type="radio" value="NotValidOption" />
      </td></tr></tbody></table>
   `;
  });

  test(`doing nothing when not click list experience options`, () => {
    const { preventDefault } = Event.prototype;
    const { showListExpChangeWarning, hideListExpChangeWarning } = DOMController;
    const anotherElement: HTMLElement = document.querySelector('#another');
    anotherElement.click();

    expect(preventDefault).not.toBeCalled();
    expect(showListExpChangeWarning).not.toBeCalled();
    expect(hideListExpChangeWarning).not.toBeCalled();
  });

  test(`doing nothing when not click the valid list experience options`, () => {
    const { preventDefault } = Event.prototype;
    const { showListExpChangeWarning, hideListExpChangeWarning } = DOMController;
    const notValidOptionElement: HTMLElement = document.querySelector('#NotValidOption');
    notValidOptionElement.click();

    expect(preventDefault).not.toBeCalled();
    expect(showListExpChangeWarning).not.toBeCalled();
    expect(hideListExpChangeWarning).not.toBeCalled();
  });

  test('prevent change and show warning when click default list experience', () => {
    const { preventDefault } = Event.prototype;
    const { showListExpChangeWarning } = DOMController;
    const listExperienceTableBody: HTMLElement = document.querySelector('tbody');
    const defaultExperienceElement: HTMLElement = document.querySelector(
      '#RadDisplayOnAutoExperience'
    );
    defaultExperienceElement.click();

    expect(preventDefault).toBeCalled();
    expect(showListExpChangeWarning).toHaveBeenCalledWith(listExperienceTableBody);
  });

  test('prevent change and show warning when click new list experience', () => {
    const { preventDefault } = Event.prototype;
    const { showListExpChangeWarning } = DOMController;
    const listExperienceTableBody: HTMLElement = document.querySelector('tbody');
    const newExperienceElement: HTMLElement = document.querySelector('#RadDisplayOnNewExperience');
    newExperienceElement.click();

    expect(preventDefault).toBeCalled();
    expect(showListExpChangeWarning).toHaveBeenCalledWith(listExperienceTableBody);
  });

  test('hide warning when click classic list experience', () => {
    const { hideListExpChangeWarning } = DOMController;
    const classicExperienceElement: HTMLElement = document.querySelector(
      '#RadDisplayOnClassicExperience'
    );
    classicExperienceElement.click();

    expect(hideListExpChangeWarning).toBeCalled();
  });
});

describe('preventGoToModern()', () => {
  test('doing nothing when there is no window.GoToModern', () => {
    const { removeExistClassicExpLink } = DOMController;
    window.GoToModern = undefined;

    ListExperienceController.preventGoingToModern();

    expect(window.GoToModern).toBe(undefined);
    expect(removeExistClassicExpLink).not.toBeCalled();
  });

  test('when there is windo.GoToModern, reassign it to a empty function and remove exist classic experience link.', () => {
    const { removeExistClassicExpLink } = DOMController;
    window.GoToModern = (): void => {};

    ListExperienceController.preventGoingToModern();
    expect(window.GoToModern.length).toBe(0);
    // TODO Test the window.GoToModern is whether or not a empty function.
    expect(removeExistClassicExpLink).toBeCalled();
  });
});
