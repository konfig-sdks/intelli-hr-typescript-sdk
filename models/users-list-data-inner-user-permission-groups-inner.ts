/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UsersListDataInnerUserPermissionGroupsInnerPermissionGroup } from './users-list-data-inner-user-permission-groups-inner-permission-group';

/**
 * 
 * @export
 * @interface UsersListDataInnerUserPermissionGroupsInner
 */
export interface UsersListDataInnerUserPermissionGroupsInner {
    /**
     * The identifier string for the User Permission Group.
     * @type {string}
     * @memberof UsersListDataInnerUserPermissionGroupsInner
     */
    'id'?: string;
    /**
     * 
     * @type {UsersListDataInnerUserPermissionGroupsInnerPermissionGroup}
     * @memberof UsersListDataInnerUserPermissionGroupsInner
     */
    'permissionGroup'?: UsersListDataInnerUserPermissionGroupsInnerPermissionGroup;
}

