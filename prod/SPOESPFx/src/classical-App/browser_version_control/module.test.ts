import rewire from 'rewire';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import getNotSupportPromptHTML from './html_templates';

// #region Rewire function
const browserVersionControl = rewire('./module');

const isSupportedBrowser = browserVersionControl.__get__('isSupportedBrowser');
const hideHTMLDocument = browserVersionControl.__get__('hideHTMLDocument');
const showHTMLDocument = browserVersionControl.__get__('showHTMLDocument');
const promptBrowserIsNotSupported = browserVersionControl.__get__('promptBrowserIsNotSupported');
const addLoadEventListenerForWindow = browserVersionControl.__get__(
  'addLoadEventListenerForWindow'
);
const applyBrowserVersionControl = browserVersionControl.__get__('applyBrowserVersionControl');
// #endregion

describe('isSupportedBrowser()', () => {
  test('return true in supported browser', () => {
    const userAgent =
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36';

    browserVersionControl.__with__({
      window: {
        navigator: {
          userAgent,
        },
      },
    })(() => {
      expect(isSupportedBrowser()).toEqual(true);
    });
  });

  describe('return false', () => {
    test('in iOS which is not supported system', () => {
      const userAgent =
        'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1';

      browserVersionControl.__with__({
        window: {
          navigator: {
            userAgent,
          },
        },
      })(() => {
        expect(isSupportedBrowser()).toEqual(false);
      });
    });

    test('in IE which is not supported browser', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko';

      browserVersionControl.__with__({
        window: {
          navigator: {
            userAgent,
          },
        },
      })(() => {
        expect(isSupportedBrowser()).toEqual(false);
      });
    });

    test('in Edge 18 which is old version', () => {
      const userAgent =
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/18.17763';

      browserVersionControl.__with__({
        window: {
          navigator: {
            userAgent,
          },
        },
      })(() => {
        expect(isSupportedBrowser()).toEqual(false);
      });
    });
  });
});

describe('hideHTMLDocument()', () => {
  test('hide HTML document', () => {
    browserVersionControl.__with__({
      document,
    })(() => {
      hideHTMLDocument();
      expect(document.documentElement.style.display).toEqual('none');
    });
  });
});

describe('showHTMLDocument()', () => {
  test('show HTML document', () => {
    browserVersionControl.__with__({
      document,
    })(() => {
      showHTMLDocument();
      expect(document.documentElement.style.display).toEqual('');
    });
  });
});

describe('promptBrowserIsNotSupported()', () => {
  test('prompt when browser is not supported', () => {
    browserVersionControl.__with__({
      document,
    })(() => {
      promptBrowserIsNotSupported();

      const promptMessage: string = PROMPT_MESSAGES.isNotSupportedBrowser;
      expect(document.body.innerHTML).toEqual(getNotSupportPromptHTML(promptMessage));
      expect(document.documentElement.style.display).toEqual('');
    });
  });
});

describe('addLoadEventListenerForWindow()', () => {
  test('add load event listener for window in IE>8', () => {
    browserVersionControl.__with__({
      window,
    })(() => {
      const listener = jest.fn();
      const spyAddEventListener = jest.spyOn(window, 'addEventListener');
      addLoadEventListenerForWindow(listener);

      expect(spyAddEventListener).toHaveBeenCalledTimes(1);
      expect(spyAddEventListener.mock.calls[0][0]).toEqual('load');
      expect(spyAddEventListener.mock.calls[0][1]).toEqual(listener);
    });
  });

  test('add load event listener for window in IE<=8', () => {
    const attachEvent = jest.fn();

    browserVersionControl.__with__({
      window: {
        attachEvent,
        addEventListener: undefined,
      },
    })(() => {
      const listener = jest.fn();
      addLoadEventListenerForWindow(listener);

      expect(attachEvent).toHaveBeenCalledTimes(1);
      expect(attachEvent.mock.calls[0][0]).toEqual('onload');
      expect(attachEvent.mock.calls[0][1]).toEqual(listener);
    });
  });
});

describe('applyBrowserVersionControl()', () => {
  test('hide html and than show prompt message after the page loaded when the browser is not supported', () => {
    const mockedIsSupportedBrowser = jest.fn();
    const mockedHideHTMLDocument = jest.fn();
    const mockedAddLoadEventListener = jest.fn();

    browserVersionControl.__with__({
      window,
      isSupportedBrowser: mockedIsSupportedBrowser,
      hideHTMLDocument: mockedHideHTMLDocument,
      addLoadEventListenerForWindow: mockedAddLoadEventListener,
    })(() => {
      applyBrowserVersionControl();
      expect(window.isSupportedBrowser).toEqual(false);
      expect(mockedIsSupportedBrowser).toHaveBeenCalledTimes(1);
      expect(mockedHideHTMLDocument).toHaveBeenCalledTimes(1);
      expect(mockedAddLoadEventListener).toHaveBeenCalledWith(promptBrowserIsNotSupported);
    });
  });

  test('set window.isSupportedBrowser to be true when the browser is supported', () => {
    const mockedIsSupportedBrowser = jest.fn(() => true);
    browserVersionControl.__with__({
      window,
      isSupportedBrowser: mockedIsSupportedBrowser,
    })(() => {
      applyBrowserVersionControl();
      expect(mockedIsSupportedBrowser).toHaveBeenCalledTimes(1);
      expect(window.isSupportedBrowser).toEqual(true);
    });
  });
});
