/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleUpdateRequestEmailAddressesInnerCustomFieldsValue } from './people-update-request-email-addresses-inner-custom-fields-value';

/**
 * 
 * @export
 * @interface PeopleUpdateRequestEmailAddressesInner
 */
export interface PeopleUpdateRequestEmailAddressesInner {
    /**
     * The email address associated with this person. This will be automatically converted to lowercase.
     * @type {string}
     * @memberof PeopleUpdateRequestEmailAddressesInner
     */
    'email'?: string;
    /**
     * Denotes whether this email is personal or a work email.
     * @type {boolean}
     * @memberof PeopleUpdateRequestEmailAddressesInner
     */
    'isPersonal'?: boolean;
    /**
     * Denotes whether this email is the primary contact email.
     * @type {boolean}
     * @memberof PeopleUpdateRequestEmailAddressesInner
     */
    'isPrimary'?: boolean;
    /**
     * The custom field values for this email address
     * @type {{ [key: string]: PeopleUpdateRequestEmailAddressesInnerCustomFieldsValue; }}
     * @memberof PeopleUpdateRequestEmailAddressesInner
     */
    'customFields'?: { [key: string]: PeopleUpdateRequestEmailAddressesInnerCustomFieldsValue; };
}

