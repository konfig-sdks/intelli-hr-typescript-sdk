/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationsPatchRequestCustomFieldsValue } from './locations-patch-request-custom-fields-value';
import { UUIDv4Property3 } from './uuidv4-property3';

/**
 * 
 * @export
 * @interface LocationsPatchRequest
 */
export interface LocationsPatchRequest {
    /**
     * 
     * @type {UUIDv4Property3}
     * @memberof LocationsPatchRequest
     */
    'parentId'?: UUIDv4Property3;
    /**
     * Name given to this [Location](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof LocationsPatchRequest
     */
    'name'?: string;
    /**
     * Code given to this [Location](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof LocationsPatchRequest
     */
    'code'?: string;
    /**
     * The address of this location.
     * @type {string}
     * @memberof LocationsPatchRequest
     */
    'address'?: string;
    /**
     * Specifies whether users can select this [Location](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof LocationsPatchRequest
     */
    'isEnabled'?: boolean;
    /**
     * The custom field values for this Location
     * @type {{ [key: string]: LocationsPatchRequestCustomFieldsValue; }}
     * @memberof LocationsPatchRequest
     */
    'customFields'?: { [key: string]: LocationsPatchRequestCustomFieldsValue; };
}

