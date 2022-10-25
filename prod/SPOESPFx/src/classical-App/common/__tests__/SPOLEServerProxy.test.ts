import axios from 'axios';
import SPOLEServerProxy from '../SPOLEServerProxy';
import List from '../List';
import Field from '../Field';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
const serverOrigin = 'https://webserver.edrm.cloudaz.com:8443';
const spoleServer = new SPOLEServerProxy(serverOrigin);

const list = {
  id: '95a051e8-b292-44df-9f13-704661497f85',
  fields: [
    { internalName: 'Edit', outputType: undefined, title: 'Edit', typeKind: 12 },
    {
      internalName: 'FileSizeDisplay',
      outputType: undefined,
      title: 'File Size',
      typeKind: 12,
    },
    {
      internalName: 'Test_x0020_Number',
      outputType: undefined,
      title: 'Test Number',
      typeKind: 9,
    },
    {
      internalName: 'Trim',
      outputType: undefined,
      title: 'Trim',
      typeKind: 2,
    },
  ],
} as List;

describe('constructor()', () => {
  test('return an instance of SPOLEServerProxy', () => {
    expect(spoleServer).toEqual({
      serverOrigin,
    });
  });
});

describe('getListSelectedFields()', () => {
  test('return selected fields', async () => {
    mockedAxios.get.mockResolvedValue({
      data:
        '{"Edit":"Edit(Edit)","FileSizeDisplay":"File Size(FileSizeDisplay)","Test_x0020_Number":"Test Number(Test_x0020_Number)","Trim":"Trim(Trim)"}',
    });

    const listSelectedFields: Field[] = await spoleServer.getListSelectedFields(list);
    expect(listSelectedFields).toEqual(list.fields);
  });

  test('return empty array when there is no fields selected', async () => {
    mockedAxios.get.mockResolvedValue({
      data: '',
    });

    const listSelectedFields: Field[] = await spoleServer.getListSelectedFields(list);
    expect(listSelectedFields).toEqual([]);
  });
});
