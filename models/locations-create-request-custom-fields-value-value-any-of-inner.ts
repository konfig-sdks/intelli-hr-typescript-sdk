/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationsCreateRequestCustomFieldsValueValueAnyOfInnerJob } from './locations-create-request-custom-fields-value-value-any-of-inner-job';
import { LocationsCreateRequestCustomFieldsValueValueAnyOfInnerPerson } from './locations-create-request-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface LocationsCreateRequestCustomFieldsValueValueAnyOfInner
 */
export interface LocationsCreateRequestCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {LocationsCreateRequestCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof LocationsCreateRequestCustomFieldsValueValueAnyOfInner
     */
    'person'?: LocationsCreateRequestCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {LocationsCreateRequestCustomFieldsValueValueAnyOfInnerJob}
     * @memberof LocationsCreateRequestCustomFieldsValueValueAnyOfInner
     */
    'job'?: LocationsCreateRequestCustomFieldsValueValueAnyOfInnerJob;
}

