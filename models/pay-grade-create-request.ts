/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayGradeCreateRequestEmploymentCondition } from './pay-grade-create-request-employment-condition';
import { PayGradeCreateRequestPayStepsInner } from './pay-grade-create-request-pay-steps-inner';

/**
 * 
 * @export
 * @interface PayGradeCreateRequest
 */
export interface PayGradeCreateRequest {
    /**
     * Description of the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'description'?: string;
    /**
     * The name assigned to this [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'name': string;
    /**
     * Administrative, short code associated to the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'code'?: string;
    /**
     * 
     * @type {PayGradeCreateRequestEmploymentCondition}
     * @memberof PayGradeCreateRequest
     */
    'employmentCondition'?: PayGradeCreateRequestEmploymentCondition;
    /**
     * The type of this [Pay Grade](https://developers.intellihr.io/docs/v1/). Enum: `FIXED` or `STEP`.
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'payGradeType'?: string;
    /**
     * Allow this [Pay Grade](https://developers.intellihr.io/docs/v1/) value to be overwritten.
     * @type {boolean}
     * @memberof PayGradeCreateRequest
     */
    'isOverridable'?: boolean;
    /**
     * Stores the hourly rate for permanent [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.
     * @type {number}
     * @memberof PayGradeCreateRequest
     */
    'permanentHourlyRate'?: number;
    /**
     * The currency that the permanentHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'permanentHourlyRateCurrency'?: string;
    /**
     * Stores the hourly rate for casual [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.
     * @type {number}
     * @memberof PayGradeCreateRequest
     */
    'casualHourlyRate'?: number;
    /**
     * The currency that the casualHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'casualHourlyRateCurrency'?: string;
    /**
     * Stores the annual salary for [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.
     * @type {number}
     * @memberof PayGradeCreateRequest
     */
    'annualSalary'?: number;
    /**
     * The currency that the annualSalary is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeCreateRequest
     */
    'annualSalaryCurrency'?: string;
    /**
     * An array of Paygrade Step Rates. This array is to be used when payGradeType of \"Step\" is used.
     * @type {Array<PayGradeCreateRequestPayStepsInner>}
     * @memberof PayGradeCreateRequest
     */
    'paySteps'?: Array<PayGradeCreateRequestPayStepsInner>;
}

