import {
  NXL_POLICY_RESULTS,
  POLICY_RESULT_CACHE_EXPIRATION_MILLISECONDS,
} from '../../common/constants';
import { CachedPolicyResult } from './interfaces';

// TODO: Use -1, 0, 1 to express deny, padding, permit.
// TODO: Use web URL + list title + item ID as key to store.
export default class PolicyResultCache {
  public static set(key: string, value: boolean): void {
    const cachedPolicyResults: Record<string, CachedPolicyResult> =
      JSON.parse(sessionStorage.getItem(NXL_POLICY_RESULTS)) || {};

    cachedPolicyResults[key] = {
      value,
      expiredTime: Date.now() + POLICY_RESULT_CACHE_EXPIRATION_MILLISECONDS,
    };

    sessionStorage.setItem(NXL_POLICY_RESULTS, JSON.stringify(cachedPolicyResults));
  }

  public static get(key: string): boolean {
    const cachedPolicyResults: Record<string, CachedPolicyResult> =
      JSON.parse(sessionStorage.getItem(NXL_POLICY_RESULTS)) || {};
    const cachedPolicyResult: CachedPolicyResult = cachedPolicyResults[key];

    if (cachedPolicyResult && cachedPolicyResult.expiredTime > Date.now()) {
      return cachedPolicyResult.value;
    }

    return undefined;
  }
}
