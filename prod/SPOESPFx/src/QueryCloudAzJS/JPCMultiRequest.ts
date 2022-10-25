import Category from './category/Category';
import Action from './category/Action';
import Subject from './category/Subject';
import Resource from './category/Resource';

interface Reference {
  ReferenceId: Array<string>;
}

export default class JPCMultiRequest {
  private subjects = new Array<Subject>();
  private actions = new Array<Action>();
  private resources = new Array<Resource>();
  private categorys = new Array<Category>();
  private combinedDecision = false;
  private multiRequests = new Array<Reference>();
  private returnPolicyIdList = false;
  private xPathVersion = 'http://www.w3.org/TR/1999/REC-xpath-19991116';

  constructor(
    subject: Subject,
    action: Action,
    resources: Array<Resource>,
    ...categorys: Array<Category>
  ) {
    this.subjects.push(subject);
    this.actions.push(action);
    this.resources.push(...resources);
    this.categorys.push(...categorys);

    // Assign multiRequests
    resources.forEach((resource) => {
      this.multiRequests.push({
        ReferenceId: [
          subject.getId(),
          action.getId(),
          resource.getId(),
          ...categorys.map((category) => category.getId()), // Get another categorys' id
        ],
      });
    });
  }

  public getID() {
    return this.resources.map((resource) => resource.getId()).join('&');
  }

  public toJSON() {
    return {
      Request: {
        Action: this.actions,
        Category: this.categorys,
        CombinedDecision: this.combinedDecision,
        MultiRequests: {
          RequestReference: this.multiRequests,
        },
        Resource: this.resources,
        ReturnPolicyIdList: this.returnPolicyIdList,
        Subject: this.subjects,
        XPathVersion: this.xPathVersion,
      },
    };
  }
}
