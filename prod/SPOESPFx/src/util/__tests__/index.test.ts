/* eslint-disable no-new-wrappers */
import {
  intersect,
  arrIncludes,
  trimString,
  isModernPage,
  getPageContextInfo,
  isBoolean,
  getElementByString,
  isDOMLoaded,
  convertCurrencyIntoNumber,
  isUndefined,
  isString,
  isNumber,
  isDate,
  isArray,
  isPlainObject,
  isEmptyString,
} from '../index';

// TODO: Test debounce

describe(`${intersect.name}()`, () => {
  test('returns intersect array of two string array', () => {
    const arr1: string[] = ['eee', 'aaa', 'bbb', 'ccc'];
    const arr2: string[] = ['bbb', 'ccc', 'ddd', 'eee'];
    const intersectResult: string[] = ['eee', 'bbb', 'ccc'];

    expect(intersect(arr1, arr2)).toEqual(intersectResult);
  });
});

describe(`${arrIncludes.name}()`, () => {
  test('returns true when it contains subarray', () => {
    const baseArr: string[] = ['aaa', 'bbb', 'ccc'];
    const includedArr: string[] = ['aaa', 'bbb'];

    expect(arrIncludes(baseArr, includedArr)).toEqual(true);
  });

  test('returns true when it contains empty subarray', () => {
    const baseArr: string[] = ['aaa', 'bbb', 'ccc'];
    const includedArr: string[] = [];

    expect(arrIncludes(baseArr, includedArr)).toEqual(true);
  });

  test('returns false when it not contains subarray', () => {
    const baseArr: string[] = ['aaa', 'bbb', 'ccc'];
    const includedArr: string[] = ['aaa', 'bb'];

    expect(arrIncludes(baseArr, includedArr)).toEqual(false);
  });
});

describe(`${trimString.name}()`, () => {
  test('removes "{" from the beginning of a string and remove "}" from the end', () => {
    const str = '{23{24214}23}';
    const trimedStr = '23{24214}23';
    expect(trimString(str, '{', '}')).toEqual(trimedStr);
  });
});

describe(`${isModernPage.name}()`, () => {
  test('returns true when in modern page', () => {
    expect(isModernPage()).toEqual(true);
  });

  test('returns false when not in modern page', () => {
    window.SPClientTemplates = {};
    expect(isModernPage()).toEqual(false);
    window.SPClientTemplates = undefined;
  });
});

describe(`${getPageContextInfo.name}()`, () => {
  test('returns current page context info', () => {
    window._spPageContextInfo = {} as any;
    expect(getPageContextInfo()).toEqual(window._spPageContextInfo);
    window._spPageContextInfo = undefined;
  });
});

// TODO: Test getElementByString
// describe(`${getElementByString.name}()`, () => {
//   test('returns element', () => {
//     const domString = '<h1>Hello</h1>';
//     const element = document.createElement('h1');
//     element.innerText = 'hello';

//     expect(getElementByString(domString)).toEqual(element);
//   });
// });

describe(`${isDOMLoaded.name}()`, () => {
  test('returns true when the DOM is loaded', () => {
    expect(isDOMLoaded()).toEqual(true);
  });
});

describe(`${convertCurrencyIntoNumber.name}()`, () => {
  test('converts "$1,000.03" into 1000.03', () => {
    expect(convertCurrencyIntoNumber('$1,000.03')).toEqual(1000.03);
  });
});

describe(`${isUndefined.name}()`, () => {
  test('returns true when check a undefined', () => {
    expect(isUndefined(undefined)).toEqual(true);
  });

  test('returns false when check a number', () => {
    expect(isUndefined(0)).toEqual(false);
  });

  test('returns false when check a null', () => {
    expect(isUndefined(null)).toEqual(false);
  });

  test('returns false when check a false', () => {
    expect(isUndefined(false)).toEqual(false);
  });
});

describe(`${isBoolean.name}()`, () => {
  test('returns true when check a boolean primitive', () => {
    expect(isBoolean(true)).toEqual(true);
    expect(isBoolean(false)).toEqual(true);
  });

  test('returns true when check a boolean object', () => {
    expect(isBoolean(new Boolean(false))).toEqual(true);
    expect(isBoolean(false)).toEqual(true);
  });

  test('returns false when check a string primitive or object', () => {
    expect(isBoolean('false')).toEqual(false);
    expect(isBoolean(new String('false'))).toEqual(false);
  });
});

describe(`${isString.name}()`, () => {
  test('returns true when check a string primitive or object', () => {
    expect(isString('false')).toEqual(true);
    expect(isString(new String('false'))).toEqual(true);
  });

  test('returns false when check a boolean primitive or object', () => {
    expect(isString(false)).toEqual(false);
    expect(isString(new Boolean(false))).toEqual(false);
  });
});

describe(`${isNumber.name}()`, () => {
  test('returns true when check a number primitive or object', () => {
    expect(isNumber(0)).toEqual(true);
    expect(isNumber(new Number(0))).toEqual(true);
  });

  test('returns false when check a boolean primitive or object', () => {
    expect(isNumber(false)).toEqual(false);
    expect(isNumber(new Boolean(false))).toEqual(false);
  });
});

describe(`${isDate.name}()`, () => {
  test('returns true when check a date', () => {
    expect(isDate(new Date())).toEqual(true);
  });

  test('returns false when check a string ', () => {
    expect(isDate('Sun Jun 21 2020 23:27:35 GMT+0800 (China Standard Time)')).toEqual(false);
  });

  test('returns false when check a number', () => {
    expect(isDate(1592753250750)).toEqual(false);
  });
});

describe(`${isArray.name}()`, () => {
  test('returns true when check a array', () => {
    expect(isArray([])).toEqual(true);
  });

  test('returns false when check a string ', () => {
    expect(isArray('Sun Jun 21 2020 23:27:35 GMT+0800 (China Standard Time)')).toEqual(false);
  });
});

describe(`${isPlainObject.name}()`, () => {
  test('returns true when check a plain object', () => {
    expect(isPlainObject({})).toEqual(true);
  });

  test('returns false when check a array ', () => {
    expect(isPlainObject([])).toEqual(false);
  });
});

describe(`${isEmptyString.name}()`, () => {
  test('returns true when check an empty string', () => {
    expect(isEmptyString('')).toEqual(true);
  });

  test('returns false when check an not empty string', () => {
    expect(isEmptyString('test')).toEqual(false);
  });

  test('returns false when check undefined', () => {
    expect(isEmptyString(undefined)).toEqual(false);
  });
});
