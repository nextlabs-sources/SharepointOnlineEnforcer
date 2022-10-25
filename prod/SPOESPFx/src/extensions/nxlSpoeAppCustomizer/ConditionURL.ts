import BaseConditionURL from '../../common/BaseConditionURL';
import Filter from '../../common/Filter';

class ConditionURL extends BaseConditionURL {
  /**
   * Parse URL into an instance of ConditionURL
   * @param url The ure to be passed
   */
  public static parseURL(url: string): ConditionURL {
    const matchResult: RegExpMatchArray = /\?(.*)/.exec(url);
    if (!matchResult || !matchResult[1]) {
      return null;
    }
    const conditions: string = matchResult[1];

    const arrConditions: string[][] = conditions
      .split('&')
      .map((item) => item.split('='));
    const mapConditions: Map<string, string> = new Map(arrConditions as any);
    const filterCons: Map<string, Filter> = new Map();
    let viewId: string;
    if (mapConditions.has('viewid')) {
      viewId = decodeURIComponent(mapConditions.get('viewid'));
      mapConditions.delete('viewid');
    }

    for (const key of mapConditions.keys()) {
      const fieldMatchResult: RegExpMatchArray = /FilterField(s?\d*)/.exec(key);
      if (fieldMatchResult) {
        const suffix: string = fieldMatchResult[1];
        const fieldKey: string = key;
        const typeKey = `FilterType${suffix}`;
        const valuesKey = `FilterValue${suffix}`;
        const field: string = decodeURIComponent(mapConditions.get(key));
        const type: string = mapConditions.get(typeKey);
        const values: string[] = decodeURIComponent(
          mapConditions.get(valuesKey)
        ).split(';#');

        filterCons.set(field, new Filter(field, type, values));

        mapConditions.delete(fieldKey);
        mapConditions.delete(typeKey);
        mapConditions.delete(valuesKey);
      }
    }

    return new ConditionURL(viewId, filterCons, mapConditions);
  }

  public toString(): string {
    const conditions: string[] = [];

    let num = 0;
    this.filterCons.forEach((filter: Filter) => {
      const { field, values, type } = filter;
      num += 1;
      const isPlural: boolean = values.length > 1;

      conditions.push(
        `FilterField${isPlural ? 's' : ''}${num}=${encodeURIComponent(
          field
        ).replace(/_/g, '%5F')}`
      );
      conditions.push(
        `FilterValue${isPlural ? 's' : ''}${num}=${encodeURIComponent(
          values.join(';#')
        ).replace(/_/g, '%5F')}`
      );
      conditions.push(
        `FilterType${isPlural ? 's' : ''}${num}=${encodeURIComponent(
          type
        ).replace(/_/g, '%5F')}`
      );
    });

    this.otherCons.forEach((value: string, key: string) => {
      conditions.push(`${key}=${value}`);
    });

    if (this.viewId) {
      conditions.push(`viewid=${this.viewId}`);
    }

    return `?${conditions.join('&')}`;
  }
}

export default ConditionURL;
