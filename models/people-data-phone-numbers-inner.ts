/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsResponse } from './custom-fields-response';

/**
 * 
 * @export
 * @interface PeopleDataPhoneNumbersInner
 */
export interface PeopleDataPhoneNumbersInner {
    /**
     * The actual phone number.
     * @type {string}
     * @memberof PeopleDataPhoneNumbersInner
     */
    'number'?: string;
    /**
     * The actual phone number with the area code (if registered).
     * @type {string}
     * @memberof PeopleDataPhoneNumbersInner
     */
    'fullNumber'?: string;
    /**
     * If this is a primary phone number.
     * @type {boolean}
     * @memberof PeopleDataPhoneNumbersInner
     */
    'isPrimary'?: boolean;
    /**
     * If this is a personal phone number.
     * @type {boolean}
     * @memberof PeopleDataPhoneNumbersInner
     */
    'isPersonal'?: boolean;
    /**
     * 
     * @type {CustomFieldsResponse}
     * @memberof PeopleDataPhoneNumbersInner
     */
    'customFields'?: CustomFieldsResponse;
}

