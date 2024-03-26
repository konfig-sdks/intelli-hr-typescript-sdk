/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The [Job Change Reason](https://developers.intellihr.io/docs/v1/) used in the system to document the reason for the change.
 * @export
 * @interface JobCommentsInnerJobChangeReason
 */
export interface JobCommentsInnerJobChangeReason {
    /**
     * The identifier string for the [Job Change Reason](https://developers.intellihr.io/docs/v1/) to which this Job Comment belongs.
     * @type {string}
     * @memberof JobCommentsInnerJobChangeReason
     */
    'id'?: string;
    /**
     * Name given to this [Job Change Reason](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobCommentsInnerJobChangeReason
     */
    'name'?: string;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobCommentsInnerJobChangeReason
     */
    'link'?: string;
}

