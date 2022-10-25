import { CachingConfiguration } from './interfaces';

export const RESOURCE_TYPE = 'spole';
export const OBLIGATION_NAME_FOR_FILTER = 'FilterByColumn';

export const CACHING_CONFIG: CachingConfiguration = {
  cachingStore: 'session',
  cachingTimeoutSeconds: 180,
};

export const PROMPT_MESSAGE_CLASS_NAME = {
  message: 'nxl-message',
  row: 'nxl-control-row',
  error: 'nxl-error',
  hide: 'nxl-hide',
};

export const PROMPT_MESSAGE_ID = {
  expChangeWarning: 'nxl-exp-warning',
};

export const SUPPORTED = {
  os: ['Windows', 'Mac OS'],
  browser: new Map([
    ['Edge', 80],
    ['Chrome', 49],
    ['Firefox', 52],
  ]),
};

export const STOP_LOG = false;

export const LIST_ADVANCED_SETTINGS_SERVER_REQUEST_PATH = '/_layouts/15/advsetng.aspx';

export const NXL_POLICY_RESULTS = 'NXLPolicyResults';

export const POLICY_RESULT_CACHE_EXPIRATION_MILLISECONDS = 1000 * 60 * 5;

export const LIST_ITEM_ID_IS_NAN = 'LIST_ITEM_ID_IS_NAN';
export const ITEM_DOES_NOT_EXIST = 'Item does not exist';

export const TRIM_LIST_ITEMS_START = 'TRIM_LIST_ITEMS_START';
export const TRIM_SEARCH_RESULTS_START = 'TRIM_SEARCH_RESULTS_START';

export const SPECIAL_CHARACTER_MAP = new Map([
  ['~', '_x007e_'],
  ['!', '_x0021_'],
  ['@', '_x0040_'],
  ['#', '_x0023_'],
  ['$', '_x0024_'],
  ['%', '_x0025_'],
  ['^', '_x005e_'],
  ['&', '_x0026_'],
  ['*', '_x002a_'],
  ['(', '_x0028_'],
  [')', '_x0029_'],
  ['_', '_x005f_'],
  ['+', '_x002b_'],
  ['-', '_x002d_'],
  ['=', '_x003d_'],
  ['{', '_x007b_'],
  ['}', '_x007d_'],
  ['}', '_x007d_'],
  [':', '_x003a_'],
  ['"', '_x0022_'],
  ['|', '_x007c_'],
  [';', '_x003b_'],
  ["'", '_x0027_'],
  ['\\', '_x005c_'],
  ['<', '_x003c_'],
  ['>', '_x003e_'],
  ['?', '_x003f_'],
  [',', '_x002c_'],
  ['.', '_x002e_'],
  ['/', '_x002f_'],
  ['`', '_x0060_'],
  [' ', '_x0020_'],
]);

export const APPLICATION_NAME = 'SPOLE';
