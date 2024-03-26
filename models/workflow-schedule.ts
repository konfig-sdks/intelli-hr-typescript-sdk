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
 * @interface WorkflowSchedule
 */
export interface WorkflowSchedule {
    /**
     * The identifier string for the scheduled Form instance.
     * @type {string}
     * @memberof WorkflowSchedule
     */
    'id'?: string;
    /**
     * The date this Form instance is scheduled to be sent. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof WorkflowSchedule
     */
    'issueDate'?: string;
}

