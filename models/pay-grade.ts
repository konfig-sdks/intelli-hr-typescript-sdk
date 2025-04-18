/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayGradeAnnualSalary } from './pay-grade-annual-salary';
import { PayGradeAnnualSalaryCurrency } from './pay-grade-annual-salary-currency';
import { PayGradeCasualHourlyRate } from './pay-grade-casual-hourly-rate';
import { PayGradeCasualHourlyRateCurrency } from './pay-grade-casual-hourly-rate-currency';
import { PayGradeChangeUser } from './pay-grade-change-user';
import { PayGradeEmploymentCondition } from './pay-grade-employment-condition';
import { PayGradePermanentHourlyRate } from './pay-grade-permanent-hourly-rate';
import { PayGradePermanentHourlyRateCurrency } from './pay-grade-permanent-hourly-rate-currency';
import { RFC3339DatetimeProperty5 } from './rfc3339-datetime-property5';
import { RFC3339DatetimeProperty6 } from './rfc3339-datetime-property6';

/**
 * PayGrade Model
 * @export
 * @interface PayGrade
 */
export interface PayGrade {
    /**
     * Description of the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGrade
     */
    'description'?: string;
    /**
     * The identifier string for the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGrade
     */
    'id'?: string;
    /**
     * Administrative, short code associated to the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGrade
     */
    'code'?: string;
    /**
     * User friendly name given to the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PayGrade
     */
    'name'?: string;
    /**
     * 
     * @type {RFC3339DatetimeProperty5}
     * @memberof PayGrade
     */
    'startDate'?: RFC3339DatetimeProperty5;
    /**
     * 
     * @type {RFC3339DatetimeProperty6}
     * @memberof PayGrade
     */
    'endDate'?: RFC3339DatetimeProperty6;
    /**
     * Specifies whether users can select this [Pay Grade](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof PayGrade
     */
    'isEnabled'?: boolean;
    /**
     * Number of [Jobs](https://developers.intellihr.io/docs/v1/) that have been assigned this [Pay Grade](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {number}
     * @memberof PayGrade
     */
    'activeJobs'?: number;
    /**
     * Allow this [Pay Grade](https://developers.intellihr.io/docs/v1/) value to be overwritten.
     * @type {boolean}
     * @memberof PayGrade
     */
    'isOverridable'?: boolean;
    /**
     * 
     * @type {PayGradePermanentHourlyRate}
     * @memberof PayGrade
     */
    'permanentHourlyRate'?: PayGradePermanentHourlyRate;
    /**
     * 
     * @type {PayGradePermanentHourlyRateCurrency}
     * @memberof PayGrade
     */
    'permanentHourlyRateCurrency'?: PayGradePermanentHourlyRateCurrency;
    /**
     * 
     * @type {PayGradeCasualHourlyRate}
     * @memberof PayGrade
     */
    'casualHourlyRate'?: PayGradeCasualHourlyRate;
    /**
     * 
     * @type {PayGradeCasualHourlyRateCurrency}
     * @memberof PayGrade
     */
    'casualHourlyRateCurrency'?: PayGradeCasualHourlyRateCurrency;
    /**
     * 
     * @type {PayGradeAnnualSalary}
     * @memberof PayGrade
     */
    'annualSalary'?: PayGradeAnnualSalary;
    /**
     * 
     * @type {PayGradeAnnualSalaryCurrency}
     * @memberof PayGrade
     */
    'annualSalaryCurrency'?: PayGradeAnnualSalaryCurrency;
    /**
     * The type of this [Pay Grade](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof PayGrade
     */
    'payGradeType'?: PayGradePayGradeTypeEnum;
    /**
     * The current and historical paysteps of this [Pay Grade](https://developers.intellihr.io/docs/v1/), if any.
     * @type {Array<any>}
     * @memberof PayGrade
     */
    'payGradeValues'?: Array<any>;
    /**
     * 
     * @type {PayGradeChangeUser}
     * @memberof PayGrade
     */
    'changeUser'?: PayGradeChangeUser;
    /**
     * 
     * @type {PayGradeEmploymentCondition}
     * @memberof PayGrade
     */
    'employmentCondition'?: PayGradeEmploymentCondition;
}

type PayGradePayGradeTypeEnum = 'FIXED' | 'STEP'


