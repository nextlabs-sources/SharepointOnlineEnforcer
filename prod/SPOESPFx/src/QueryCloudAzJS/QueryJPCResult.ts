// // import Obligation from './Obligation'

// // The query status from PC. 
// enum QueryStatus {
// 	QS_S_OK,
// 	QS_E_Failed,
// 	QS_E_Unauthorized,
// 	QS_E_BadRequest,
// 	QS_E_ServiceUnavailable,
// 	QS_E_MissAttributes,
// 	QS_E_InternalError,
// 	QS_E_TooManyRequest,
// 	QS_E_DisConnect,
// };


// enum PolicyEnforcement {
// 	Deny = 0,
// 	Allow = 1,
// 	DontCare = 2
// };

// export default class QueryJPCResult {
// 	public SetQueryStatus(qs: QueryStatus) { this._queryStatus = qs; }
// 	public SetEnforcement(enforcement: PolicyEnforcement) { this._Enforcement = enforcement; }
// 	public AddObligation(Ob: Obligation) { this._arrayObligations.push(Ob); }


// 	public GetQueryStatus(): QueryStatus { return this._queryStatus; }
// 	public GetEnforcement(): PolicyEnforcement { return this._Enforcement; }
// 	public ObligationCount(): number { return this._arrayObligations.length; }
// 	public GetObligationByIndex(nIndex: number): Obligation { return this._arrayObligations[nIndex]; }


// 	private _queryStatus: QueryStatus;
// 	private _Enforcement: PolicyEnforcement;
// 	private _arrayObligations: Array<Obligation>;
// }