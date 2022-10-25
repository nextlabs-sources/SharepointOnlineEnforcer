import { IFieldInfo } from '@pnp/sp/fields';
import Filter from './Filter';
import { intersect, arrIncludes } from '../util';
import { Obligation, ObligationAttribute } from '../QueryCloudAzJS';
import { OBLIGATION_NAME_FOR_FILTER } from './constants';
import { OBAttributeForFilter } from './enumerations';
import PROMPT_MESSAGES from './prompt-messages';

/** Represents the condition URL */
abstract class BaseConditionURL {
  protected viewId: string;

  protected filterCons: Map<string, Filter>;

  protected otherCons: Map<string, string>;

  /**
   * Represents the condition URL
   * @param viewId The id of the view
   * @param filterCons The conditions about filter
   * @param otherCons Other conditions
   */
  constructor(
    viewId: string,
    filterCons: Map<string, Filter>,
    otherCons?: Map<string, string>
  ) {
    this.viewId = viewId;
    this.filterCons = filterCons;
    this.otherCons = otherCons || new Map<string, string>();
  }

  /**
   * Parse obligations into an instance of ConditionURL
   * @param obligations The obligations responded from the JPC
   * @param fields The fields of the list
   * @param viewId The id of a view
   */
  public static parseObligations(
    obligations: Obligation[],
    fields: IFieldInfo[],
    viewId: string
  ): BaseConditionURL {
    if (obligations.length <= 0 || fields.length <= 0) {
      return null;
    }

    const filterCons: Map<string, Filter> = new Map();
    obligations.forEach((obligation: Obligation) => {
      if (obligation.getName() !== OBLIGATION_NAME_FOR_FILTER) {
        return;
      }

      const attributes: ObligationAttribute[] = obligation.getAttributes();
      let colName: string;
      let colValue: string;

      attributes.forEach((attribute: ObligationAttribute) => {
        const attributeName = attribute.getName();
        switch (attributeName) {
          case OBAttributeForFilter.ColName:
            colName = attribute.getValue();
            break;
          case OBAttributeForFilter.ColValue:
            colValue = attribute.getValue();
            break;
          // no default
        }
      });

      if (!colName) {
        return;
      }

      let isValidField = false;
      for (let i = 0; i < fields.length; i += 1) {
        const field: IFieldInfo = fields[i];
        if (field.Title.toLowerCase() === colName.toLowerCase()) {
          isValidField = true;
          const filterField: string = field.InternalName;
          const filterType: string = field.TypeAsString;
          const filterValues: string[] = BaseConditionURL.parseOblValues(
            colValue,
            filterType
          );
          if (filterValues.length > 0) {
            filterCons.set(
              filterField,
              new Filter(filterField, filterType, filterValues)
            );
          }
          break;
        }
      }

      if (!isValidField) {
        throw new Error(
          PROMPT_MESSAGES.invalidFieldError.replace('{colName}', colName)
        );
      }
    });

    return new (this as any)(viewId, filterCons);
  }

  /**
   * Parse the obligation values responded from JPC into values for filter.
   * @param value The obligation values responded from JPC.
   * @param type Type of the field.
   */
  private static parseOblValues(value: string, type: string): string[] {
    let filterValues: string[] = value.split(';').map((item) => item.trim());
    if (type === 'Boolean') {
      filterValues = filterValues.map((item): '1' | '0' | '' => {
        switch (item.toLowerCase()) {
          case 'yes':
            return '1';
          case 'no':
            return '0';
          case '':
            return '';
          default:
            return undefined;
        }
      });
    }

    filterValues = filterValues.filter((item) => {
      return item !== undefined;
    });

    return filterValues;
  }

  /**
   * Combine an instance of ConditionURL.
   * @param conditionURL The instance of ConditionURL to be combined.
   */
  public combine(conditionURL: BaseConditionURL): BaseConditionURL {
    if (
      this.viewId &&
      conditionURL.viewId &&
      this.viewId !== conditionURL.viewId
    ) {
      return null;
    }
    const newFilterCons: Map<string, Filter> = new Map();

    const baseFilters: Map<string, Filter> = this.filterCons;
    const combinedFilters: Map<string, Filter> = conditionURL.filterCons;

    baseFilters.forEach((baseFilter: Filter, baseKey: string) => {
      let repeat = false;
      for (const combinedKey of combinedFilters.keys()) {
        if (combinedKey === baseKey) {
          repeat = true;
          const baseValues: string[] = baseFilter.values;
          const { field, type, values } = combinedFilters.get(combinedKey);
          const newValues: string[] = intersect(baseValues, values);
          const newFilter: Filter = new Filter(field, type, newValues);

          newFilterCons.set(field, newFilter);
          combinedFilters.delete(combinedKey);
          break;
        }
      }

      if (!repeat) {
        newFilterCons.set(baseKey, baseFilter);
      }
    });

    combinedFilters.forEach((postFilter: Filter, postKey: string) => {
      newFilterCons.set(postKey, postFilter);
    });

    return new (this.constructor as any)(
      this.viewId,
      newFilterCons,
      this.otherCons
    );
  }

  /**
   * Determines whether an instanceof ConditionURL includes a certain element, returning true or false as appropriate.
   * @param searchConditionURL The instance of ConditionURL to be searched.
   */
  public includes(searchConditionURL: BaseConditionURL): boolean {
    if (
      this.viewId &&
      searchConditionURL.viewId &&
      this.viewId !== searchConditionURL.viewId
    ) {
      return false;
    }
    const baseFilterCons: Map<string, Filter> = this.filterCons;
    const searchFilterCons: Map<string, Filter> = searchConditionURL.filterCons;

    for (const key of baseFilterCons.keys()) {
      const baseFilter: Filter = baseFilterCons.get(key);
      const includedFilter: Filter = searchFilterCons.get(key);
      if (
        !includedFilter ||
        !arrIncludes(baseFilter.values, includedFilter.values)
      ) {
        return false;
      }
    }

    return true;
  }

  /** Determines whether an instance of ConditionURL has filter conditions, returning true or false as appropriate.  */
  public noFilterCons(): boolean {
    return this.filterCons.size === 0;
  }

  /** Returns a string representation of an condition URL. */
  public abstract toString(): string;
}

export default BaseConditionURL;
