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
import { OrgMembershipCreateResponse } from './orgMembershipCreateResponse';
import { OrgMembershipCreateRequest } from './orgMembershipCreateRequest';


/**
 * Information about an org membership
 */
export interface OrgMembership { 
    /**
     * The unique identifier of the org membership
     */
    id: string;
    /**
     * The state of the member in the organization. The `pending` state indicates the user has not yet accepted an invitation.
     */
    state: OrgMembership.StateEnum;
    /**
     * The user\'s membership type in the organization.
     */
    role: OrgMembership.RoleEnum;
    /**
     * The unique identifier of an organization
     */
    organizationId: string;
    /**
     * The unique identifier of a user
     */
    userId: string;
}
export namespace OrgMembership {
    export type StateEnum = 'active' | 'pending';
    export const StateEnum = {
        Active: 'active' as StateEnum,
        Pending: 'pending' as StateEnum
    };
    export type RoleEnum = 'admin' | 'member';
    export const RoleEnum = {
        Admin: 'admin' as RoleEnum,
        Member: 'member' as RoleEnum
    };
}


