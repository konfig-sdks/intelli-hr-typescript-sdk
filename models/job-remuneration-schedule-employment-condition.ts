/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmploymentConditionPropertyAwardName } from './employment-condition-property-award-name';

/**
 * The [Employment Condition](https://developers.intellihr.io/docs/v1/) this job is being paid under. **Deprecated** Please use the job-level employmentCondition field instead.
 * @export
 * @interface JobRemunerationScheduleEmploymentCondition
 */
export interface JobRemunerationScheduleEmploymentCondition {
    /**
     * The identifier string for the [Employment Condition](https://developers.intellihr.io/docs/v1/) of this Remuneration Schedule.
     * @type {string}
     * @memberof JobRemunerationScheduleEmploymentCondition
     */
    'id'?: string;
    /**
     * Name given to this [Employment Condition](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof JobRemunerationScheduleEmploymentCondition
     */
    'name'?: string;
    /**
     * 
     * @type {EmploymentConditionPropertyAwardName}
     * @memberof JobRemunerationScheduleEmploymentCondition
     */
    'awardName'?: EmploymentConditionPropertyAwardName;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobRemunerationScheduleEmploymentCondition
     */
    'link'?: string;
}

