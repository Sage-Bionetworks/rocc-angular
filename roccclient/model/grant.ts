/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.1.4
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GrantCreateResponse } from './grantCreateResponse';
import { GrantCreateRequest } from './grantCreateRequest';


/**
 * Information about monetary resources for challenge
 */
export interface Grant { 
    /**
     * The ID of the grant
     */
    grantId?: string;
    /**
     * The grant name
     */
    name: string;
    /**
     * A description of the grant
     */
    description?: string;
    /**
     * The URL to the grant
     */
    url?: string;
}

