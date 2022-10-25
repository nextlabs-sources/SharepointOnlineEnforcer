import Category from "./Category";
import AttributeDataType from "../AttributeDataType";

class Environment extends Category {
  private static _id = 'Environment';
  private static _categoryId = 'urn:oasis:names:tc:xacml:3.0:attribute-category:environment';
  private static _attributeIdPrefix = 'urn:oasis:names:tc:xacml:1.0:environment:';

  constructor() {
    super(Environment._id, Environment._categoryId);
  }

  public addAttribute(key: string, dataType: AttributeDataType, ...value: Array<string>) {
    const attributeId =  Environment._attributeIdPrefix + key;
    super.addAttribute(attributeId, dataType, ...value);
  }
}

export default Environment;