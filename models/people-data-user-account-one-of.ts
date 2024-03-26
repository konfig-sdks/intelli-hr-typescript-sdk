/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleDataUserAccountOneOfUserPermissionGroupsInner } from './people-data-user-account-one-of-user-permission-groups-inner';

/**
 * 
 * @export
 * @interface PeopleDataUserAccountOneOf
 */
export interface PeopleDataUserAccountOneOf {
    /**
     * The identifier string for the [User](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PeopleDataUserAccountOneOf
     */
    'id'?: string;
    /**
     * The unique name of this user.
     * @type {string}
     * @memberof PeopleDataUserAccountOneOf
     */
    'username'?: string;
    /**
     * Specifies whether this [User](https://developers.intellihr.io/docs/v1/) account is active. When disabled, you can no longer sign in using this account.
     * @type {boolean}
     * @memberof PeopleDataUserAccountOneOf
     */
    'isEnabled'?: boolean;
    /**
     * The array of user permission groups containing the [Permission Group\'s](https://developers.intellihr.io/docs/v1/) assigned to this user.
     * @type {Array<PeopleDataUserAccountOneOfUserPermissionGroupsInner>}
     * @memberof PeopleDataUserAccountOneOf
     */
    'userPermissionGroups'?: Array<PeopleDataUserAccountOneOfUserPermissionGroupsInner>;
}

