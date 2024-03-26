/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobProperty4SupervisorJobOneOfPositionTitle } from './job-property4-supervisor-job-one-of-position-title';

/**
 * 
 * @export
 * @interface JobProperty4SupervisorJobOneOf
 */
export interface JobProperty4SupervisorJobOneOf {
    /**
     * The identifier string for the [Supervisor\'s Job](https://developers.intellihr.io/docs/v1/) of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty4SupervisorJobOneOf
     */
    'id'?: string;
    /**
     * The current status of this job within this organisation. Enum: `Past Job`, `Future Job`, `Ending Job`, `Current Job`.
     * @type {string}
     * @memberof JobProperty4SupervisorJobOneOf
     */
    'jobStatus'?: string;
    /**
     * The name of the [Supervisor\'s Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty4SupervisorJobOneOf
     */
    'name'?: string;
    /**
     * 
     * @type {JobProperty4SupervisorJobOneOfPositionTitle}
     * @memberof JobProperty4SupervisorJobOneOf
     */
    'positionTitle'?: JobProperty4SupervisorJobOneOfPositionTitle;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobProperty4SupervisorJobOneOf
     */
    'link'?: string;
}

