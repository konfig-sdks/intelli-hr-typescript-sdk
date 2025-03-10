/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessUnitsPatchRequestCustomFieldsValue } from './business-units-patch-request-custom-fields-value';
import { UUIDv4Property } from './uuidv4-property';

/**
 * 
 * @export
 * @interface BusinessUnitsPatchRequest
 */
export interface BusinessUnitsPatchRequest {
    /**
     * Optional identifier that can be used for administrative tasks.
     * @type {string}
     * @memberof BusinessUnitsPatchRequest
     */
    'identifier'?: string;
    /**
     * Name given to this [Business Unit](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof BusinessUnitsPatchRequest
     */
    'name': string;
    /**
     * Code given to this [Business Unit](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof BusinessUnitsPatchRequest
     */
    'code'?: string;
    /**
     * Notes attached to a [Business Unit](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof BusinessUnitsPatchRequest
     */
    'notes'?: string;
    /**
     * 
     * @type {UUIDv4Property}
     * @memberof BusinessUnitsPatchRequest
     */
    'parentId'?: UUIDv4Property;
    /**
     * Specifies whether users can select this [Business Unit](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof BusinessUnitsPatchRequest
     */
    'isEnabled'?: boolean;
    /**
     * The custom field values for this Business Unit
     * @type {{ [key: string]: BusinessUnitsPatchRequestCustomFieldsValue; }}
     * @memberof BusinessUnitsPatchRequest
     */
    'customFields'?: { [key: string]: BusinessUnitsPatchRequestCustomFieldsValue; };
}

