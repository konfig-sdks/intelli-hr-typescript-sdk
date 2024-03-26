/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PermissionGroup
 */
export interface PermissionGroup {
    /**
     * The identifier string for the [Permission Group](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PermissionGroup
     */
    'id'?: string;
    /**
     * Name given to this [Permission Group](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof PermissionGroup
     */
    'name'?: string;
    /**
     * Specifies whether users can select this [Permission Group](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof PermissionGroup
     */
    'isEnabled'?: boolean;
}

