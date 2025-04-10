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
 * @interface DataPropertyInnerMedicalConditionsInner
 */
export interface DataPropertyInnerMedicalConditionsInner {
    /**
     * The identifier string for the Person Medical Condition.
     * @type {string}
     * @memberof DataPropertyInnerMedicalConditionsInner
     */
    'id'?: string;
    /**
     * The name/description of the medical condition
     * @type {string}
     * @memberof DataPropertyInnerMedicalConditionsInner
     */
    'body'?: string;
    /**
     * If the medical condition is public or private.
     * @type {boolean}
     * @memberof DataPropertyInnerMedicalConditionsInner
     */
    'isPublic'?: boolean;
}

