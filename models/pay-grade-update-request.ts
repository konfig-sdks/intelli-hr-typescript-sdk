/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayGradeUpdateRequestEmploymentCondition } from './pay-grade-update-request-employment-condition';
import { PayGradeUpdateRequestPayStepsInner } from './pay-grade-update-request-pay-steps-inner';

/**
 * 
 * @export
 * @interface PayGradeUpdateRequest
 */
export interface PayGradeUpdateRequest {
    /**
     * Description of the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'description'?: string;
    /**
     * The date this [Pay Grade](https://developers.intellihr.io/docs/v1/) Update is effective from within the organisation. Note that this doesn\'t affect the availableFrom date of the overall Pay Grade itself.  Not providing an effectiveFrom will apply the changes from the beggining of time.. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'effectiveFrom': string;
    /**
     * The date this [Pay Grade](https://developers.intellihr.io/docs/v1/) Update is effective to within the organisation.. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'effectiveTo'?: string;
    /**
     * Toggle the availability of the [Pay Grade](https://developers.intellihr.io/docs/v1/) on or off within the organisation.
     * @type {boolean}
     * @memberof PayGradeUpdateRequest
     */
    'isEnabled'?: boolean;
    /**
     * The name assigned to this [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'name'?: string;
    /**
     * Administrative, short code associated to the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'code'?: string;
    /**
     * 
     * @type {PayGradeUpdateRequestEmploymentCondition}
     * @memberof PayGradeUpdateRequest
     */
    'employmentCondition'?: PayGradeUpdateRequestEmploymentCondition;
    /**
     * The type of this [Pay Grade](https://developers.intellihr.io/docs/v1/). Enum: `FIXED` or `STEP`.
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'payGradeType'?: string;
    /**
     * Allow this [Pay Grade](https://developers.intellihr.io/docs/v1/) value to be overwritten.
     * @type {boolean}
     * @memberof PayGradeUpdateRequest
     */
    'isOverridable'?: boolean;
    /**
     * Stores the hourly rate for permanent [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.
     * @type {number}
     * @memberof PayGradeUpdateRequest
     */
    'permanentHourlyRate'?: number;
    /**
     * The currency that the permanentHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'permanentHourlyRateCurrency'?: string;
    /**
     * Stores the hourly rate for casual [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.
     * @type {number}
     * @memberof PayGradeUpdateRequest
     */
    'casualHourlyRate'?: number;
    /**
     * The currency that the casualHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'casualHourlyRateCurrency'?: string;
    /**
     * Stores the annual salary for [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.
     * @type {number}
     * @memberof PayGradeUpdateRequest
     */
    'annualSalary'?: number;
    /**
     * The currency that the annualSalary is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof PayGradeUpdateRequest
     */
    'annualSalaryCurrency'?: string;
    /**
     * An array of Paygrade Step Rates. This will replace the current Pay Steps with a new list.  Providing an `id` for an existing Pay Step will update that record instead of createing a new Pay Step.
     * @type {Array<PayGradeUpdateRequestPayStepsInner>}
     * @memberof PayGradeUpdateRequest
     */
    'paySteps'?: Array<PayGradeUpdateRequestPayStepsInner>;
}

