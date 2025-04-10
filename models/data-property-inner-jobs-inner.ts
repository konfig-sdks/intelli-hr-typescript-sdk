/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RFC3339DatetimeProperty7 } from './rfc3339-datetime-property7';
import { RFC3339DatetimeProperty8 } from './rfc3339-datetime-property8';

/**
 * 
 * @export
 * @interface DataPropertyInnerJobsInner
 */
export interface DataPropertyInnerJobsInner {
    /**
     * The identifier string for the [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof DataPropertyInnerJobsInner
     */
    'id'?: string;
    /**
     * The name/position title of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof DataPropertyInnerJobsInner
     */
    'name'?: string;
    /**
     * 
     * @type {RFC3339DatetimeProperty7}
     * @memberof DataPropertyInnerJobsInner
     */
    'startDate'?: RFC3339DatetimeProperty7;
    /**
     * 
     * @type {RFC3339DatetimeProperty8}
     * @memberof DataPropertyInnerJobsInner
     */
    'endDate'?: RFC3339DatetimeProperty8;
    /**
     * The current status of this [Job](https://developers.intellihr.io/docs/v1/) within this organisation. Enum: `Past Job`, `Future Job`, `Ending Job`, `Current Job`.
     * @type {string}
     * @memberof DataPropertyInnerJobsInner
     */
    'jobStatus'?: string;
    /**
     * The current leave status of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {boolean}
     * @memberof DataPropertyInnerJobsInner
     */
    'isOnExtendedLeave'?: boolean;
    /**
     * Whether this job is the primary job
     * @type {boolean}
     * @memberof DataPropertyInnerJobsInner
     */
    'isPrimaryJob'?: boolean;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof DataPropertyInnerJobsInner
     */
    'link'?: string;
}

