/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.1.7
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Organization } from './organization';


export interface PageOfOrganizationsAllOf { 
    /**
     * An array of Organizations
     */
    organizations: Array<Organization>;
}

