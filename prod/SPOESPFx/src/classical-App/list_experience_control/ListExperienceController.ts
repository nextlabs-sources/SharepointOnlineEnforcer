import DOMController from './DOMController';
import { ListExperienceRadioInputValue } from '../../common/enumerations';

export default class ListExperienceController {
  /** Prevent changing list experience in the list advanced settings page. */
  public static preventChanging(): void {
    window.addEventListener('click', (e) => {
      const { target } = e;

      if (target instanceof HTMLInputElement) {
        if (
          target.value === ListExperienceRadioInputValue.New ||
          target.value === ListExperienceRadioInputValue.Default
        ) {
          const listExperienceTableBody: HTMLTableSectionElement = target.closest('tbody');

          e.preventDefault();
          DOMController.showListExpChangeWarning(listExperienceTableBody);
        } else if (target.value === ListExperienceRadioInputValue.Classic) {
          DOMController.hideListExpChangeWarning();
        }
      }
    });
  }

  /** Prevent going to modern by click the "Exit classic experience" link. */
  public static preventGoingToModern(): void {
    if (window.GoToModern) {
      window.GoToModern = (): void => {};
      DOMController.removeExistClassicExpLink();
    }
  }
}
