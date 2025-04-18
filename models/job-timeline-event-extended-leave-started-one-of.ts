/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobTimelineEventExtendedLeaveStartedOneOfLeaveType } from './job-timeline-event-extended-leave-started-one-of-leave-type';

/**
 * 
 * @export
 * @interface JobTimelineEventExtendedLeaveStartedOneOf
 */
export interface JobTimelineEventExtendedLeaveStartedOneOf {
    /**
     * The identifier string for the Extended leave id.
     * @type {string}
     * @memberof JobTimelineEventExtendedLeaveStartedOneOf
     */
    'id'?: string;
    /**
     * 
     * @type {JobTimelineEventExtendedLeaveStartedOneOfLeaveType}
     * @memberof JobTimelineEventExtendedLeaveStartedOneOf
     */
    'leaveType'?: JobTimelineEventExtendedLeaveStartedOneOfLeaveType;
    /**
     * If the end date is the expected or actual return date
     * @type {boolean}
     * @memberof JobTimelineEventExtendedLeaveStartedOneOf
     */
    'isEndDateConfirmed'?: boolean;
}

