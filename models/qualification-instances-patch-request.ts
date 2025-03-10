/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QualificationInstancesCreateRequestIssuingOrganisation } from './qualification-instances-create-request-issuing-organisation';
import { QualificationInstancesCreateRequestNotes } from './qualification-instances-create-request-notes';
import { QualificationInstancesCreateRequestRegistrationNumber } from './qualification-instances-create-request-registration-number';
import { RFC3339DatetimeProperty10 } from './rfc3339-datetime-property10';
import { RFC3339DatetimeProperty11 } from './rfc3339-datetime-property11';
import { RFC3339DatetimeProperty9 } from './rfc3339-datetime-property9';

/**
 * 
 * @export
 * @interface QualificationInstancesPatchRequest
 */
export interface QualificationInstancesPatchRequest {
    /**
     * The status of this [Qualification Instance](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof QualificationInstancesPatchRequest
     */
    'status'?: QualificationInstancesPatchRequestStatusEnum;
    /**
     * 
     * @type {QualificationInstancesCreateRequestIssuingOrganisation}
     * @memberof QualificationInstancesPatchRequest
     */
    'issuingOrganisation'?: QualificationInstancesCreateRequestIssuingOrganisation;
    /**
     * 
     * @type {QualificationInstancesCreateRequestRegistrationNumber}
     * @memberof QualificationInstancesPatchRequest
     */
    'registrationNumber'?: QualificationInstancesCreateRequestRegistrationNumber;
    /**
     * 
     * @type {RFC3339DatetimeProperty9}
     * @memberof QualificationInstancesPatchRequest
     */
    'issueDate'?: RFC3339DatetimeProperty9;
    /**
     * 
     * @type {RFC3339DatetimeProperty10}
     * @memberof QualificationInstancesPatchRequest
     */
    'expiryDate'?: RFC3339DatetimeProperty10;
    /**
     * 
     * @type {RFC3339DatetimeProperty11}
     * @memberof QualificationInstancesPatchRequest
     */
    'expiryNotificationQueuedAt'?: RFC3339DatetimeProperty11;
    /**
     * 
     * @type {QualificationInstancesCreateRequestNotes}
     * @memberof QualificationInstancesPatchRequest
     */
    'notes'?: QualificationInstancesCreateRequestNotes;
}

type QualificationInstancesPatchRequestStatusEnum = 'DRAFT' | 'AWAITING_APPROVAL' | 'DECLINED' | 'APPROVED' | 'REVOKED' | 'EXPIRED' | 'EXPIRING_SOON' | 'CURRENT' | 'FUTURE' | 'RENEWING' | 'NON_COMPLIANT'


