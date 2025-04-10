/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobPatchResponseMetaWorkflowEvent } from './job-patch-response-meta-workflow-event';
import { UUIDv4Property2 } from './uuidv4-property2';

/**
 * Contains miscellaneous meta information about the response.
 * @export
 * @interface JobPatchResponseMeta
 */
export interface JobPatchResponseMeta {
    /**
     * The point in time for which this response is for. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof JobPatchResponseMeta
     */
    'asAt'?: string;
    /**
     * 
     * @type {JobPatchResponseMetaWorkflowEvent}
     * @memberof JobPatchResponseMeta
     * @deprecated
     */
    'workflowEvent'?: JobPatchResponseMetaWorkflowEvent;
    /**
     * 
     * @type {UUIDv4Property2}
     * @memberof JobPatchResponseMeta
     * @deprecated
     */
    'workflowEventId'?: UUIDv4Property2;
    /**
     * List of string identifiers for [Workflow Events](https://developers.intellihr.io/docs/v1/). This will not be defined if there is no workflowEvents in the response
     * @type {Array<string>}
     * @memberof JobPatchResponseMeta
     */
    'workflowEventIds'?: Array<string>;
    /**
     * The identifier string for the api request.
     * @type {string}
     * @memberof JobPatchResponseMeta
     */
    'requestId'?: string;
}

