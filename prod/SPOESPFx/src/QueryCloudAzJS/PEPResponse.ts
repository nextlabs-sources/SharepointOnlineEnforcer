import Obligation from "./Obligation";
import Decision from './DecisionType';

class PEPResponse {
  private decision: Decision;
  private obligations: Array<Obligation>;

  constructor(decision: Decision, obligations: Array<Obligation>) {
    this.decision = decision;
    this.obligations = obligations;
  }

  public getDecision() {
    return this.decision;
  }

  public getObligations() {
    return this.obligations;
  }

}

export default PEPResponse;