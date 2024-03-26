/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExtendedLeavePropertyPersonEmployeeNumber } from './extended-leave-property-person-employee-number';

/**
 * The [Person](https://developers.intellihr.io/docs/v1/) to whom this [Job](https://developers.intellihr.io/docs/v1/) belongs.
 * @export
 * @interface JobPerson
 */
export interface JobPerson {
    /**
     * The identifier string for the [Person](https://developers.intellihr.io/docs/v1/) to whom this [Job](https://developers.intellihr.io/docs/v1/) belongs.
     * @type {string}
     * @memberof JobPerson
     */
    'id'?: string;
    /**
     * Name to display throughout the system for this [Person](https://developers.intellihr.io/docs/v1/). Generally follows the pattern preferredName (firstName) lastName, but can be configured on a tenant-wide basis to be a different format.
     * @type {string}
     * @memberof JobPerson
     */
    'displayName'?: string;
    /**
     * 
     * @type {ExtendedLeavePropertyPersonEmployeeNumber}
     * @memberof JobPerson
     */
    'employeeNumber'?: ExtendedLeavePropertyPersonEmployeeNumber;
    /**
     * An autogenerated number that uniquely identifies a [Person](https://developers.intellihr.io/docs/v1/) in intelliHR. It may be hidden in the system\'s UI depending upon your tenant\'s configuration.
     * @type {number}
     * @memberof JobPerson
     */
    'autoIncrementIntellihrId'?: number;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobPerson
     */
    'link'?: string;
}

