/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobSupervisorJobOneOfPositionTitle } from './job-supervisor-job-one-of-position-title';

/**
 * 
 * @export
 * @interface JobSupervisorJobOneOf
 */
export interface JobSupervisorJobOneOf {
    /**
     * The identifier string for the [Supervisor\'s Job](https://developers.intellihr.io/docs/v1/) of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobSupervisorJobOneOf
     */
    'id'?: string;
    /**
     * The current status of this job within this organisation. Enum: `Past Job`, `Future Job`, `Ending Job`, `Current Job`.
     * @type {string}
     * @memberof JobSupervisorJobOneOf
     */
    'jobStatus'?: string;
    /**
     * The name of the [Supervisor\'s Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobSupervisorJobOneOf
     */
    'name'?: string;
    /**
     * 
     * @type {JobSupervisorJobOneOfPositionTitle}
     * @memberof JobSupervisorJobOneOf
     */
    'positionTitle'?: JobSupervisorJobOneOfPositionTitle;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobSupervisorJobOneOf
     */
    'link'?: string;
}

