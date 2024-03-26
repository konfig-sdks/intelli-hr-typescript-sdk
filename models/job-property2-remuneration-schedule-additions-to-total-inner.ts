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
 * @interface JobProperty2RemunerationScheduleAdditionsToTotalInner
 */
export interface JobProperty2RemunerationScheduleAdditionsToTotalInner {
    /**
     * The name of this Total Addition.
     * @type {string}
     * @memberof JobProperty2RemunerationScheduleAdditionsToTotalInner
     */
    'name'?: string;
    /**
     * How this total addition is calculated and applied to the base amount, multipleOfBase is multiplied by baseAnnualSalary and then added to the total while fixed amount is added directly to the total. Enum: `MultipleOfBase`, `FixedAmount`.
     * @type {string}
     * @memberof JobProperty2RemunerationScheduleAdditionsToTotalInner
     */
    'type'?: string;
    /**
     * For multipleOfBase this is the multiplier (e.g. 9 = 9%) while for fixed amount this is the amount to directly add to the total.
     * @type {number}
     * @memberof JobProperty2RemunerationScheduleAdditionsToTotalInner
     */
    'value'?: number;
    /**
     * The currency used for this Addition. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof JobProperty2RemunerationScheduleAdditionsToTotalInner
     */
    'currency'?: string;
}

