import Category from './Category';
import AttributeDataType from '../AttributeDataType';

class Host extends Category {
  private static _id: number = 0;
  private static _categoryId = 'urn:nextlabs:names:evalsvc:1.0:attribute-category:host';
  private static _attributeIdPrefix = 'urn:nextlabs:names:evalsvc:1.0:host:';

  constructor(hostName: string, hostIPAddress: string) {
    super(`Host${Host._id++}`, Host._categoryId);

    this.addAttribute(
      'name',
      AttributeDataType.String,
      hostName
    );

    this.addAttribute(
      'inet_address',
      AttributeDataType.IpAddress,
      hostIPAddress
    );
  }

  public addAttribute(key: string, dataType: AttributeDataType, ...value: Array<string>) {
    const attributeId =  Host._attributeIdPrefix + key;
    super.addAttribute(attributeId, dataType, ...value);
  }
}

export default Host;