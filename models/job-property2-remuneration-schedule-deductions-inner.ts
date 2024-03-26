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
 * @interface JobProperty2RemunerationScheduleDeductionsInner
 */
export interface JobProperty2RemunerationScheduleDeductionsInner {
    /**
     * The name of this Deduction.
     * @type {string}
     * @memberof JobProperty2RemunerationScheduleDeductionsInner
     */
    'name'?: string;
    /**
     * How this deduction is calculated and applied to the base amount, multipleOfBase is multiplied by baseAnnualSalary and then deducted from the total while fixed amount is deducted directly from the total. Enum: `MultipleOfBase`, `FixedAmount`.
     * @type {string}
     * @memberof JobProperty2RemunerationScheduleDeductionsInner
     */
    'type'?: string;
    /**
     * For multipleOfBase this is the multiplier while for fixed amount this is the amount to directly deduct from the total.
     * @type {number}
     * @memberof JobProperty2RemunerationScheduleDeductionsInner
     */
    'value'?: number;
    /**
     * The currency used for this Deduction. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof JobProperty2RemunerationScheduleDeductionsInner
     */
    'currency'?: string;
}

