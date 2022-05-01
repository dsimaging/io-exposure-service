# Recommendations
This document contains recommendations and hints for developers implementing the Intraoral Exposure Service.

### API Versioning
The API [specification](../api/intraoral-exposure-service-swagger.yaml) contains a version field (i.e., "1.0"). API versioning provides a robust mechanism to support various versions of an API and allow  backward compatibility with API consumers. There are several ways that API developers can describe the version of an API implementation. For example, the desired version can be included in one of the following ways:
- URL Path (i.e., API Endpoint)
- Query Parameter
- Custom Header

For consistency, we recommend that developers use the **URL Path** technique by selecting an appropriate endpoint for the service that includes the API version. For example, the following endpoint contains the API version 1.0:

`https://xraygen:443/api/ioexp/v1/`

### Service Discovery
Consumers of the Intraoral Exposure Service must obtain the endpoint of the service in order to form the complete URL for API calls. It is typical for this kind of configuration to be done manually with the help of documentation. However, there are mechanisms available that allow a consumer to discover the presence of a service automatically. While not required, if a developer would like to provide a discovery mechanism, we recommend the use of [mDNS](https://en.wikipedia.org/wiki/Multicast_DNS).

#### mDNS Service Name
A service can announce itself on a local network using mDNS. A predefined service name is used when announcing the service (represented as a SRV record).

For consistency and ease of discovery, we recommend that implementations use the service name `_io-exposure._tcp`. In this way, API consumers can issue a query for the `_io-exposure._tcp` service and discover all implementations available in the local network.

#### Endpoint TXT Record
While discovering the presence of an `_io-exposure._tcp` implementation on the network is useful, it provides only the machine name (or IP) and port where the implementation exists. The API consumer still needs to obtain the endpoint of the service. The SRV record in mDNS does not contain a field to capture this kind of information. However, mDNS does provide a method to extend the service record with TXT records where services can define arbitrary information. The TXT record can be used to store a series of key/value pairs.

For consistency and ease of discovery, we recommend that implementations use the TXT record to register the endpoint of each supported API version. Each version is expressed as a key/value pair where the key contains the letter'v' followed by the version defined in the specification (i.e., 'v1.0') and the value contains the endpoint. For example, the following TXT record indicates that the service supports three versions of the API and provides the endpoint for each:

`v1.0=/api/v1/;v1.1=/api/v1.1/;v2=/api/v2`

### Date and Time Representation
The Intraoral Exposure API contains date / time fields, such as the `recordedTime` field in the `Exposure` schema. All date time fields defined in the API specification are represented using the standard Internet Date / Time Format defined in [RFC339](https://xml2rfc.tools.ietf.org/public/rfc/html/rfc3339.html).
