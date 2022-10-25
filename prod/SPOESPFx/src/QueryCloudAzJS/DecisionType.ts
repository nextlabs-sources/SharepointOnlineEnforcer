enum DecisionType {
  PERMIT = "Permit",
	DENY = "Deny",
	INDETERMINATE = "Indeterminate",
	INDETERMINATE_PERMIT = "Indeterminate{P}",
	INDETERMINATE_DENY = "Indeterminate{D}",
	INDETERMINATE_DENYPERMIT ="Indeterminate{DP}",
	NOTAPPLICABLE = "NotApplicable"
}

export default DecisionType;