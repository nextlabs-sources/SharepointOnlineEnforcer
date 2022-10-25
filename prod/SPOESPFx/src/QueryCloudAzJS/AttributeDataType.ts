// The attribute type pass to PC.
const XMLSchema = 'http://www.w3.org/2001/XMLSchema#';
const XACML1 = 'urn:oasis:names:tc:xacml:1.0:data-type:';
const XACML2 = 'urn:oasis:names:tc:xacml:2.0:data-type:';
const XACML3 = 'urn:oasis:names:tc:xacml:3.0:data-type:';

enum AttributeDataType {
	String = <any>`${XMLSchema}string`,
	Bool = <any>`${XMLSchema}boolean`,
	Integer = <any>`${XMLSchema}integer`,
	Double = <any>`${XMLSchema}double`,
	Time = <any>`${XMLSchema}time`,
	Date = <any>`${XMLSchema}date`,
	DateTime = <any>`${XMLSchema}dateTime`,
	DayTimeDuration = <any>`${XMLSchema}dayTimeDuration`,
	YearMonthDuration = <any>`${XMLSchema}yearMonthDuration`,
	AnyURI = <any>`${XMLSchema}anyURI`,
	HexBinary = <any>`${XMLSchema}hexBinary`,
	Base64Binary = <any>`${XMLSchema}base64Binary`,
	Rfc822Name = <any>`${XACML1}rfc822Name`,
	X500Name = <any>`${XACML1}x500Name`,
	IpAddress = <any>`${XACML2}ipAddress`,
	DnsName = <any>`${XACML2}dnsName`,
	XpathExpression = <any>`${XACML3}xpathExpression`
}

export default AttributeDataType;