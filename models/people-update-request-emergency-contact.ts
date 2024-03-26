/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleCreateRequestEmergencyContactEmail } from './people-create-request-emergency-contact-email';
import { PeopleCreateRequestEmergencyContactName } from './people-create-request-emergency-contact-name';
import { PeopleCreateRequestEmergencyContactPhone } from './people-create-request-emergency-contact-phone';
import { PeopleCreateRequestEmergencyContactRelationship } from './people-create-request-emergency-contact-relationship';

/**
 * The details for this [Person\'s](https://developers.intellihr.io/docs/v1/) emergency contact.
 * @export
 * @interface PeopleUpdateRequestEmergencyContact
 */
export interface PeopleUpdateRequestEmergencyContact {
    /**
     * 
     * @type {PeopleCreateRequestEmergencyContactName}
     * @memberof PeopleUpdateRequestEmergencyContact
     */
    'name'?: PeopleCreateRequestEmergencyContactName;
    /**
     * 
     * @type {PeopleCreateRequestEmergencyContactRelationship}
     * @memberof PeopleUpdateRequestEmergencyContact
     */
    'relationship'?: PeopleCreateRequestEmergencyContactRelationship;
    /**
     * 
     * @type {PeopleCreateRequestEmergencyContactPhone}
     * @memberof PeopleUpdateRequestEmergencyContact
     */
    'phone'?: PeopleCreateRequestEmergencyContactPhone;
    /**
     * 
     * @type {PeopleCreateRequestEmergencyContactEmail}
     * @memberof PeopleUpdateRequestEmergencyContact
     */
    'email'?: PeopleCreateRequestEmergencyContactEmail;
}

