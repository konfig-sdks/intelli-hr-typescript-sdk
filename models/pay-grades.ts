/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PayGradeProperty } from './pay-grade-property';
import { PayGradesMeta } from './pay-grades-meta';

/**
 * 
 * @export
 * @interface PayGrades
 */
export interface PayGrades {
    /**
     * 
     * @type {PayGradeProperty}
     * @memberof PayGrades
     */
    'data'?: PayGradeProperty;
    /**
     * 
     * @type {PayGradesMeta}
     * @memberof PayGrades
     */
    'meta'?: PayGradesMeta;
}

