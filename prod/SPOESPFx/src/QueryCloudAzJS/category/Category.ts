import Attribute from '../Attribute';
import AttributeDataType from '../AttributeDataType';

abstract class Category {
  protected _id: string;
  protected _categoryId: string;
  protected _attribute: Array<Attribute>;

  constructor(id: string, categoryId: string) {
    this._id = id;
    this._categoryId = categoryId;
    this._attribute = new Array<Attribute>();
  }

  public addAttribute(attributeId: string, dataType: AttributeDataType, ...value: Array<string>) {
    this._attribute.push(
      new Attribute(attributeId, dataType, value)
    );
  }

  public getId() {
    return this._id;
  }

  protected toJSON() {
    return {
      'Id': this._id,
      'CategoryId': this._categoryId,
      'Attribute': this._attribute
    };
  }
}

export default Category;