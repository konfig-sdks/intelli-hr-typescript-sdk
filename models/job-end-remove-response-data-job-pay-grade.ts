/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobEndRemoveResponseDataJobPayGradePayStep } from './job-end-remove-response-data-job-pay-grade-pay-step';

/**
 * The [Job\'s](https://developers.intellihr.io/docs/v1/) current [Pay Grade](https://developers.intellihr.io/docs/v1/) in the system.
 * @export
 * @interface JobEndRemoveResponseDataJobPayGrade
 */
export interface JobEndRemoveResponseDataJobPayGrade {
    /**
     * The identifier string for the [Pay Grade](https://developers.intellihr.io/docs/v1/) of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobPayGrade
     */
    'id'?: string;
    /**
     * User friendly name given to the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobPayGrade
     */
    'name'?: string;
    /**
     * Administrative, short code associated to the [Pay Grade](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobPayGrade
     */
    'code'?: string;
    /**
     * 
     * @type {JobEndRemoveResponseDataJobPayGradePayStep}
     * @memberof JobEndRemoveResponseDataJobPayGrade
     */
    'payStep'?: JobEndRemoveResponseDataJobPayGradePayStep;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobEndRemoveResponseDataJobPayGrade
     */
    'link'?: string;
}

