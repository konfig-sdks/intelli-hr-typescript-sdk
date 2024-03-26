/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrainingsCreateRequestCustomFieldsValueValue } from './trainings-create-request-custom-fields-value-value';

/**
 * Custom fields will be keyed by their api_name. Custom fields are not required, and any existing model defined custom fields will default to having null values.
 * @export
 * @interface TrainingsCreateRequestCustomFieldsValue
 */
export interface TrainingsCreateRequestCustomFieldsValue {
    /**
     * 
     * @type {TrainingsCreateRequestCustomFieldsValueValue}
     * @memberof TrainingsCreateRequestCustomFieldsValue
     */
    'value'?: TrainingsCreateRequestCustomFieldsValueValue | null;
}

