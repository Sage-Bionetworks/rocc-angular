/**
 * Registry of Open Community Challenge API
 * The OpenAPI specification implemented by the Challenge Registries. # Introduction TBA 
 *
 * The version of the OpenAPI document: 0.4.0
 * Contact: thomas.schaffter@sagebionetworks.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { PageOfTagsAllOf } from './pageOfTagsAllOf';
import { ResponsePageMetadataPaging } from './responsePageMetadataPaging';
import { Tag } from './tag';
import { ResponsePageMetadata } from './responsePageMetadata';


/**
 * A page of Tags
 */
export interface PageOfTags { 
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
    /**
     * An array of Tags
     */
    tags: Array<Tag>;
}

