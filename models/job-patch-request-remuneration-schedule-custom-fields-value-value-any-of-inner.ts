/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInnerJob } from './job-patch-request-remuneration-schedule-custom-fields-value-value-any-of-inner-job';
import { JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInnerPerson } from './job-patch-request-remuneration-schedule-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInner
 */
export interface JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInner
     */
    'person'?: JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInnerJob}
     * @memberof JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInner
     */
    'job'?: JobPatchRequestRemunerationScheduleCustomFieldsValueValueAnyOfInnerJob;
}

