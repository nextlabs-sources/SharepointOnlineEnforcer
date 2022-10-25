import { SpPageContextInfo } from '../types/custom';
import { SPECIAL_CHARACTER_MAP } from '../common/constants';

/**
 * Creates a debounced function that delays invoking `func` until
 * after `wait` milliseconds have elapsed since the last time the debounced function was invoked.
 * @param func The function to debounce.
 * @param wait The number of milliseconds to delay.
 * @returns Returns the new debounced function.
 */
export function debounce(func: Function, wait: number): (...args: any[]) => void {
  let timer: NodeJS.Timer = null;

  return (...args: any[]): void => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

/**
 * Returns an array of values that are included in all given string arrays.
 * @param arr1 The base array to inspect.
 * @param arr2 The array to intersect.
 * @returns Returns the new array of intersecting values.
 * The order of result values is determined by the first array.
 */
export function intersect(arr1: string[], arr2: string[]): string[] {
  return arr1.filter((v) => arr2.includes(v));
}

/**
 * Checks if an array contains another array.
 * @param baseArr The base array.
 * @param subArr The subarray.
 * @returns Return `true` when `baseArr` contains `subArr`, and return `false` when not contains.
 */
export function arrIncludes(baseArr: string[], subArr: string[]): boolean {
  return subArr.every((value) => baseArr.includes(value));
}

/**
 * Removes the specified character from the ends of a string.
 * @param str The string to be trimed.
 * @param startVal The character to be trimed in the start of the string.
 * @param endVal The character to be trimed in the end of the string.
 * @returns A new string stripped of `startVal` and `endVal` from corresponding end.
 */
export function trimString(str: string, startVal: string, endVal: string): string {
  const startRegExp = new RegExp(`^${startVal}`);
  const endRegExp = new RegExp(`${endVal}$`);
  return str.replace(startRegExp, '').replace(endRegExp, '');
}

/**
 * Checks if current page is modern page.
 * @returns Returns `true` if current page is modern page and returns `false` if not.
 */
export function isModernPage(): boolean {
  return !window.SPClientTemplates;
}

/**
 * Gets current page context info.
 * @returns Returns an object of current page context info.
 */
export function getPageContextInfo(): SpPageContextInfo {
  // eslint-disable-next-line no-underscore-dangle
  return window._spPageContextInfo;
}

/**
 * Gets element by string.
 * @param domString A string containing the HTML serialization of the element's descendants.
 * @returns The element corresponding with `domString`.
 */
export function getElementByString(domString: string): DocumentFragment {
  const template = document.createElement('template');
  template.innerHTML = domString;
  return template.content;
}

/**
 * Checks if the DOM is loaded.
 * @returns Returns `true` if the DOM is loaded and returns `false` if not.
 */
export function isDOMLoaded(): boolean {
  return document.readyState === 'complete';
}

/**
 * Converts the currency into number.
 * @param currency The currency which need to be converted.
 * @returns The number corresponding with `currency`.
 */
export function convertCurrencyIntoNumber(currency: string): number {
  return Number(String(currency).replace(/[^0-9.-]+/g, ''));
}

/**
 * Checks if value is undefined.
 * @param value The value to check.
 * @returns Returns `true` if value is undefined, else `false`.
 */
export function isUndefined(value: any): value is undefined {
  return value === undefined;
}

/**
 * Checks if value is classified as a boolean primitive or object.
 * @param value The value to check.
 * @returns Returns `true` if `value` is classified as a boolean primitive or object.
 */
export function isBoolean(value: any): value is boolean {
  return Object.prototype.toString.call(value) === '[object Boolean]';
}

/**
 * Checks if value is classified as a `String` primitive or object.
 * @param value The value to check.
 * @returns Returns `true` if value is a string, else `false`.
 */
export function isString(value: any): value is string {
  return Object.prototype.toString.call(value) === '[object String]';
}

/**
 * Checks if value is a empty string.
 * @param value The value to check.
 * @returns Returns `true` if value is a empty string, else `false`.
 */
export function isEmptyString(value: any): value is '' {
  return value === '';
}

/**
 * Checks if value is classified as a `Number` primitive or object.
 * @param value The value to check.
 * @returns Returns `true` if value is a number, else `false`.
 */
export function isNumber(value: any): value is number {
  return Object.prototype.toString.call(value) === '[object Number]';
}

/**
 * Checks if value is classified as a `Date` object.
 * @param value The value to check.
 * @returns Returns `true` if value is a date object, else `false`.
 */
export function isDate(value: any): value is Date {
  return Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * Checks if value is classified as a `Array` object.
 * @param value The value to check.
 * @returns Returns `true` if value is a array, else `false`.
 */
export function isArray(value: any): value is Array<any> {
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
 * Checks if value is a plain object, that is,
 * an object created by the Object constructor or one with a [[Prototype]] of null.
 * @param value The value to check.
 * @returns Returns `true` if value is a plain object, else `false`.
 */
export function isPlainObject(value: any): value is Record<string, any> {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Checks if the object is an empty.
 * @param obj The object to check.
 * @returns Returns `true` if the object is an empty, else `false`.
 */
export function isEmptyObject(obj: Record<string, any>): obj is {} {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}

/**
 * Convert into OData entity property name in which the special characters are encoded.
 * @param value The value need to be converted.
 * @returns The converted value in which the special characters are encoded.
 * @description It seems that the response by REST API will encode the entity property name with special characters.
 * The more details:
 * https://github.com/pnp/pnpjs/issues/1054#issuecomment-582309697
 * https://github.com/pnp/pnpjs/issues/682#issuecomment-491247627
 * https://www.sharepointdiary.com/2011/06/sharepoint-field-display-name-vs-internal-name.html
 */
export function convertIntoODataName(value: string): string {
  const charArr: string[] = value.split('');
  const convertedValue = charArr
    .map((char) => {
      if (SPECIAL_CHARACTER_MAP.has(char)) {
        return SPECIAL_CHARACTER_MAP.get(char);
      }
      return char;
    })
    .join('')
    .replace(/^_/, 'OData__'); // If finally the string is begin with "_", we need replace it by "OData__"

  return convertedValue;
}

/**
 * Hijack a function in an object.
 * @param obj The object which you want to hijack function in.
 * @param functionName The function name which you want to hijack.
 * @param func The function which you used to create new function based on old function.
 */
export function hijack(
  obj: Record<string, any>,
  functionName: string,
  func: (oldFunc: Function) => Function
): void {
  const oldFunction = obj[functionName];
  obj[functionName] = func(oldFunction);
}
