import Filter from '../Filter';

describe('Filter', () => {
  describe('Constructor', () => {
    describe('Basic', () => {
      test('num', () => {
        const filter: Filter = new (Filter as any)(
          1,
          'Export Control',
          'Text',
          ['ITAR']
        );
        const filter1: Filter = new (Filter as any)(
          3,
          'Export Control',
          'Text',
          ['ITAR']
        );
        const filter2: Filter = new (Filter as any)(
          2,
          'Export Control',
          'Text',
          ['ITAR']
        );
        expect(filter['num']).toEqual(1);
        expect(filter1['num']).toEqual(3);
        expect(filter2['num']).toEqual(2);
      });

      test('field', () => {
        const filter: Filter = new (Filter as any)(
          1,
          'Export Control',
          'Text',
          ['ITAR']
        );
        const filter1: Filter = new (Filter as any)(1, 'Export', 'Text', [
          'ITAR',
        ]);
        const filter2: Filter = new (Filter as any)(1, 'Filtered', 'Text', [
          'ITAR',
        ]);
        expect(filter['field']).toEqual('Export Control');
        expect(filter1['field']).toEqual('Export');
        expect(filter2['field']).toEqual('Filtered');
      });

      test('type', () => {
        const filter: Filter = new (Filter as any)(
          1,
          'Export Control',
          'Text',
          ['ITAR']
        );
        const filter1: Filter = new (Filter as any)(
          1,
          'Export Control',
          'Number',
          ['ITAR']
        );
        const filter2: Filter = new (Filter as any)(
          1,
          'Export Control',
          'Boolean',
          ['ITAR']
        );
        expect(filter['type']).toEqual('Text');
        expect(filter1['type']).toEqual('Number');
        expect(filter2['type']).toEqual('Boolean');
      });

      describe('value', () => {
        test('one filter value', () => {
          const filter: Filter = new (Filter as any)(
            1,
            'Export Control',
            'Text',
            ['ITAR']
          );
          expect(filter['num']).toEqual(1);
          expect(filter['field']).toEqual('Export Control');
          expect(filter['type']).toEqual('Text');
          expect(filter['values']).toEqual(['ITAR']);
        });

        test('two filter values', () => {
          const filter: Filter = new (Filter as any)(
            1,
            'Export Control',
            'Text',
            ['ITAR', 'ETAR']
          );
          expect(filter['num']).toEqual(1);
          expect(filter['field']).toEqual('Export Control');
          expect(filter['type']).toEqual('Text');
          expect(filter['values']).toEqual(['ITAR', 'ETAR']);
        });
      });
    });
  });
});
