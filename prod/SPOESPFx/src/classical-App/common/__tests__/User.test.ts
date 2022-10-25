import User from '../User';

const loginName = 'andy@nextlabstest.onmicrosoft.com';
const profileProperties = new Map<string, string>([['FirstName', 'Andy']]);
const userInfo = {
  AccountName: 'i:0#.f|membership|andy@nextlabstest.onmicrosoft.com',
  UserProfileProperties: [
    {
      Key: 'FirstName',
      Value: 'Andy',
      ValueType: 'Edm.String',
    },
  ],
};

describe('constructor', () => {
  test('construct an instance of User', () => {
    const user = new User(loginName, profileProperties);

    expect(user.loginName).toEqual(loginName);
    expect(user.profileProperties).toEqual(profileProperties);
  });
});

describe(`${User.parseFromSPResponse.name}()`, () => {
  test('returns an instance of User', () => {
    const user = User.parseFromSPResponse(userInfo);

    expect(user.loginName).toEqual(loginName);
    expect(user.profileProperties).toEqual(profileProperties);
  });
});
