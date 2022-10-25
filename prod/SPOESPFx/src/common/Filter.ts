/** Represents the filter criteria */
class Filter {
  public field: string;
  public type: string;
  public values: string[];

  /**
   * Represent the filter criteria
   * @param field The name of the field to be filtered
   * @param type The type of the field
   * @param values The values for filter
   */
  constructor(field: string, type: string, values: string[]) {
    this.field = field;
    this.type = type;
    this.values = values;
  }
}

export default Filter;
