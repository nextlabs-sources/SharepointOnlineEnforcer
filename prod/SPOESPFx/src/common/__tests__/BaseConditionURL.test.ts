import BaseConditionURL from '../BaseConditionURL';
import Filter from '../Filter';
import {
  Obligation,
  ObligationAttribute,
  AttributeDataType,
} from '../../QueryCloudAzJS';

const basicURL = {
  url:
    '#InplviewHash45a79cc0-10f1-4311-a473-0dfc3d12bfea=FilterFields1%3DFilterColumn-FilterValues1%3DFinance%253B%2523HR',
  viewId: '45a79cc0-10f1-4311-a473-0dfc3d12bfea',
  filterCons: new Map([
    ['FilterColumn', new Filter('FilterColumn', undefined, ['Finance', 'HR'])],
  ]),
  otherCons: new Map(),
};

const twoFiltersURL = {
  url:
    '#InplviewHashd8bae8e9-3818-418c-977d-b34b437c881a=FilterField1%3Dkeyword-FilterValue1%3Ddesign-FilterField2%3DExportControl-FilterValue2%3DITAR',
  viewId: 'd8bae8e9-3818-418c-977d-b34b437c881a',
  filterCons: new Map([
    ['keyword', new Filter('keyword', undefined, ['design'])],
    ['ExportControl', new Filter('ExportControl', undefined, ['ITAR'])],
  ]),
  otherCons: new Map(),
};

const withSortURL = {
  url:
    '#InplviewHashd8bae8e9-3818-418c-977d-b34b437c881a=SortField%3DEditor-SortDir%3DDesc-FilterFields1%3Dkeyword-FilterValues1%3DITAR%253B%2523design-FilterField2%3DExportControl-FilterValue2%3DITAR',
  viewId: 'd8bae8e9-3818-418c-977d-b34b437c881a',
  filterCons: new Map([
    ['keyword', new Filter('keyword', undefined, ['ITAR', 'design'])],
    ['ExportControl', new Filter('ExportControl', undefined, ['ITAR'])],
  ]),
  otherCons: new Map([
    ['SortField', 'Editor'],
    ['SortDir', 'Desc'],
  ]),
};

const noConditionsURL = {
  url: '#InplviewHashd8bae8e9-3818-418c-977d-b34b437c881a=',
  viewId: 'd8bae8e9-3818-418c-977d-b34b437c881a',
  filterCons: new Map(),
  otherCons: new Map(),
};

const AnyBaseConditionURL: any = BaseConditionURL;

describe('BaseConditionURL', () => {
  describe('constructor()', () => {
    test('basic', () => {
      const { viewId, filterCons, otherCons } = twoFiltersURL;
      const filterURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons,
        otherCons
      );
      expect(filterURL).toEqual({
        viewId,
        filterCons,
        otherCons,
      });
    });

    test('with no othes', () => {
      const { viewId, filterCons } = basicURL;
      const filterURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons
      );

      expect(filterURL).toEqual({
        viewId,
        filterCons,
        otherCons: new Map(),
      });
    });
  });

  describe('parseObligation()', () => {
    const viewId = '45a79cc0-10f1-4311-a473-0dfc3d12bfea';
    const fields: any[] = [
      {
        Title: 'Content Type ID',
        InternalName: 'ContentTypeId',
        TypeAsString: 'ContentTypeId',
      },
      { Title: 'Name', InternalName: 'FileLeafRef', TypeAsString: 'File' },
      {
        Title: 'Filter Column',
        InternalName: 'FilterColumn',
        TypeAsString: 'Choice',
      },
      {
        Title: 'Test Boolean',
        InternalName: 'TestBoolean',
        TypeAsString: 'Boolean',
      },
    ];

    test('basic', () => {
      const obligations: Obligation[] = [
        new Obligation('FilterByColumn', [
          new ObligationAttribute(
            'ColName',
            'filter column',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'ColValue',
            'Finance; HR',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'policy_model_id',
            '20',
            AttributeDataType.String
          ),
        ]),
      ];
      const filterCons: Map<string, Filter> = new Map([
        [
          'FilterColumn',
          new Filter('FilterColumn', 'Choice', ['Finance', 'HR']),
        ],
      ]);

      expect(
        AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
      ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
    });

    test('no obligation', () => {
      const obligations: Obligation[] = [];
      expect(
        AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
      ).toEqual(null);
    });

    test('no fields', () => {
      const emptyFields: any[] = [];
      const obligations: Obligation[] = [
        new Obligation('FilterByColumn', [
          new ObligationAttribute(
            'ColName',
            'filter column',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'ColValue',
            'Finance; HR',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'policy_model_id',
            '20',
            AttributeDataType.String
          ),
        ]),
      ];

      expect(
        AnyBaseConditionURL.parseObligations(obligations, emptyFields, viewId)
      ).toEqual(null);
    });

    test('no valid obligations', () => {
      const obligations: Obligation[] = [
        new Obligation('TestObligation', [
          new ObligationAttribute(
            'ColName',
            'filter column',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'ColValue',
            'Finance; HR',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'policy_model_id',
            '20',
            AttributeDataType.String
          ),
        ]),
      ];
      const filterCons: Map<string, Filter> = new Map();
      expect(
        AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
      ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
    });

    test('no valid colName key', () => {
      const obligations: Obligation[] = [
        new Obligation('FilterByColumn', [
          new ObligationAttribute(
            'TestColName',
            'filter column',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'ColValue',
            'Finance; HR',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'policy_model_id',
            '20',
            AttributeDataType.String
          ),
        ]),
      ];
      const filterCons: Map<string, Filter> = new Map();
      expect(
        AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
      ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
    });

    test('not valid colName value', () => {
      const obligations: Obligation[] = [
        new Obligation('FilterByColumn', [
          new ObligationAttribute(
            'ColName',
            'ilter column',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'ColValue',
            'Finance; HR',
            AttributeDataType.String
          ),
          new ObligationAttribute(
            'policy_model_id',
            '20',
            AttributeDataType.String
          ),
        ]),
      ];

      expect(() => {
        AnyBaseConditionURL.parseObligations(obligations, fields, viewId);
      }).toThrowError();
    });

    describe('boolean type field', () => {
      test('basic', () => {
        const obligations: Obligation[] = [
          new Obligation('FilterByColumn', [
            new ObligationAttribute(
              'ColName',
              'Test Boolean',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'ColValue',
              'Yes; No',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'policy_model_id',
              '20',
              AttributeDataType.String
            ),
          ]),
        ];
        const filterCons: Map<string, Filter> = new Map([
          ['TestBoolean', new Filter('TestBoolean', 'Boolean', ['1', '0'])],
        ]);

        expect(
          AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
        ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
      });

      test('empty field value', () => {
        const obligations: Obligation[] = [
          new Obligation('FilterByColumn', [
            new ObligationAttribute(
              'ColName',
              'Test Boolean',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'ColValue',
              'Yes; No;',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'policy_model_id',
              '20',
              AttributeDataType.String
            ),
          ]),
        ];
        const filterCons: Map<string, Filter> = new Map([
          ['TestBoolean', new Filter('TestBoolean', 'Boolean', ['1', '0', ''])],
        ]);

        expect(
          AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
        ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
      });

      test('invalid field value', () => {
        const obligations: Obligation[] = [
          new Obligation('FilterByColumn', [
            new ObligationAttribute(
              'ColName',
              'Test Boolean',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'ColValue',
              'Yes; No; test',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'policy_model_id',
              '20',
              AttributeDataType.String
            ),
          ]),
        ];
        const filterCons: Map<string, Filter> = new Map([
          ['TestBoolean', new Filter('TestBoolean', 'Boolean', ['1', '0'])],
        ]);

        expect(
          AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
        ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
      });

      test('no valid field value', () => {
        const obligations: Obligation[] = [
          new Obligation('FilterByColumn', [
            new ObligationAttribute(
              'ColName',
              'Test Boolean',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'ColValue',
              'test',
              AttributeDataType.String
            ),
            new ObligationAttribute(
              'policy_model_id',
              '20',
              AttributeDataType.String
            ),
          ]),
        ];
        const filterCons: Map<string, Filter> = new Map();
        expect(
          AnyBaseConditionURL.parseObligations(obligations, fields, viewId)
        ).toEqual(new AnyBaseConditionURL(viewId, filterCons));
      });
    });
  });

  describe('combine()', () => {
    test('basic', () => {
      const { viewId, filterCons, otherCons } = withSortURL;
      const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons,
        otherCons
      );

      const oblFilter: Filter = new Filter('testKey', undefined, [
        'testValue1',
        'testValues',
      ]);
      const oblFilters: Map<string, Filter> = new Map([['testKey', oblFilter]]);
      const oblFilterURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        oblFilters
      );
      const newFilters: Map<string, Filter> = new Map([
        ['keyword', filterCons.get('keyword')],
        ['ExportControl', filterCons.get('ExportControl')],
        ['testKey', oblFilter],
      ]);

      expect(baseConditionURL.combine(oblFilterURL)).toEqual(
        new AnyBaseConditionURL(viewId, newFilters, otherCons)
      );
    });

    describe('repeat', () => {
      test('intersect one', () => {
        const { viewId, filterCons, otherCons } = withSortURL;
        const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          filterCons,
          otherCons
        );

        const testFilter1: Filter = new Filter('testKey', undefined, [
          'testValue1',
          'testValues',
        ]);
        const testFilter2: Filter = new Filter('keyword', undefined, ['ITAR']);
        const testFilters: Map<string, Filter> = new Map([
          ['testKey', testFilter1],
          ['keyword', testFilter2],
        ]);
        const oblFilterURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          testFilters
        );
        const newFilters: Map<string, Filter> = new Map([
          ['keyword', testFilter2],
          ['ExportControl', filterCons.get('ExportControl')],
          ['testKey', testFilter1],
        ]);

        expect(baseConditionURL.combine(oblFilterURL)).toEqual(
          new AnyBaseConditionURL(viewId, newFilters, otherCons)
        );
      });

      test('no intersect', () => {
        const { viewId, filterCons, otherCons } = withSortURL;
        const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          filterCons,
          otherCons
        );

        const testFilter1: Filter = new Filter('testKey', undefined, [
          'testValue1',
          'testValues',
        ]);
        const testFilter2: Filter = new Filter('keyword', undefined, ['']);
        const testFilters: Map<string, Filter> = new Map([
          ['testKey', testFilter1],
          ['keyword', testFilter2],
        ]);
        const oblFilterURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          testFilters
        );

        const newFilter: Filter = new Filter('keyword', undefined, []);
        const newFilters: Map<string, Filter> = new Map([
          ['keyword', newFilter],
          ['ExportControl', filterCons.get('ExportControl')],
          ['testKey', testFilter1],
        ]);

        expect(baseConditionURL.combine(oblFilterURL)).toEqual(
          new AnyBaseConditionURL(viewId, newFilters, otherCons)
        );
      });
    });

    test('different viewId', () => {
      const { viewId, filterCons, otherCons } = withSortURL;
      const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons,
        otherCons
      );

      const oblViewId = '45a79cc0-10f1-4311-a473-0dfc3d12bfea';
      const oblFilter: Filter = new Filter('testKey', undefined, [
        'testValue1',
        'testValues',
      ]);
      const oblFilters: Map<string, Filter> = new Map([['testKey', oblFilter]]);
      const oblFilterURL: BaseConditionURL = new AnyBaseConditionURL(
        oblViewId,
        oblFilters
      );

      expect(baseConditionURL.combine(oblFilterURL)).toEqual(null);
    });
  });

  describe('includes()', () => {
    describe('basic', () => {
      const { viewId, filterCons, otherCons } = basicURL;
      const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons,
        otherCons
      );

      test('true', () => {
        const includedFilterCons: Map<string, Filter> = new Map([
          ['FilterColumn', new Filter('FilterColumn', undefined, ['HR'])],
        ]);
        const includedConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          includedFilterCons
        );
        expect(baseConditionURL.includes(includedConditionURL)).toEqual(true);
      });

      test('false', () => {
        const includedFilterCons: Map<string, Filter> = new Map([
          ['FilterColumn', new Filter('FilterColumn', undefined, ['R&D'])],
        ]);
        const includedConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          includedFilterCons
        );
        expect(baseConditionURL.includes(includedConditionURL)).toEqual(false);
      });
    });

    test('different viewId', () => {
      const { viewId, filterCons, otherCons } = basicURL;
      const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons,
        otherCons
      );
      const includedFilterCons: Map<string, Filter> = new Map([
        ['FilterColumn', new Filter('FilterColumn', undefined, ['HR'])],
      ]);
      const includedConditionURL: BaseConditionURL = new AnyBaseConditionURL(
        twoFiltersURL.viewId,
        includedFilterCons
      );
      expect(baseConditionURL.includes(includedConditionURL)).toEqual(false);
    });

    describe('two filters', () => {
      test('true', () => {
        const { viewId, filterCons, otherCons } = twoFiltersURL;
        const includedConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          filterCons,
          otherCons
        );
        const baseFilterCons: Map<string, Filter> = new Map([
          ['keyword', new Filter('keyword', undefined, ['design', 'HR'])],
        ]);
        const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          twoFiltersURL.viewId,
          baseFilterCons
        );
        expect(baseConditionURL.includes(includedConditionURL)).toEqual(true);
      });

      test('false', () => {
        const { viewId, filterCons, otherCons } = twoFiltersURL;
        const includedConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          viewId,
          filterCons,
          otherCons
        );
        const baseFilterCons: Map<string, Filter> = new Map([
          ['ExportControl', new Filter('ExportControl', undefined, ['design'])],
        ]);
        const baseConditionURL: BaseConditionURL = new AnyBaseConditionURL(
          twoFiltersURL.viewId,
          baseFilterCons
        );
        expect(baseConditionURL.includes(includedConditionURL)).toEqual(false);
      });
    });
  });

  describe('noFilterCons()', () => {
    test('true', () => {
      const { viewId } = noConditionsURL;
      const conditionURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        new Map()
      );
      expect(conditionURL.noFilterCons()).toEqual(true);
    });

    test('false', () => {
      const { viewId, filterCons } = basicURL;
      const conditionURL: BaseConditionURL = new AnyBaseConditionURL(
        viewId,
        filterCons
      );
      expect(conditionURL.noFilterCons()).toEqual(false);
    });
  });
});
