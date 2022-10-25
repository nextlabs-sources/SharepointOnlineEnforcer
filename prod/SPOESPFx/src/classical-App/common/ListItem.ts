import { FieldTypes } from '@pnp/sp/presets/all';

import List from './List';
import Field from './Field';
import { convertCurrencyIntoNumber, trimString, isEmptyString, isUndefined } from '../../util';

import { RawListItemData } from '../../common/interfaces';

export default class ListItem {
  public static placeholderListItemIndex = 0;

  public readonly data: Map<string, string>;
  public readonly fileName: string;
  public readonly fileType: string;
  public readonly id: string;
  public readonly parentList: List;
  public readonly url: string;

  constructor(parentList: List, rawListItemData: RawListItemData) {
    const { ID: id, FileRef: fileRef, File_x0020_Type: fileType } = rawListItemData;
    const url: string = new URL(parentList.url).origin + fileRef;

    this.data = ListItem.convertValues(rawListItemData, parentList);
    this.fileName = fileRef.replace(/^.*\//, '');
    this.fileType = fileType;
    this.id = id;
    this.parentList = parentList;
    this.url = url;
  }

  /**
   * Check if the data is a list item data.
   * @param row The row data which need to distinguish.
   * @returns Returns `true` if the data is a list item data, else `false`.
   */
  public static isListItemData(row: RawListItemData): boolean {
    // Use ContentTypeId to distinguish list item data and group data.
    // List item has property "ContentTypeId" and group data does not.
    return !isUndefined(row.ContentTypeId);
  }

  /**
   * Get an list item object which is only used for placeholder
   * @param index The index of the placeholder list item.
   * @returns An list item object which is used for placeholder.
   */
  public static getPlaceholderListItem(
    index: number = (ListItem.placeholderListItemIndex += 1)
  ): RawListItemData {
    return {
      ID: `All_Trimed${index}`,
      FSObjType: '0', // relate the element id
      'HTML_x0020_File_x0020_Type.File_x0020_Type.mapico': '', // relate the element image icon
    };
  }

  private static convertValues(
    rawListItemData: RawListItemData,
    parentList: List
  ): Map<string, string> {
    const result = new Map<string, string>();

    Object.entries(rawListItemData).forEach(([key, value]) => {
      const relevantField: Field = parentList.fields.find((field) => field.internalName === key);

      if (!isUndefined(relevantField)) {
        const { typeKind, outputType } = relevantField;
        const newValue = ListItem.parseValue(typeKind, value, rawListItemData, outputType);
        result.set(key, newValue);
      }
    });

    return result;
  }

  private static parseValue(
    typeKind: FieldTypes,
    value: any,
    rawListItemData: RawListItemData,
    outputType?: FieldTypes
  ): string {
    const fileType: string = rawListItemData.File_x0020_Type;

    if (isEmptyString(value)) {
      return '';
    }

    let result = value;

    switch (typeKind) {
      case FieldTypes.Note:
        result = value.replace(/\n/g, ' ');
        break;
      case FieldTypes.Number:
        result = String(value).replace(/,/g, '');
        break;
      case FieldTypes.Currency:
        result = convertCurrencyIntoNumber(value);
        break;
      case FieldTypes.DateTime:
        result = Date.parse(value);
        break;
      case FieldTypes.File:
        result = trimString(value, '', `.${fileType}`);
        break;
      case FieldTypes.Calculated:
        result = ListItem.parseValue(outputType, value, rawListItemData);
        break;
      // no default
    }

    return String(result);
  }
}
