/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobEndPatchResponseDataJobPayGradePayStepOneOfAnnualSalary } from './job-end-patch-response-data-job-pay-grade-pay-step-one-of-annual-salary';
import { JobEndPatchResponseDataJobPayGradePayStepOneOfAnnualSalaryCurrency } from './job-end-patch-response-data-job-pay-grade-pay-step-one-of-annual-salary-currency';
import { JobEndPatchResponseDataJobPayGradePayStepOneOfCasualHourlyRate } from './job-end-patch-response-data-job-pay-grade-pay-step-one-of-casual-hourly-rate';
import { JobEndPatchResponseDataJobPayGradePayStepOneOfCasualHourlyRateCurrency } from './job-end-patch-response-data-job-pay-grade-pay-step-one-of-casual-hourly-rate-currency';
import { JobEndPatchResponseDataJobPayGradePayStepOneOfPermanentHourlyRate } from './job-end-patch-response-data-job-pay-grade-pay-step-one-of-permanent-hourly-rate';
import { JobEndPatchResponseDataJobPayGradePayStepOneOfPermanentHourlyRateCurrency } from './job-end-patch-response-data-job-pay-grade-pay-step-one-of-permanent-hourly-rate-currency';

/**
 * The pay step within this paygrade that applies to the employee
 * @export
 * @interface JobEndRemoveResponseDataJobPayGradePayStepOneOf
 */
export interface JobEndRemoveResponseDataJobPayGradePayStepOneOf {
    /**
     * User friendly name for this pay step.
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'name'?: string;
    /**
     * The identifier string for the Unique identifier for this pay step.
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'id'?: string;
    /**
     * 
     * @type {JobEndPatchResponseDataJobPayGradePayStepOneOfAnnualSalary}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'annualSalary'?: JobEndPatchResponseDataJobPayGradePayStepOneOfAnnualSalary;
    /**
     * 
     * @type {JobEndPatchResponseDataJobPayGradePayStepOneOfAnnualSalaryCurrency}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'annualSalaryCurrency'?: JobEndPatchResponseDataJobPayGradePayStepOneOfAnnualSalaryCurrency;
    /**
     * 
     * @type {JobEndPatchResponseDataJobPayGradePayStepOneOfPermanentHourlyRate}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'permanentHourlyRate'?: JobEndPatchResponseDataJobPayGradePayStepOneOfPermanentHourlyRate;
    /**
     * 
     * @type {JobEndPatchResponseDataJobPayGradePayStepOneOfPermanentHourlyRateCurrency}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'permanentHourlyRateCurrency'?: JobEndPatchResponseDataJobPayGradePayStepOneOfPermanentHourlyRateCurrency;
    /**
     * 
     * @type {JobEndPatchResponseDataJobPayGradePayStepOneOfCasualHourlyRate}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'casualHourlyRate'?: JobEndPatchResponseDataJobPayGradePayStepOneOfCasualHourlyRate;
    /**
     * 
     * @type {JobEndPatchResponseDataJobPayGradePayStepOneOfCasualHourlyRateCurrency}
     * @memberof JobEndRemoveResponseDataJobPayGradePayStepOneOf
     */
    'casualHourlyRateCurrency'?: JobEndPatchResponseDataJobPayGradePayStepOneOfCasualHourlyRateCurrency;
}

