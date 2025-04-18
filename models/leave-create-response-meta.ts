/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Contains miscellaneous meta information about the response.
 * @export
 * @interface LeaveCreateResponseMeta
 */
export interface LeaveCreateResponseMeta {
    /**
     * The point in time for which this response is for. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof LeaveCreateResponseMeta
     */
    'asAt'?: string;
    /**
     * An link to fetch all [Workflows](https://developers.intellihr.io/docs/v1/) that belong under the Workflow Event for this Extended Leave creation.
     * @type {string}
     * @memberof LeaveCreateResponseMeta
     */
    'workflowEvent'?: string;
    /**
     * The identifier string for the [Workflow Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof LeaveCreateResponseMeta
     */
    'workflowEventId'?: string;
    /**
     * The identifier string for the api request.
     * @type {string}
     * @memberof LeaveCreateResponseMeta
     */
    'requestId'?: string;
}

