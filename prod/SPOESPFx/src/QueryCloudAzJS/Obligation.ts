import ObligationAttribute from "./ObligationAttribute";

class Obligation {
  private name: string;
  private attributes: Array<ObligationAttribute>;

  constructor(name: string, attributes: Array<ObligationAttribute>) {
    this.name = name;
    this.attributes = attributes;
  }

  public getName() {
    return this.name;
  }

  public getAttributes() {
    return this.attributes;
  }
}

export default Obligation;