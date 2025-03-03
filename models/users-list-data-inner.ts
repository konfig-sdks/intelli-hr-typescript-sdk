/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsersListDataInnerPerson } from './users-list-data-inner-person';
import { UsersListDataInnerUserPermissionGroupsInner } from './users-list-data-inner-user-permission-groups-inner';

/**
 * 
 * @export
 * @interface UsersListDataInner
 */
export interface UsersListDataInner {
    /**
     * The identifier string for the [User](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof UsersListDataInner
     */
    'id'?: string;
    /**
     * The unique name of this user.
     * @type {string}
     * @memberof UsersListDataInner
     */
    'username'?: string;
    /**
     * Specifies whether this [User](https://developers.intellihr.io/docs/v1/) account is active. When disabled, you can no longer sign in using this account.
     * @type {boolean}
     * @memberof UsersListDataInner
     */
    'isEnabled'?: boolean;
    /**
     * When this record was created. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof UsersListDataInner
     */
    'createdAt'?: string;
    /**
     * When this record was last updated. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof UsersListDataInner
     */
    'updatedAt'?: string;
    /**
     * The array of user permission groups containing the [Permission Group\'s](https://developers.intellihr.io/docs/v1/) assigned to this user.
     * @type {Array<UsersListDataInnerUserPermissionGroupsInner>}
     * @memberof UsersListDataInner
     */
    'userPermissionGroups'?: Array<UsersListDataInnerUserPermissionGroupsInner>;
    /**
     * 
     * @type {UsersListDataInnerPerson}
     * @memberof UsersListDataInner
     */
    'person'?: UsersListDataInnerPerson;
}

