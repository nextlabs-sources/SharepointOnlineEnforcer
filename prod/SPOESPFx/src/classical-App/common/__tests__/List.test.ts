import Web from '../Web';
import List from '../List';
import { ExpandedListInfo, ExpandedWebInfo, ExpandedFieldInfo } from '../../../common/interfaces';

const baseType = 1;
const description = 'description';
const id = '6E3ABEEA-EE82-46DB-8E2F-C427F494A937';
const title = 'Test permit library';
const url = 'https://nextlabstest.sharepoint.com/sites/louis-add-ins/Test permit library';
const listServerRelativeURL = '/sites/louis-add-ins/Test permit library';

const fieldInfos = [
  {
    InternalName: 'test',
    Title: 'test',
    FieldTypeKind: 2,
  },
];

const fields = [
  {
    internalName: 'test',
    title: 'test',
    typeKind: 2,
  },
];

const parentWebInfo = {
  Id: '197b87f4-bcb2-4b86-94ec-104e4a022e5b',
  Url: 'https://nextlabstest.sharepoint.com/sites/louis-add-ins',
  AllProperties: {},
} as ExpandedWebInfo;
const parentWeb = Web.parseFromSPResponse(parentWebInfo);

const listInfo = {
  BaseType: baseType,
  Description: description,
  Fields: fieldInfos,
  Id: id,
  ParentWeb: parentWebInfo,
  Title: title,
  RootFolder: {
    ServerRelativeUrl: listServerRelativeURL,
  },
} as ExpandedListInfo;

describe('constructor()', () => {
  test('construct an instance of List', () => {
    const list = new List(baseType, description, fields, id, parentWeb, title, url);

    expect(list.baseType).toEqual(baseType);
    expect(list.description).toEqual(description);
    expect(list.fields).toEqual(fields);
    expect(list.id).toEqual(id);
    expect(list.parentWeb).toEqual(parentWeb);
    expect(list.title).toEqual(title);
    expect(list.url).toEqual(url);
  });
});

describe(`${List.parseFromSPResponse.name}()`, () => {
  test('returns an instance of List', () => {
    const list = List.parseFromSPResponse(listInfo);

    expect(list.baseType).toEqual(baseType);
    expect(list.description).toEqual(description);
    expect(list.fields).toEqual(fields);
    expect(list.id).toEqual(id);
    expect(list.parentWeb).toEqual(parentWeb);
    expect(list.title).toEqual(title);
    expect(list.url).toEqual(url);
  });
});
