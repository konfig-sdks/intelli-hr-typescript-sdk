/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInnerJob } from './people-create-request-email-addresses-inner-custom-fields-value-value-any-of-inner-job';
import { PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInnerPerson } from './people-create-request-email-addresses-inner-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInner
 */
export interface PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInner
     */
    'person'?: PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInnerJob}
     * @memberof PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInner
     */
    'job'?: PeopleCreateRequestEmailAddressesInnerCustomFieldsValueValueAnyOfInnerJob;
}

