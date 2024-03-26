/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface PayGradeCreateRequestPayStepsInner
 */
export interface PayGradeCreateRequestPayStepsInner {
    /**
     * The name assigned to this [Pay Grade](https://developers.intellihr.io/docs/v1/) Step.
     * @type {string}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'name': string;
    /**
     * Stores the hourly rate for permanent [Jobs](https://developers.intellihr.io/docs/v1/) for this Step.
     * @type {number}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'permanentHourlyRate'?: number;
    /**
     * The currency that the permanentHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'permanentHourlyRateCurrency'?: string;
    /**
     * Stores the hourly rate for casual [Jobs](https://developers.intellihr.io/docs/v1/) for this Step.
     * @type {number}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'casualHourlyRate'?: number;
    /**
     * The currency that the casualHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'casualHourlyRateCurrency'?: string;
    /**
     * Stores the annual salary for [Jobs](https://developers.intellihr.io/docs/v1/) for this Step.
     * @type {number}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'annualSalary'?: number;
    /**
     * The currency that the annualSalary is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeCreateRequestPayStepsInner
     */
    'annualSalaryCurrency'?: string;
}

