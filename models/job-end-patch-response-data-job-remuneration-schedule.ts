/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsResponse } from './custom-fields-response';
import { JobEndPatchResponseDataJobRemunerationScheduleAdditionsInner } from './job-end-patch-response-data-job-remuneration-schedule-additions-inner';
import { JobEndPatchResponseDataJobRemunerationScheduleAdditionsToTotalInner } from './job-end-patch-response-data-job-remuneration-schedule-additions-to-total-inner';
import { JobEndPatchResponseDataJobRemunerationScheduleBreakdownsInner } from './job-end-patch-response-data-job-remuneration-schedule-breakdowns-inner';
import { JobEndPatchResponseDataJobRemunerationScheduleDeductionsInner } from './job-end-patch-response-data-job-remuneration-schedule-deductions-inner';
import { JobEndPatchResponseDataJobRemunerationScheduleEmploymentCondition } from './job-end-patch-response-data-job-remuneration-schedule-employment-condition';

/**
 * The current remuneration details for this [Job](https://developers.intellihr.io/docs/v1/), including information such as salary and hourly pay, all [Jobs](https://developers.intellihr.io/docs/v1/) have a remuneration schedule but for unpaid employees they will have a special `No Remuneration Schedule` schedule.
 * @export
 * @interface JobEndPatchResponseDataJobRemunerationSchedule
 */
export interface JobEndPatchResponseDataJobRemunerationSchedule {
    /**
     * The method in which this remuneration schedule is paid, if a person is unpaid then this will be `No Remuneration Schedule`. Enum: `Annual Salary`, `Hourly Rate`, `No Remuneration Schedule`.
     * @type {string}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'type'?: string;
    /**
     * The Base Salary paid yearly, this is an approximation if they are paid hourly. Note that if both baseAnnualSalary and baseHourlyRate are provided in a create or patch request, the baseHourlyRate will be ignored.
     * @type {number}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'baseAnnualSalary'?: number;
    /**
     * The Base Rate paid hourly, this is an approximation if they are paid annually. Note that if both baseAnnualSalary and baseHourlyRate are provided in a create or patch request, the baseHourlyRate will be ignored.
     * @type {number}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'baseHourlyRate'?: number;
    /**
     * The currency that the base and total amounts that this job is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'currency'?: string;
    /**
     * How many hours worked per payCycle.    0 (zero) signifies that the hours are variable per pay cycle
     * @type {number}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'hoursPerCycle'?: number;
    /**
     * The cycle that the job is paid on. Enum: `Weekly`, `Fortnightly`, `Monthly`, `Bi-Monthly`.
     * @type {string}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'payCycle'?: string;
    /**
     * The total package paid yearly including additions and deductions. This amount is calculated by adding the Base Annual Salary and additions minus the deductions.
     * @type {number}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'annualPackage'?: number;
    /**
     * The total package paid hourly including additions and deductions. This amount is calculated by dividing the Annual Package by the total number of hours per annum.
     * @type {number}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'hourlyPackage'?: number;
    /**
     * If any conversion had to be performed between addition and deduction currencies when calculating the annual package.
     * @type {boolean}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'currencyConversionOccurred'?: boolean;
    /**
     * 
     * @type {JobEndPatchResponseDataJobRemunerationScheduleEmploymentCondition}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     * @deprecated
     */
    'employmentCondition'?: JobEndPatchResponseDataJobRemunerationScheduleEmploymentCondition;
    /**
     * An array of Additions for this Remuneration Schedule.
     * @type {Array<JobEndPatchResponseDataJobRemunerationScheduleAdditionsInner>}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'additions'?: Array<JobEndPatchResponseDataJobRemunerationScheduleAdditionsInner>;
    /**
     * An array of Deductions for this Remuneration Schedule. Note that this deductions value has been deprecated, you should now use `breakdowns`
     * @type {Array<JobEndPatchResponseDataJobRemunerationScheduleDeductionsInner>}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     * @deprecated
     */
    'deductions'?: Array<JobEndPatchResponseDataJobRemunerationScheduleDeductionsInner>;
    /**
     * An array of Additions applied to the package after all other components for this Remuneration Schedule.
     * @type {Array<JobEndPatchResponseDataJobRemunerationScheduleAdditionsToTotalInner>}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'additionsToTotal'?: Array<JobEndPatchResponseDataJobRemunerationScheduleAdditionsToTotalInner>;
    /**
     * An array of Breakdowns for this Remuneration Schedule. Breakdowns will not be used to calculate the total package.
     * @type {Array<JobEndPatchResponseDataJobRemunerationScheduleBreakdownsInner>}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'breakdowns'?: Array<JobEndPatchResponseDataJobRemunerationScheduleBreakdownsInner>;
    /**
     * The custom field values for this Remuneration Schedule
     * @type {CustomFieldsResponse}
     * @memberof JobEndPatchResponseDataJobRemunerationSchedule
     */
    'customFields'?: CustomFieldsResponse;
}

