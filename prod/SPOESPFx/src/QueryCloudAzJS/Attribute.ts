import AttributeDataType from "./AttributeDataType";

class Attribute {
  private _attributeId: string;
  private _value: Array<string>;
  private _dataType: AttributeDataType;
  private _includeInResult: boolean = false;

  constructor(attributeId: string, dataType: AttributeDataType, value: Array<string>) {
    this._attributeId = attributeId;
    this._dataType = dataType;
    this._value = value;
  }

  public toJSON() {
    return {
      'AttributeId': this._attributeId,
      'Value': this._value,
      'DataType': this._dataType,
      'IncludeInResult': this._includeInResult
    };
  }
}

export default Attribute;