import Category from './category/Category';
import Subject from './category/Subject';
import Action from './category/Action';
import Resource from './category/Resource';

export default class JPCSingleRequest {
  private _categorys: Array<Category>;
  private resource: Resource;

  constructor(subject: Subject, action: Action, resource: Resource, ...categorys: Array<Category>) {
    this.resource = resource;
    this._categorys = new Array<Category>(subject, action, resource);
    this._categorys.push(...categorys);
  }

  public getID() {
    return this.resource.getId();
  }

  public toJSON() {
    return {
      Request: {
        ReturnPolicyIdList: 'True',
        Category: this._categorys,
      },
    };
  }
}
