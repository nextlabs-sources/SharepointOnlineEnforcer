import { FieldTypes } from '@pnp/sp/presets/all';
import { ExpandedFieldInfo } from '../../common/interfaces';

export default class Field {
  public readonly internalName: string;
  public readonly title: string;
  public readonly typeKind: FieldTypes;
  public readonly outputType?: FieldTypes;

  constructor(internalName: string, title: string, typeKind: FieldTypes, outputType?: FieldTypes) {
    this.internalName = internalName;
    this.title = title;
    this.typeKind = typeKind;
    this.outputType = outputType;
  }

  /**
   * Use the field info to construct a Field object.
   * @param fieldInfo The field info which is responded from SharePoint server.
   * @returns A Field object.
   */
  public static parseFromSPResponse(fieldInfo: ExpandedFieldInfo): Field {
    const {
      Title: title,
      InternalName: internalName,
      FieldTypeKind: typeKind,
      OutputType: outputType,
    } = fieldInfo;

    return new Field(internalName, title, typeKind, outputType);
  }
}
