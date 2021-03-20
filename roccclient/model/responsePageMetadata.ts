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
import { ResponsePageMetadataPaging } from './responsePageMetadataPaging';


/**
 * A page of results
 */
export interface ResponsePageMetadata { 
    /**
     * Index of the first result that must be returned
     */
    offset: number;
    /**
     * Maximum number of results returned
     */
    limit: number;
    paging: ResponsePageMetadataPaging;
    /**
     * Total number of results in the result set
     */
    totalResults?: number;
}

