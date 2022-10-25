import Filter from '../../../common/Filter';
import ConditionURL from '../ConditionURL';

const basicURL = {
  url:
    '?FilterFields1=TestBoolean&FilterValues1=1%3B%230&FilterTypes1=Boolean&viewid=45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  viewId: '45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  filterCons: new Map([
    ['TestBoolean', new Filter('TestBoolean', 'Boolean', ['1', '0'])],
  ]),
  otherCons: new Map(),
};

const twoFiltersURL = {
  url:
    '?FilterFields1=TestBoolean&FilterValues1=1%3B%230&FilterTypes1=Boolean&FilterField2=FilterColumn&FilterValue2=IT&FilterType2=Choice&viewid=45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  viewId: '45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  filterCons: new Map([
    ['TestBoolean', new Filter('TestBoolean', 'Boolean', ['1', '0'])],
    ['FilterColumn', new Filter('FilterColumn', 'Choice', ['IT'])],
  ]),
  otherCons: new Map(),
};

const withSortURL = {
  url:
    '?FilterFields1=TestBoolean&FilterValues1=1%3B%230&FilterTypes1=Boolean&FilterField2=FilterColumn&FilterValue2=IT&FilterType2=Choice&sortField=Modified&isAscending=false&viewid=45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  viewId: '45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  filterCons: new Map([
    ['TestBoolean', new Filter('TestBoolean', 'Boolean', ['1', '0'])],
    ['FilterColumn', new Filter('FilterColumn', 'Choice', ['IT'])],
  ]),
  otherCons: new Map([
    ['sortField', 'Modified'],
    ['isAscending', 'false'],
  ]),
};

const onlySortURL = {
  url:
    '?sortField=Modified&isAscending=true&viewid=45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  viewId: '45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  filterCons: new Map(),
  otherCons: new Map([
    ['sortField', 'Modified'],
    ['isAscending', 'true'],
  ]),
};

const noViewIdURL = {
  url:
    '?FilterFields1=FilterColumn&FilterValues1=IT%3B%23HR&FilterTypes1=Choice',
  viewId: undefined,
  filterCons: new Map([
    ['FilterColumn', new Filter('FilterColumn', 'Choice', ['IT', 'HR'])],
  ]),
  otherCons: new Map(),
};

describe('ConditionURL', () => {
  describe('parseURL()', () => {
    test('basic', () => {
      const { url, viewId, filterCons, otherCons } = basicURL;
      expect(ConditionURL.parseURL(url)).toEqual(
        new ConditionURL(viewId, filterCons, otherCons)
      );
    });

    test('empty url', () => {
      const url = '';
      expect(ConditionURL.parseURL(url)).toEqual(null);
    });

    test('with two filters', () => {
      const { url, viewId, filterCons, otherCons } = twoFiltersURL;
      expect(ConditionURL.parseURL(url)).toEqual(
        new ConditionURL(viewId, filterCons, otherCons)
      );
    });

    test('with sort url', () => {
      const { url, viewId, filterCons, otherCons } = withSortURL;
      expect(ConditionURL.parseURL(url)).toEqual(
        new ConditionURL(viewId, filterCons, otherCons)
      );
    });

    test('only sort condition url', () => {
      const { url, viewId, filterCons, otherCons } = onlySortURL;
      expect(ConditionURL.parseURL(url)).toEqual(
        new ConditionURL(viewId, filterCons, otherCons)
      );
    });
  });

  describe('toString()', () => {
    test('basic', () => {
      const { url, viewId, filterCons, otherCons } = basicURL;
      const conditionURL: ConditionURL = new ConditionURL(
        viewId,
        filterCons,
        otherCons
      );
      expect(conditionURL.toString()).toEqual(url);
    });

    test('with sort url', () => {
      const { url, viewId, filterCons, otherCons } = withSortURL;
      const conditionURL: ConditionURL = new ConditionURL(
        viewId,
        filterCons,
        otherCons
      );
      expect(conditionURL.toString()).toEqual(url);
    });

    test('with no view id', () => {
      const { url, viewId, filterCons, otherCons } = noViewIdURL;
      const conditionURL: ConditionURL = new ConditionURL(
        viewId,
        filterCons,
        otherCons
      );
      expect(conditionURL.toString()).toEqual(url);
    });
  });
});
