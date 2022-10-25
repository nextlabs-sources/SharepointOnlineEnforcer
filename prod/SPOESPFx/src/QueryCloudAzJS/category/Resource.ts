import Category from "./Category";
import AttributeDataType from "../AttributeDataType";

class Resource extends Category {
  private static _id = 0;
  private static _categoryId = 'urn:oasis:names:tc:xacml:3.0:attribute-category:resource';
  private static _resourceIdPrefix = 'urn:oasis:names:tc:xacml:1.0:resource:';
  private static _attributeIdPrefix = 'urn:nextlabs:names:evalsvc:1.0:resource:';

  constructor(resourceId: string, resourceType: string) {
    super(`Resource${Resource._id++}`, Resource._categoryId);

    // _resourceIdPrefix is different with _attributeIdPrefix, so that we distinguish it.
    super.addAttribute(
      Resource._resourceIdPrefix + 'resource-id',
      AttributeDataType.AnyURI,
      resourceId
    );

    this.addAttribute(
      'resource-type',
      AttributeDataType.AnyURI,
      resourceType
    );
  }

  public addAttribute(key: string, dataType: AttributeDataType, ...value: Array<string>) {
    const attributeId =  Resource._attributeIdPrefix + key;
    super.addAttribute(attributeId, dataType, ...value);
  }
}

export default Resource;