/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInnerJob } from './business-entities-patch-request-custom-fields-value-value-any-of-inner-job';
import { BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInnerPerson } from './business-entities-patch-request-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInner
 */
export interface BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInner
     */
    'person'?: BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInnerJob}
     * @memberof BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInner
     */
    'job'?: BusinessEntitiesPatchRequestCustomFieldsValueValueAnyOfInnerJob;
}

