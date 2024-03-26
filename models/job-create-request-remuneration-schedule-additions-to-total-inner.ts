/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobCreateRequestRemunerationScheduleAdditionsToTotalInnerDefaultRemunerationComponent } from './job-create-request-remuneration-schedule-additions-to-total-inner-default-remuneration-component';

/**
 * 
 * @export
 * @interface JobCreateRequestRemunerationScheduleAdditionsToTotalInner
 */
export interface JobCreateRequestRemunerationScheduleAdditionsToTotalInner {
    /**
     * The name of this Addition.
     * @type {string}
     * @memberof JobCreateRequestRemunerationScheduleAdditionsToTotalInner
     */
    'name': string;
    /**
     * How this addition is calculated and applied to the base amount, MultipleOfBase is multiplied by baseAnnualSalary and then added to the total while FixedAmount is added directly to the total. Enum: `MultipleOfBase`, `FixedAmount`.
     * @type {string}
     * @memberof JobCreateRequestRemunerationScheduleAdditionsToTotalInner
     */
    'type': string;
    /**
     * For MultipleOfBase this is the multiplier (e.g. 9 = 9%) while for fixed amount this is the amount to directly add to the total.  Any number exceeding 8 decimal places will be rounded up.
     * @type {string}
     * @memberof JobCreateRequestRemunerationScheduleAdditionsToTotalInner
     */
    'value': string;
    /**
     * The currency used for this Addition. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof JobCreateRequestRemunerationScheduleAdditionsToTotalInner
     */
    'currency'?: string;
    /**
     * 
     * @type {JobCreateRequestRemunerationScheduleAdditionsToTotalInnerDefaultRemunerationComponent}
     * @memberof JobCreateRequestRemunerationScheduleAdditionsToTotalInner
     */
    'defaultRemunerationComponent': JobCreateRequestRemunerationScheduleAdditionsToTotalInnerDefaultRemunerationComponent;
}

