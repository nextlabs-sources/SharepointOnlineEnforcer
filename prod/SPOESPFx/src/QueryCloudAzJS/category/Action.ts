import Category from './Category';
import AttributeDataType from '../AttributeDataType';

class Action extends Category {
  private static _id = 0;
  private static _categoryId = 'urn:oasis:names:tc:xacml:3.0:attribute-category:action';
  private static _attributeIdPrefix = 'urn:oasis:names:tc:xacml:1.0:action:';

  constructor(actionName: string) {
    super(`Action${Action._id++}`, Action._categoryId);

    this.addAttribute(
      'action-id',
      AttributeDataType.String,
      actionName
    );
  }

  public addAttribute(key: string, dataType: AttributeDataType, ...value: Array<string>) {
    const attributeId =  Action._attributeIdPrefix + key;
    super.addAttribute(attributeId, dataType, ...value);
  }
}

export default Action;