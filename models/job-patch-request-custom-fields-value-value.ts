/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf } from './business-entities-create-request-custom-fields-value-value-any-of';
import { BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf1 } from './business-entities-create-request-custom-fields-value-value-any-of1';
import { JobPatchRequestCustomFieldsValueValueAnyOfInner } from './job-patch-request-custom-fields-value-value-any-of-inner';

/**
 * @type JobPatchRequestCustomFieldsValueValue
 * The value for this custom field. This value structure will depend upon the type of the custom field.
 * @export
 */
export type JobPatchRequestCustomFieldsValueValue = string | BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf | BusinessEntitiesCreateRequestCustomFieldsValueValueAnyOf1 | Array<JobPatchRequestCustomFieldsValueValueAnyOfInner>;


