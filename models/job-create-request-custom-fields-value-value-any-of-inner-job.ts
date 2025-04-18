/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The [Job](https://developers.intellihr.io/docs/v1/) information of the [Person](https://developers.intellihr.io/docs/v1/) is mandatory if the target PEOPLE_DROPDOWN custom field allows selecting individual jobs. If not, The [Job](https://developers.intellihr.io/docs/v1/) information is not mandatory.
 * @export
 * @interface JobCreateRequestCustomFieldsValueValueAnyOfInnerJob
 */
export interface JobCreateRequestCustomFieldsValueValueAnyOfInnerJob {
    /**
     * The identifier string for the [Job](https://developers.intellihr.io/docs/v1/) of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobCreateRequestCustomFieldsValueValueAnyOfInnerJob
     */
    'id'?: string;
    /**
     * The name/position title of the [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobCreateRequestCustomFieldsValueValueAnyOfInnerJob
     */
    'name'?: string;
}

