import Category from './Category';
import AttributeDataType from '../AttributeDataType';

class Subject extends Category {
  private static _id = 0;
  private static _categoryId = 'urn:oasis:names:tc:xacml:1.0:subject-category:access-subject';
  private static _attributeIdPrefix = 'urn:oasis:names:tc:xacml:1.0:subject:';
  
  constructor(subjectId: string, subjectName: string) {
    super(`User${Subject._id++}`, Subject._categoryId);

    this.addAttribute(
      'subject-id',
      AttributeDataType.String,
      subjectId
    );
    this.addAttribute(
      'name',
      AttributeDataType.String,
      subjectName
    );
  }

  public addAttribute(key: string, dataType: AttributeDataType, ...value: Array<string>) {
    const attributeId =  Subject._attributeIdPrefix + key;
    super.addAttribute(attributeId, dataType, ...value);
  }
}

export default Subject;