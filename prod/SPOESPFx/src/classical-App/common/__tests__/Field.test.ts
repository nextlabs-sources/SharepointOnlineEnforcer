import Field from '../Field';
import { ExpandedFieldInfo } from '../../../common/interfaces';

const fieldInfo = {
  InternalName: 'test',
  Title: 'test',
  FieldTypeKind: 2,
} as ExpandedFieldInfo;

const fieldObj = {
  internalName: 'test',
  title: 'test',
  typeKind: 2,
};

describe('constructor()', () => {
  test('construct an instance of Field', () => {
    const { internalName, title, typeKind } = fieldObj;
    expect(new Field(internalName, title, typeKind)).toEqual(fieldObj);
  });
});

describe(`${Field.parseFromSPResponse}()`, () => {
  expect(Field.parseFromSPResponse(fieldInfo)).toEqual(fieldObj);
});
