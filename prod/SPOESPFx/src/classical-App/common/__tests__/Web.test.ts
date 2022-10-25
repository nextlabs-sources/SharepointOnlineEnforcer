import Web from '../Web';
import { ExceptionBehavior, SitePropertyLevel } from '../../../common/enumerations';
import PROMPT_MESSAGES from '../../../common/prompt-messages';
import { ExpandedWebInfo } from '../../../common/interfaces';

const rootWebID = '06415db5-e479-413e-ba6d-08284a56579f';
const rootWebURL = 'https://nextlabssss.sharepoint.com/sites/TestSiteNameCaseSensitive';
const mockJPCConfig = {
  jpcHost: 'https://91jpc.nextlabs.solutions',
  oAuthHost: 'https://91cc.nextlabs.solutions',
  clientSecureID: 'secureID',
  clientSecureKey: 'secureKey',
};

const rootWebAllProperties = new Map([
  ['SPOLEDefaultBehavior', 'deny'],
  [
    'SPOLESelectedLists',
    '{"95a051e8-b292-44df-9f13-704661497f85":"Documents","551fd540-a15e-4fa4-beb6-d1524e8551df":"Documents"}',
  ],
  [
    'SPOLESitePropertyList',
    '[{"siteProperties":[{"displayName":"dlc_expirationlastruncorrelationv2","checked":true},{"displayName":"SC-ll","checked":true}],"id":"https://nextlabssss.sharepoint.com/sites/TestSiteNameCaseSensitive","name":"Test Site Name Case Sensitive","pId":"0","checked":false,"isParent":true,"isLoaded":true},{"siteProperties":[{"displayName":"vti_defaultlanguage","checked":true}],"id":"https://nextlabssss.sharepoint.com/sites/TestSiteNameCaseSensitive/subsite","name":"Subsite","pId":"https://nextlabssss.sharepoint.com/sites/TestSiteNameCaseSensitive","checked":false,"isParent":true,"isLoaded":false}]',
  ],
  [
    'SPOLEGeneralSetInfo',
    `{"JavaPcHost":"${mockJPCConfig.jpcHost}","OAUTHHost":"${mockJPCConfig.oAuthHost}","ClientSecureID":"${mockJPCConfig.clientSecureID}","ClientSecureKey":"${mockJPCConfig.clientSecureKey}"}`,
  ],
  ['SPOLEServerDomainName', 'webserver.edrm.cloudaz.com:8443'],
  [
    'dlc_x005f_expirationlastruncorrelationv2',
    'start:07/13/2020 15:10:20; end:07/13/2020 15:10:20;correlationId:67b3a15b-f82f-402a-917c-a3e6affce120',
  ],
  ['SC_x002d_ll', 'yes'],
]);
const rootWeb = new Web(rootWebID, rootWebURL, rootWebAllProperties);

const subWebID = 'f2017f16-b9f8-4008-b0ba-8bc07200aa8c';
const subWebURL = 'https://nextlabssss.sharepoint.com/sites/TestSiteNameCaseSensitive/subsite';
const subWebAllProperties = new Map([['vti_x005f_defaultlanguage', 'en-us']]);
const subWeb = new Web(subWebID, subWebURL, subWebAllProperties);

describe('constructor', () => {
  test('construct an instance of Web', () => {
    expect(rootWeb.id).toBe(rootWebID);
    expect(rootWeb.url).toBe(rootWebURL);
    expect(rootWeb.allProperties).toBe(rootWebAllProperties);
  });
});

describe('getExceptionBehavior()', () => {
  test('return exception behavior', () => {
    expect(rootWeb.getExceptionBehavior()).toBe(ExceptionBehavior.Deny);
  });
});

describe('getSPOLEServerOrigin()', () => {
  test('return server origin', () => {
    expect(rootWeb.getSPOLEServerOrigin()).toBe('https://webserver.edrm.cloudaz.com:8443');
  });

  test('throw an error when there is no origin info', () => {
    const emptyProperties = new Map();
    const emptyPropertyWeb = new Web(rootWebID, rootWebURL, emptyProperties);

    expect(emptyPropertyWeb.getSPOLEServerOrigin.bind(emptyPropertyWeb)).toThrowError(
      PROMPT_MESSAGES.wrongSPOLEServerOrigin
    );
  });
});

describe('getJPCConfig()', () => {
  test('return JPC config', () => {
    const jpcConfig = rootWeb.getJPCConfig();

    expect(jpcConfig.get('jpcHost')).toBe(mockJPCConfig.jpcHost);
    expect(jpcConfig.get('oAuthHost')).toBe(mockJPCConfig.oAuthHost);
    expect(jpcConfig.get('clientSecureID')).toBe(mockJPCConfig.clientSecureID);
    expect(jpcConfig.get('clientSecureKey')).toBe(mockJPCConfig.clientSecureKey);
  });
});

describe('getSelectedListMap()', () => {
  test('return selected list map', () => {
    const selectedListMap: Map<string, string> = new Map([
      ['95a051e8-b292-44df-9f13-704661497f85', 'Documents'],
      ['551fd540-a15e-4fa4-beb6-d1524e8551df', 'Documents'],
    ]);

    expect(rootWeb.getSelectedListMap()).toEqual(selectedListMap);
  });
});

describe('parseFromSPResponse()', () => {
  const webInfo = {
    Id: rootWebID,
    Url: rootWebURL,
    AllProperties: {},
  } as ExpandedWebInfo;

  test('return an instance of Web', () => {
    expect(Web.parseFromSPResponse(webInfo)).toEqual({
      id: rootWebID,
      url: rootWebURL,
      allProperties: new Map(),
    });
  });
});

describe('getSelectedSitePropertyMap()', () => {
  describe('Site property evaluation level is "Subsite"', () => {
    beforeAll(() => {
      rootWeb.allProperties.set('SPOLESitePropertyLevel', SitePropertyLevel.Subsite);
    });

    test('return selected site property in root web', () => {
      const selectedSiteProperty = Web.getSelectedSitePropertyMap(rootWeb, rootWeb);
      const map = new Map();

      expect(selectedSiteProperty).toEqual(map);
    });

    test('return selected site property in sub web', () => {
      const selectedSiteProperty = Web.getSelectedSitePropertyMap(rootWeb, subWeb);
      const map = new Map([['ss.vti_defaultlanguage', 'en-us']]);

      expect(selectedSiteProperty).toEqual(map);
    });

    afterAll(() => {
      rootWeb.allProperties.delete('SPOLESitePropertyLevel');
    });
  });

  describe('Site property evaluation level is "SiteCollection"', () => {
    beforeAll(() => {
      rootWeb.allProperties.set('SPOLESitePropertyLevel', SitePropertyLevel.SiteCollection);
    });

    test('return selected site property in root or sub web', () => {
      const selectedSiteProperty = Web.getSelectedSitePropertyMap(rootWeb, subWeb);
      const map = new Map([
        [
          'sc.dlc_expirationlastruncorrelationv2',
          'start:07/13/2020 15:10:20; end:07/13/2020 15:10:20;correlationId:67b3a15b-f82f-402a-917c-a3e6affce120',
        ],
        ['sc.SC-ll', 'yes'],
      ]);

      expect(selectedSiteProperty).toEqual(map);
    });

    afterAll(() => {
      rootWeb.allProperties.delete('SPOLESitePropertyLevel');
    });
  });

  describe('Site property evaluation level is "Both"', () => {
    beforeAll(() => {
      rootWeb.allProperties.set('SPOLESitePropertyLevel', SitePropertyLevel.Both);
    });

    test('in both in same web', () => {
      const selectedSiteProperty = Web.getSelectedSitePropertyMap(rootWeb, rootWeb);
      const map = new Map([
        [
          'sc.dlc_expirationlastruncorrelationv2',
          'start:07/13/2020 15:10:20; end:07/13/2020 15:10:20;correlationId:67b3a15b-f82f-402a-917c-a3e6affce120',
        ],
        ['sc.SC-ll', 'yes'],
      ]);

      expect(selectedSiteProperty).toEqual(map);
    });

    test('in both in different web', () => {
      rootWeb.allProperties.set('SPOLESitePropertyLevel', SitePropertyLevel.Both);

      const selectedSiteProperty = Web.getSelectedSitePropertyMap(rootWeb, subWeb);
      const map = new Map([
        [
          'sc.dlc_expirationlastruncorrelationv2',
          'start:07/13/2020 15:10:20; end:07/13/2020 15:10:20;correlationId:67b3a15b-f82f-402a-917c-a3e6affce120',
        ],
        ['sc.SC-ll', 'yes'],
        ['ss.vti_defaultlanguage', 'en-us'],
      ]);

      expect(selectedSiteProperty).toEqual(map);
    });

    afterAll(() => {
      rootWeb.allProperties.delete('SPOLESitePropertyLevel');
    });
  });
});
