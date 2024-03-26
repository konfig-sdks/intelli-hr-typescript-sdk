/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobEndPatchResponseDataJobExtendedLeaveOneOfType } from './job-end-patch-response-data-job-extended-leave-one-of-type';

/**
 * 
 * @export
 * @interface JobEndPatchResponseDataJobExtendedLeaveOneOf
 */
export interface JobEndPatchResponseDataJobExtendedLeaveOneOf {
    /**
     * The start date of the attribute, or null for start of job. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {any}
     * @memberof JobEndPatchResponseDataJobExtendedLeaveOneOf
     */
    'startDate'?: any;
    /**
     * The end date of the attribute, or null for end of job/time. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {any}
     * @memberof JobEndPatchResponseDataJobExtendedLeaveOneOf
     */
    'endDate'?: any;
    /**
     * If the end date is the expected or actual return date
     * @type {boolean}
     * @memberof JobEndPatchResponseDataJobExtendedLeaveOneOf
     */
    'isEndDateConfirmed'?: boolean;
    /**
     * 
     * @type {JobEndPatchResponseDataJobExtendedLeaveOneOfType}
     * @memberof JobEndPatchResponseDataJobExtendedLeaveOneOf
     */
    'type'?: JobEndPatchResponseDataJobExtendedLeaveOneOfType;
}

