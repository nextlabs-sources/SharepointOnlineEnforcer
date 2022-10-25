import { PROMPT_MESSAGE_CLASS_NAME } from '../../common/constants';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import Logger from '../../common/Logger';

function hideListBody(): void {
  // Hide list body
  const listBodyElement: HTMLElement = document.getElementsByClassName('ms-List')[0] as HTMLElement;
  listBodyElement.style.display = 'none';
  Logger.printMessage('hide body');

  // Show prompt message
  const className = PROMPT_MESSAGE_CLASS_NAME.message;
  let messageElement = document.getElementsByClassName(className)[0] as HTMLElement;

  if (!messageElement) {
    messageElement = document.createElement('div');
    messageElement.className = className;
    messageElement.style.fontSize = 'x-large';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.color = 'red';
    messageElement.style.textAlign = 'center';
    messageElement.innerText = PROMPT_MESSAGES.waiting;

    listBodyElement.parentElement.appendChild(messageElement);
  } else if (messageElement.style.display === 'none') {
    messageElement.innerText = PROMPT_MESSAGES.waiting;
    messageElement.style.display = '';
  }
}

export default hideListBody;
