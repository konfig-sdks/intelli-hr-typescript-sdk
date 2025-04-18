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
 * @interface JobTimelineEventRemunerationSchedulesInnerOneOfBreakdownsInner
 */
export interface JobTimelineEventRemunerationSchedulesInnerOneOfBreakdownsInner {
    /**
     * The name of this Addition.
     * @type {string}
     * @memberof JobTimelineEventRemunerationSchedulesInnerOneOfBreakdownsInner
     */
    'name'?: string;
    /**
     * How this addition is recorded, it is not used to compute the total package due unlike other remuneration components. Enum: `MultipleOfBase`, `FixedAmount`.
     * @type {string}
     * @memberof JobTimelineEventRemunerationSchedulesInnerOneOfBreakdownsInner
     */
    'type'?: string;
    /**
     * For multipleOfBase this is the multiplier (e.g. 9 = 9%) while for fixed amount this is the amount to directly add to the total.
     * @type {number}
     * @memberof JobTimelineEventRemunerationSchedulesInnerOneOfBreakdownsInner
     */
    'value'?: number;
    /**
     * The currency used for this Addition. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof JobTimelineEventRemunerationSchedulesInnerOneOfBreakdownsInner
     */
    'currency'?: string;
}

