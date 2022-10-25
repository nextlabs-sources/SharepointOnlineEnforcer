import Category from './Category';
import AttributeDataType from '../AttributeDataType';

class Application extends Category {
  private static _id: number = 0;
  private static _categoryId = 'urn:nextlabs:names:evalsvc:1.0:attribute-category:application';
  private static _attributeIdPrefix = 'urn:nextlabs:names:evalsvc:1.0:application:';

  constructor(appId: string) {
    super(`App${Application._id++}`, Application._categoryId);

    this.addAttribute(
      'application-id',
      AttributeDataType.String,
      appId
    );
  }

  public addAttribute(key: string, dataType: AttributeDataType, ...value: Array<string>) {
    const attributeId =  Application._attributeIdPrefix + key;
    super.addAttribute(attributeId, dataType, ...value);
  }
}

export default Application;