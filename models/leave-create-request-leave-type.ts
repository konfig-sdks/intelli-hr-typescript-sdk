/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * [Extended Leave Type](https://developers.intellihr.io/docs/v1/) of this Extended Leave. This [Extended Leave Type](https://developers.intellihr.io/docs/v1/) is specified as a search object, which will match the leave type which best fits the keys for this object. Multiple keys can be used together to further narrow search results.
 * @export
 * @interface LeaveCreateRequestLeaveType
 */
export interface LeaveCreateRequestLeaveType {
    /**
     * The identifier string for the [Extended Leave Type](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof LeaveCreateRequestLeaveType
     */
    'id'?: string;
    /**
     * The name of the [Extended Leave Type](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof LeaveCreateRequestLeaveType
     */
    'name'?: string;
}

