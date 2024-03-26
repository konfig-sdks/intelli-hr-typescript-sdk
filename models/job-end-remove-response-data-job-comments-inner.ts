/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobEndRemoveResponseDataJobCommentsInnerJobChangeReason } from './job-end-remove-response-data-job-comments-inner-job-change-reason';

/**
 * 
 * @export
 * @interface JobEndRemoveResponseDataJobCommentsInner
 */
export interface JobEndRemoveResponseDataJobCommentsInner {
    /**
     * A further description of the Job Change Reason.
     * @type {any}
     * @memberof JobEndRemoveResponseDataJobCommentsInner
     */
    'description'?: any;
    /**
     * The identifier string for the Job Comment.
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobCommentsInner
     */
    'id'?: string;
    /**
     * The date this Job Comment was created. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {any}
     * @memberof JobEndRemoveResponseDataJobCommentsInner
     */
    'date'?: any;
    /**
     * 
     * @type {JobEndRemoveResponseDataJobCommentsInnerJobChangeReason}
     * @memberof JobEndRemoveResponseDataJobCommentsInner
     */
    'jobChangeReason'?: JobEndRemoveResponseDataJobCommentsInnerJobChangeReason;
}

