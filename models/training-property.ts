/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsResponse } from './custom-fields-response';
import { RFC3339DatetimeProperty13 } from './rfc3339-datetime-property13';
import { TrainingPropertyCoordinator } from './training-property-coordinator';
import { TrainingPropertyCost } from './training-property-cost';
import { TrainingPropertyHours } from './training-property-hours';
import { TrainingPropertyJob } from './training-property-job';
import { TrainingPropertyPerson } from './training-property-person';
import { TrainingPropertyProvider } from './training-property-provider';
import { TrainingPropertyStatus } from './training-property-status';
import { TrainingPropertyType } from './training-property-type';

/**
 * 
 * @export
 * @interface TrainingProperty
 */
export interface TrainingProperty {
    /**
     * The identifier string for the [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingProperty
     */
    'id'?: string;
    /**
     * User friendly name given to this [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingProperty
     */
    'name'?: string;
    /**
     * 
     * @type {TrainingPropertyStatus}
     * @memberof TrainingProperty
     */
    'status'?: TrainingPropertyStatus;
    /**
     * 
     * @type {TrainingPropertyPerson}
     * @memberof TrainingProperty
     */
    'person'?: TrainingPropertyPerson;
    /**
     * 
     * @type {TrainingPropertyJob}
     * @memberof TrainingProperty
     */
    'job'?: TrainingPropertyJob;
    /**
     * 
     * @type {TrainingPropertyCoordinator}
     * @memberof TrainingProperty
     */
    'coordinator'?: TrainingPropertyCoordinator;
    /**
     * 
     * @type {TrainingPropertyHours}
     * @memberof TrainingProperty
     */
    'hours'?: TrainingPropertyHours;
    /**
     * The currency used for this [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingProperty
     */
    'currency'?: string;
    /**
     * 
     * @type {TrainingPropertyCost}
     * @memberof TrainingProperty
     */
    'cost'?: TrainingPropertyCost;
    /**
     * 
     * @type {TrainingPropertyProvider}
     * @memberof TrainingProperty
     */
    'provider'?: TrainingPropertyProvider;
    /**
     * 
     * @type {TrainingPropertyType}
     * @memberof TrainingProperty
     */
    'type'?: TrainingPropertyType;
    /**
     * 
     * @type {RFC3339DatetimeProperty13}
     * @memberof TrainingProperty
     */
    'completionDate'?: RFC3339DatetimeProperty13;
    /**
     * When this record was created. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof TrainingProperty
     */
    'createdAt'?: string;
    /**
     * When this record was last updated. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof TrainingProperty
     */
    'updatedAt'?: string;
    /**
     * Custom Fields defined on this training with their values.
     * @type {CustomFieldsResponse}
     * @memberof TrainingProperty
     */
    'customFields'?: CustomFieldsResponse;
}

