import { UAParser } from 'ua-parser-js';
import { SUPPORTED } from '../../common/constants';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import getNotSupportPromptHTML from './html_templates';

/**
 * Use the user agent to detect the browser is whether or not in supported browser list.
 * @return If the browser is supported return `true` else return `false`.
 */
function isSupportedBrowser(): boolean {
  const supportedOS: string[] = SUPPORTED.os;
  const supportedBrowser: Map<string, number> = SUPPORTED.browser;
  const userAgent = window && window.navigator && window.navigator.userAgent;
  const parser = new UAParser(userAgent);
  const { name: browserName, major: browserMajorVersion } = parser.getBrowser();
  const { name: osName } = parser.getOS();

  if (
    supportedOS.includes(osName) &&
    supportedBrowser.has(browserName) &&
    Number(browserMajorVersion) >= Number(supportedBrowser.get(browserName))
  ) {
    return true;
  }

  return false;
}

/** Hide the entire HTML document by set the display of root node into "none". */
function hideHTMLDocument(): void {
  document.documentElement.style.display = 'none';
}

/** Show the HTML document by set the display of root node into empty. */
function showHTMLDocument(): void {
  document.documentElement.style.display = '';
}

/** Prompt the browser is not supported by replacing the body html with prompt html. */
function promptBrowserIsNotSupported(): void {
  const promptMessage: string = PROMPT_MESSAGES.isNotSupportedBrowser;
  document.body.innerHTML = getNotSupportPromptHTML(promptMessage);
  showHTMLDocument();
}

/**
 * Append an event listener for window's load event.
 * @param listener The event listener callback.
 * @description To compat with IE versions before IE9, using `window.attachEvent`
 * if there is no `window.addEventListener`.
 */
function addLoadEventListenerForWindow(listener: EventListener): void {
  if (window.addEventListener) {
    window.addEventListener('load', listener);
  } else if (window.attachEvent) {
    window.attachEvent('onload', listener);
  }
}

/**
 * Apply browser version control.
 * @description If the browser is not supported, we will hide the html first,
 * and replace the html with prompt message after the page loaded.
 */
export default function applyBrowserVersionControl(): void {
  if (!isSupportedBrowser()) {
    window.isSupportedBrowser = false;
    hideHTMLDocument();
    addLoadEventListenerForWindow(promptBrowserIsNotSupported);
  } else {
    window.isSupportedBrowser = true;
  }
}
