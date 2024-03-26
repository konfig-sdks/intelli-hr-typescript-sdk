/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInnerJob } from './business-units-create-request-custom-fields-value-value-any-of-inner-job';
import { BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInnerPerson } from './business-units-create-request-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInner
 */
export interface BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInner
     */
    'person'?: BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInnerJob}
     * @memberof BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInner
     */
    'job'?: BusinessUnitsCreateRequestCustomFieldsValueValueAnyOfInnerJob;
}

