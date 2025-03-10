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
 * @interface BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf1
 */
export interface BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf1 {
    /**
     * For MULTI_SELECT records, the value is stored as an object with an array of labels for all selected options. NOTE: Only the labels need to be provided. `ids` is not required.
     * @type {Array<string>}
     * @memberof BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf1
     */
    'labels'?: Array<string>;
}

