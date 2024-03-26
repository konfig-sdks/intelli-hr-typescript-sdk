/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FormPropertyAnswersOneOfInnerLabel } from './form-property-answers-one-of-inner-label';
import { FormPropertyAnswersOneOfInnerValue } from './form-property-answers-one-of-inner-value';

/**
 * 
 * @export
 * @interface FormPropertyAnswersOneOfInner
 */
export interface FormPropertyAnswersOneOfInner {
    /**
     * The identifier string for the field item relating to this answer.
     * @type {string}
     * @memberof FormPropertyAnswersOneOfInner
     */
    'fieldId'?: string;
    /**
     * The question label relating to this field on the [Form](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof FormPropertyAnswersOneOfInner
     */
    'question'?: string;
    /**
     * 
     * @type {FormPropertyAnswersOneOfInnerValue}
     * @memberof FormPropertyAnswersOneOfInner
     */
    'value'?: FormPropertyAnswersOneOfInnerValue;
    /**
     * 
     * @type {FormPropertyAnswersOneOfInnerLabel}
     * @memberof FormPropertyAnswersOneOfInner
     */
    'label'?: FormPropertyAnswersOneOfInnerLabel;
}

