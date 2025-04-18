/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobPatchRequestCustomFieldsValueValueAnyOfInnerJob } from './job-patch-request-custom-fields-value-value-any-of-inner-job';
import { JobPatchRequestCustomFieldsValueValueAnyOfInnerPerson } from './job-patch-request-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface JobPatchRequestCustomFieldsValueValueAnyOfInner
 */
export interface JobPatchRequestCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {JobPatchRequestCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof JobPatchRequestCustomFieldsValueValueAnyOfInner
     */
    'person'?: JobPatchRequestCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {JobPatchRequestCustomFieldsValueValueAnyOfInnerJob}
     * @memberof JobPatchRequestCustomFieldsValueValueAnyOfInner
     */
    'job'?: JobPatchRequestCustomFieldsValueValueAnyOfInnerJob;
}

