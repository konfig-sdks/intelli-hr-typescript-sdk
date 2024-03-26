/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleCreateRequestPrimaryEmailAddressOneOf } from './people-create-request-primary-email-address-one-of';

/**
 * @type PeopleCreateRequestPrimaryEmailAddress
 * Information about this [Person\'s](https://developers.intellihr.io/docs/v1/) primary email address, or null if they have no email information.  The provided email address will be converted to lowercase. The field is also required when creating a user alongside with the person.
 * @export
 */
export type PeopleCreateRequestPrimaryEmailAddress = Null | PeopleCreateRequestPrimaryEmailAddressOneOf;


