/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ExtendedLeavePropertyPersonEmployeeNumber } from './extended-leave-property-person-employee-number';
import { PeopleCreateRequestDateOfBirth } from './people-create-request-date-of-birth';
import { PeopleCreateRequestFirstName } from './people-create-request-first-name';
import { PeopleCreateRequestMiddleName } from './people-create-request-middle-name';
import { PeopleCreateRequestPreferredName } from './people-create-request-preferred-name';
import { PeopleCreateRequestTitle } from './people-create-request-title';
import { PeopleCreateRequestWorkRightExpiryDate } from './people-create-request-work-right-expiry-date';
import { PeopleUpdateRequestAddressesInner } from './people-update-request-addresses-inner';
import { PeopleUpdateRequestCustomFieldsValue } from './people-update-request-custom-fields-value';
import { PeopleUpdateRequestEmailAddressesInner } from './people-update-request-email-addresses-inner';
import { PeopleUpdateRequestEmergencyContact } from './people-update-request-emergency-contact';
import { PeopleUpdateRequestMedicalConditionsInner } from './people-update-request-medical-conditions-inner';
import { PeopleUpdateRequestPhoneNumbersInner } from './people-update-request-phone-numbers-inner';
import { PeopleUpdateRequestWorkRight } from './people-update-request-work-right';

/**
 * 
 * @export
 * @interface PeopleUpdateRequest
 */
export interface PeopleUpdateRequest {
    /**
     * 
     * @type {PeopleCreateRequestTitle}
     * @memberof PeopleUpdateRequest
     */
    'title'?: PeopleCreateRequestTitle;
    /**
     * 
     * @type {PeopleCreateRequestFirstName}
     * @memberof PeopleUpdateRequest
     */
    'firstName'?: PeopleCreateRequestFirstName;
    /**
     * 
     * @type {PeopleCreateRequestMiddleName}
     * @memberof PeopleUpdateRequest
     */
    'middleName'?: PeopleCreateRequestMiddleName;
    /**
     * The [Person\'s](https://developers.intellihr.io/docs/v1/) Last Name.
     * @type {string}
     * @memberof PeopleUpdateRequest
     */
    'lastName'?: string;
    /**
     * 
     * @type {PeopleCreateRequestPreferredName}
     * @memberof PeopleUpdateRequest
     */
    'preferredName'?: PeopleCreateRequestPreferredName;
    /**
     * 
     * @type {PeopleCreateRequestDateOfBirth}
     * @memberof PeopleUpdateRequest
     */
    'dateOfBirth'?: PeopleCreateRequestDateOfBirth;
    /**
     * Human readable string for the [Person\'s](https://developers.intellihr.io/docs/v1/) gender, e.g. `Male`. Searching is done case-insensitively and \'starts-with\' e.g. passing `male` will match with a [Gender](https://developers.intellihr.io/docs/v1/) called \"Male\" as will \"m\" or \"M\". If multiple [Genders](https://developers.intellihr.io/docs/v1/) match the first will be chosen. The gender options available are: `Female`, `Male`, `Non-binary`, `Other`, `Undisclosed`.
     * @type {string}
     * @memberof PeopleUpdateRequest
     */
    'gender'?: string;
    /**
     * 
     * @type {ExtendedLeavePropertyPersonEmployeeNumber}
     * @memberof PeopleUpdateRequest
     */
    'employeeNumber'?: ExtendedLeavePropertyPersonEmployeeNumber;
    /**
     * 
     * @type {PeopleUpdateRequestEmergencyContact}
     * @memberof PeopleUpdateRequest
     */
    'emergencyContact'?: PeopleUpdateRequestEmergencyContact;
    /**
     * Information about this [Person\'s](https://developers.intellihr.io/docs/v1/) email addresses. This will replace all of their current emails. The provided email addresses will be converted to lowercase. Note that a [Person](https://developers.intellihr.io/docs/v1/) must have at least one primary email address.
     * @type {Array<PeopleUpdateRequestEmailAddressesInner>}
     * @memberof PeopleUpdateRequest
     */
    'emailAddresses'?: Array<PeopleUpdateRequestEmailAddressesInner>;
    /**
     * Information about this [Person\'s](https://developers.intellihr.io/docs/v1/) phone numbers. This will replace all of their current phone numbers. Note that a [Person](https://developers.intellihr.io/docs/v1/) must have at least one primary phone number.
     * @type {Array<PeopleUpdateRequestPhoneNumbersInner>}
     * @memberof PeopleUpdateRequest
     */
    'phoneNumbers'?: Array<PeopleUpdateRequestPhoneNumbersInner>;
    /**
     * Information about this [Person\'s](https://developers.intellihr.io/docs/v1/) addresses. This will replace all of their current addresses.
     * @type {Array<PeopleUpdateRequestAddressesInner>}
     * @memberof PeopleUpdateRequest
     */
    'addresses'?: Array<PeopleUpdateRequestAddressesInner>;
    /**
     * The custom field values for this [Person](https://developers.intellihr.io/docs/v1/)
     * @type {{ [key: string]: PeopleUpdateRequestCustomFieldsValue; }}
     * @memberof PeopleUpdateRequest
     */
    'customFields'?: { [key: string]: PeopleUpdateRequestCustomFieldsValue; };
    /**
     * The medical conditions that this person has
     * @type {Array<PeopleUpdateRequestMedicalConditionsInner>}
     * @memberof PeopleUpdateRequest
     */
    'medicalConditions'?: Array<PeopleUpdateRequestMedicalConditionsInner>;
    /**
     * 
     * @type {PeopleUpdateRequestWorkRight}
     * @memberof PeopleUpdateRequest
     */
    'workRight'?: PeopleUpdateRequestWorkRight;
    /**
     * 
     * @type {PeopleCreateRequestWorkRightExpiryDate}
     * @memberof PeopleUpdateRequest
     */
    'workRightExpiryDate'?: PeopleCreateRequestWorkRightExpiryDate;
}

