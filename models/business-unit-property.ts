/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsResponse } from './custom-fields-response';
import { UUIDv4Property } from './uuidv4-property';

/**
 * 
 * @export
 * @interface BusinessUnitProperty
 */
export interface BusinessUnitProperty {
    /**
     * The identifier string for the [Business Unit](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof BusinessUnitProperty
     */
    'id'?: string;
    /**
     * Optional identifier that can be used for administrative tasks.
     * @type {string}
     * @memberof BusinessUnitProperty
     */
    'identifier'?: string;
    /**
     * Name given to this [Business Unit](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof BusinessUnitProperty
     */
    'name'?: string;
    /**
     * Code given to this [Business Unit](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof BusinessUnitProperty
     */
    'code'?: string;
    /**
     * Notes attached to a [Business Unit](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof BusinessUnitProperty
     */
    'notes'?: string;
    /**
     * 
     * @type {UUIDv4Property}
     * @memberof BusinessUnitProperty
     */
    'parentId'?: UUIDv4Property;
    /**
     * Specifies whether users can select this [Business Unit](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof BusinessUnitProperty
     */
    'isEnabled'?: boolean;
    /**
     * The custom field values for this [Business Unit](https://developers.intellihr.io/docs/v1/)
     * @type {CustomFieldsResponse}
     * @memberof BusinessUnitProperty
     */
    'customFields'?: CustomFieldsResponse;
}

