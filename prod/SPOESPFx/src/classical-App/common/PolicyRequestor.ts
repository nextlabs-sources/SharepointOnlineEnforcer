import {
  Action,
  Subject,
  Resource,
  PEPResponse,
  NextLabsPEPAgent,
  AttributeDataType,
  Application,
} from '../../QueryCloudAzJS';
import User from './User';
import List from './List';
import Field from './Field';
import ListItem from './ListItem';
import Logger from '../../common/Logger';

import { JPCConfig } from '../../common/interfaces';
import { RESOURCE_TYPE, APPLICATION_NAME } from '../../common/constants';
import PROMPT_MESSAGES from '../../common/prompt-messages';
import { isUndefined } from '../../util';

export default class PolicyRequestor {
  private agent: NextLabsPEPAgent;
  private user: Subject;
  private static action = new Action('VIEW');
  private static application = new Application(APPLICATION_NAME);

  constructor(jpcConfig: JPCConfig, user: User) {
    const jpcHost: string = jpcConfig.get('jpcHost');
    const oAuthHost: string = jpcConfig.get('oAuthHost');
    const clientSecureID: string = jpcConfig.get('clientSecureID');
    const clientSecureKey: string = jpcConfig.get('clientSecureKey');
    this.agent = new NextLabsPEPAgent(jpcHost, oAuthHost, clientSecureID, clientSecureKey);

    const { loginName, profileProperties } = user;
    this.user = new Subject(loginName, loginName);
    profileProperties.forEach((value, key) => {
      this.user.addAttribute(key, AttributeDataType.String, value);
    });
  }

  public async getPolicyResultForViewList(
    list: List,
    selectedSiteProperties: Map<string, string>
  ): Promise<PEPResponse> {
    const listBaseType: number = list.baseType;
    const listDescription: string = list.description;
    const listID: string = list.id;
    const listTitle: string = list.title;
    const listURL: string = encodeURI(list.url);

    const resource = new Resource(listID, RESOURCE_TYPE);
    resource.addAttribute(
      'url',
      AttributeDataType.String,
      listURL.replace(/https|http/, 'sharepoint')
    );
    const subType: string = PolicyRequestor.getListSubType(listBaseType);

    resource.addAttribute('name', AttributeDataType.String, listTitle);
    resource.addAttribute('desc', AttributeDataType.String, listDescription);
    resource.addAttribute('type', AttributeDataType.String, 'portlet');
    resource.addAttribute('sub_type', AttributeDataType.String, subType);

    selectedSiteProperties.forEach((value, key) => {
      resource.addAttribute(key, AttributeDataType.String, value);
    });

    const policyResult: PEPResponse = await this.agent
      .decide(this.user, PolicyRequestor.action, resource, PolicyRequestor.application)
      .then((res) => res[0]);

    return policyResult;
  }

  public async getPolicyResultsForViewListItems(
    listItems: ListItem[],
    selectedFields: Field[],
    selectedSiteProperties: Map<string, string>
  ): Promise<PEPResponse[]> {
    const resources: Resource[] = listItems.map((listItem) => {
      const {
        url: listItemURL,
        data: listItemData,
        fileType,
        fileName,
        parentList: { baseType: listBaseType },
      } = listItem;
      const resource = new Resource(listItemURL, RESOURCE_TYPE);

      resource.addAttribute(
        'url',
        AttributeDataType.String,
        listItemURL.replace(/https|http/, 'sharepoint')
      );

      resource.addAttribute('type', AttributeDataType.String, 'item', fileType);
      resource.addAttribute('name', AttributeDataType.String, fileName);
      resource.addAttribute(
        'sub_type',
        AttributeDataType.String,
        PolicyRequestor.getListItemSubType(listBaseType)
      );

      selectedFields.forEach((field) => {
        const { title: fieldTitle, internalName: fieldInternalName } = field;
        const fieldValue: string = listItemData.get(fieldInternalName);

        if (!isUndefined(fieldValue)) {
          resource.addAttribute(fieldTitle, AttributeDataType.String, fieldValue);
        }
      });

      selectedSiteProperties.forEach((value, key) => {
        resource.addAttribute(key, AttributeDataType.String, value);
      });

      return resource;
    });

    const policyResults: PEPResponse[] = await this.agent.bulkDecide(
      this.user,
      PolicyRequestor.action,
      resources,
      PolicyRequestor.application
    );

    return policyResults;
  }

  private static getListSubType(baseType: number): string {
    switch (baseType) {
      case 0:
        return 'list';
      case 1:
        return 'library';
      default:
        throw new Error(PROMPT_MESSAGES.wrongListBaseType);
    }
  }

  private static getListItemSubType(baseType: number): string {
    switch (baseType) {
      case 0:
        return 'list item';
      case 1:
        return 'library item';
      default:
        throw new Error(PROMPT_MESSAGES.wrongListBaseType);
    }
  }
}
