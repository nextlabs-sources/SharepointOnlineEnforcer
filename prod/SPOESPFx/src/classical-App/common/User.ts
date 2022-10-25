import { UserInfo } from '../../common/interfaces';

export default class User {
  public readonly loginName: string;
  public readonly profileProperties: Map<string, string>;

  constructor(loginName: string, profileProperties: Map<string, string>) {
    this.loginName = loginName;
    this.profileProperties = profileProperties;
  }

  public static parseFromSPResponse(userInfo: UserInfo): User {
    const loginName = User.convertAccountNameIntoLoginName(userInfo.AccountName);
    const profileProperties = new Map<string, string>();

    userInfo.UserProfileProperties.forEach((profileProperty) => {
      const { Key: key, Value: value } = profileProperty;

      profileProperties.set(key, value);
    });

    return new User(loginName, profileProperties);
  }

  private static convertAccountNameIntoLoginName(accountName: string): string {
    const index = accountName.lastIndexOf('|');
    return accountName.slice(index + 1);
  }
}
