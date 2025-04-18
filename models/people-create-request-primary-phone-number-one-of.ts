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
 * @interface PeopleCreateRequestPrimaryPhoneNumberOneOf
 */
export interface PeopleCreateRequestPrimaryPhoneNumberOneOf {
    /**
     * The actual phone number. This number can be prefixed with an area code. When this happens, the system will automatically try to determine the origin country for the phone number
     * @type {string}
     * @memberof PeopleCreateRequestPrimaryPhoneNumberOneOf
     * @deprecated
     */
    'phone'?: string;
    /**
     * The actual phone number. This number can be prefixed with an area code. When this happens, the system will automatically try to determine the origin country for the phone number
     * @type {string}
     * @memberof PeopleCreateRequestPrimaryPhoneNumberOneOf
     */
    'number'?: string;
    /**
     * Denotes whether this phone is personal or a work phone number.
     * @type {boolean}
     * @memberof PeopleCreateRequestPrimaryPhoneNumberOneOf
     */
    'isPersonal'?: boolean;
}

