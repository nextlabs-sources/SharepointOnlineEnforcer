import axios from 'axios';
import Field from './Field';
import List from './List';

export default class SPOLEServerProxy {
  private serverOrigin: string;

  constructor(serverOrigin: string) {
    this.serverOrigin = serverOrigin;
  }

  public async getListSelectedFields(list: List): Promise<Field[]> {
    const { id, fields } = list;

    const url = `${this.serverOrigin}/GeneralSetting/GetSelectedFields?listId={${id}}`;

    const { data } = await axios.get(url);
    const selectedFieldsObj = JSON.parse(data || '{}');

    return Object.keys(selectedFieldsObj)
      .map((selectedFieldInternalName) =>
        fields.find((field) => field.internalName === selectedFieldInternalName)
      )
      .filter((field) => !!field);
  }
}
