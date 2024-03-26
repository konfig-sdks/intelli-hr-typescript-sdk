/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobEndPatchResponseDataJobRecruitmentCost } from './job-end-patch-response-data-job-recruitment-cost';
import { JobProperty3RecruitmentSource } from './job-property3-recruitment-source';

/**
 * The recruitment details stored for this [Job](https://developers.intellihr.io/docs/v1/).
 * @export
 * @interface JobProperty3Recruitment
 */
export interface JobProperty3Recruitment {
    /**
     * 
     * @type {JobEndPatchResponseDataJobRecruitmentCost}
     * @memberof JobProperty3Recruitment
     */
    'cost'?: JobEndPatchResponseDataJobRecruitmentCost;
    /**
     * The currency used to recruit this [Job](https://developers.intellihr.io/docs/v1/). An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).
     * @type {string}
     * @memberof JobProperty3Recruitment
     */
    'currency'?: string;
    /**
     * 
     * @type {JobProperty3RecruitmentSource}
     * @memberof JobProperty3Recruitment
     */
    'source'?: JobProperty3RecruitmentSource;
}

