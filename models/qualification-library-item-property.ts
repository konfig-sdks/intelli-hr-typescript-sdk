/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QualificationLibraryItemPropertyExpiryPeriods } from './qualification-library-item-property-expiry-periods';
import { QualificationLibraryItemPropertyQualificationType } from './qualification-library-item-property-qualification-type';

/**
 * 
 * @export
 * @interface QualificationLibraryItemProperty
 */
export interface QualificationLibraryItemProperty {
    /**
     * The identifier string for the [Qualification Library Item](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof QualificationLibraryItemProperty
     */
    'id'?: string;
    /**
     * The name of this [Qualification Library Item](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof QualificationLibraryItemProperty
     */
    'name'?: string;
    /**
     * 
     * @type {QualificationLibraryItemPropertyQualificationType}
     * @memberof QualificationLibraryItemProperty
     */
    'qualificationType'?: QualificationLibraryItemPropertyQualificationType;
    /**
     * The expiry type for this library item
     * @type {string}
     * @memberof QualificationLibraryItemProperty
     */
    'qualificationExpiryType'?: QualificationLibraryItemPropertyQualificationExpiryTypeEnum;
    /**
     * The expiry type for this library item
     * @type {string}
     * @memberof QualificationLibraryItemProperty
     */
    'qualificationRegistrationNumberVisibilityType'?: QualificationLibraryItemPropertyQualificationRegistrationNumberVisibilityTypeEnum;
    /**
     * If documents are required for this library item
     * @type {string}
     * @memberof QualificationLibraryItemProperty
     */
    'qualificationAttachmentRequirementType'?: QualificationLibraryItemPropertyQualificationAttachmentRequirementTypeEnum;
    /**
     * Period in days, that there is a warning before the expiry of the qualification. If qualificationExpiryType is set to EXPIRY_INAPPLICABLE, this value will be ignored.
     * @type {number}
     * @memberof QualificationLibraryItemProperty
     */
    'expiryWarningPeriod'?: number;
    /**
     * 
     * @type {QualificationLibraryItemPropertyExpiryPeriods}
     * @memberof QualificationLibraryItemProperty
     * @deprecated
     */
    'expiryPeriods'?: QualificationLibraryItemPropertyExpiryPeriods;
    /**
     * If this [Qualification Library Item](https://developers.intellihr.io/docs/v1/) will send expiry warning/s using the periods defined. If qualificationExpiryType is set to EXPIRY_INAPPLICABLE, this value will be ignored.
     * @type {boolean}
     * @memberof QualificationLibraryItemProperty
     */
    'sendExpiryWarning'?: boolean;
    /**
     * Number of qualification instances currently being used with this qualification library item
     * @type {number}
     * @memberof QualificationLibraryItemProperty
     */
    'qualificationInstanceUsageCount'?: number;
    /**
     * Number of job requirement groups currently being used with this qualification library item
     * @type {number}
     * @memberof QualificationLibraryItemProperty
     */
    'jobRequirementGroupUsageCount'?: number;
    /**
     * Number of job requirements currently being used with this qualification library item
     * @type {number}
     * @memberof QualificationLibraryItemProperty
     */
    'jobRequirementUsageCount'?: number;
}

type QualificationLibraryItemPropertyQualificationExpiryTypeEnum = 'EXPIRY_INAPPLICABLE' | 'EXPIRY_OPTIONAL' | 'EXPIRY_REQUIRED'
type QualificationLibraryItemPropertyQualificationRegistrationNumberVisibilityTypeEnum = 'REGISTRATION_NUMBER_INAPPLICABLE' | 'REGISTRATION_NUMBER_OPTIONAL' | 'REGISTRATION_NUMBER_REQUIRED'
type QualificationLibraryItemPropertyQualificationAttachmentRequirementTypeEnum = 'DOCUMENTS_OPTIONAL' | 'DOCUMENTS_REQUIRED'


