/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInnerJob } from './people-create-request-addresses-inner-custom-fields-value-value-any-of-inner-job';
import { PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInnerPerson } from './people-create-request-addresses-inner-custom-fields-value-value-any-of-inner-person';

/**
 * 
 * @export
 * @interface PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInner
 */
export interface PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInner {
    /**
     * 
     * @type {PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInnerPerson}
     * @memberof PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInner
     */
    'person'?: PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInnerPerson;
    /**
     * 
     * @type {PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInnerJob}
     * @memberof PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInner
     */
    'job'?: PeopleCreateRequestAddressesInnerCustomFieldsValueValueAnyOfInnerJob;
}

