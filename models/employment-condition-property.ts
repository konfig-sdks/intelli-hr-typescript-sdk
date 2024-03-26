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
 * 
 * @export
 * @interface EmploymentConditionProperty
 */
export interface EmploymentConditionProperty {
    /**
     * The identifier string for the [Employment Condition](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof EmploymentConditionProperty
     */
    'id'?: string;
    /**
     * Name given to this [Employment Condition](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof EmploymentConditionProperty
     */
    'name'?: string;
    /**
     * 
     * @type {EmploymentConditionPropertyAwardName}
     * @memberof EmploymentConditionProperty
     */
    'awardName'?: EmploymentConditionPropertyAwardName;
    /**
     * Specifies whether users can select this [Employment Condition](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof EmploymentConditionProperty
     */
    'isEnabled'?: boolean;
}

