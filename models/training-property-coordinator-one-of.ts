/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TrainingPropertyPersonEmployeeNumber } from './training-property-person-employee-number';

/**
 * 
 * @export
 * @interface TrainingPropertyCoordinatorOneOf
 */
export interface TrainingPropertyCoordinatorOneOf {
    /**
     * The identifier string for the [Coordinator](https://developers.intellihr.io/docs/v1/) of the [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingPropertyCoordinatorOneOf
     */
    'id'?: string;
    /**
     * The name of the [Person](https://developers.intellihr.io/docs/v1/) who coordinated the [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingPropertyCoordinatorOneOf
     */
    'displayName'?: string;
    /**
     * 
     * @type {TrainingPropertyPersonEmployeeNumber}
     * @memberof TrainingPropertyCoordinatorOneOf
     */
    'employeeNumber'?: TrainingPropertyPersonEmployeeNumber;
    /**
     * An autogenerated number that uniquely identifies a [Person](https://developers.intellihr.io/docs/v1/) in intelliHR. It may be hidden in the system\'s UI depending upon your tenant\'s configuration.
     * @type {number}
     * @memberof TrainingPropertyCoordinatorOneOf
     */
    'autoIncrementIntellihrId'?: number;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof TrainingPropertyCoordinatorOneOf
     */
    'link'?: string;
}

