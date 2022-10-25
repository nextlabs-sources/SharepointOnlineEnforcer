import axios from 'axios';
import * as qs from 'qs';

export default class Token {
  private strOAuthHost: string;
  private strClientId: string;
  private strClientSecure: string;

  public constructor(strOAuthHost: string, strClientId: string, strClientSecure: string) {
    this.strOAuthHost = strOAuthHost;
    this.strClientId = strClientId;
    this.strClientSecure = strClientSecure;
  }

  public async get() {
    //#region If there is an unexpired token stored in sessionSotrage, use it
    const { token_type = '', access_token = '', expires_in = '', access_date = '' } =
      JSON.parse(window.sessionStorage.getItem('NextLabs_ControlCenter_Token')) || {};
    if (access_token && (Date.now() - access_date) / 1000 < expires_in) {
      const token = token_type + ' ' + access_token;
      return token;
    }
    //#endregion

    //#region Else request a new token
    const data = {
      grant_type: 'client_credentials',
      expires_in: 600,
      client_secret: this.strClientSecure,
      client_id: this.strClientId,
    };

    try {
      const response = await axios({
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify(data),
        url: this.strOAuthHost + '/cas/token',
      });

      // tslint:disable-next-line: no-shadowed-variable
      const { token_type, access_token, expires_in } = response.data;
      const token = token_type + ' ' + access_token;
      this.storeToken(token_type, access_token, expires_in);

      return token;
    } catch (error) {
      console.error(error);
    }
    //#endregion
  }

  // Store requested token in sessionStorage
  private storeToken(token_type: string, access_token: string, expires_in: string) {
    window.sessionStorage.setItem(
      'NextLabs_ControlCenter_Token',
      JSON.stringify({
        token_type,
        access_token,
        expires_in,
        access_date: Date.now(),
      })
    );
  }
}
