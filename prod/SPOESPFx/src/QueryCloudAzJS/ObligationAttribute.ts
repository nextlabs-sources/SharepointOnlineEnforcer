import AttributeDataType from "./AttributeDataType";

class ObligationAttribute {
  private name: string;
  private value: string;
  private type: AttributeDataType;

  constructor(name: string, value: string, type: AttributeDataType) {
    this.name = name;
    this.value = value;
    this.type = type;
  }

  public getName() {
    return this.name;
  }

  public getValue() {
    return this.value;
  }

  public getType() {
    return this.type;
  }
}

export default ObligationAttribute;