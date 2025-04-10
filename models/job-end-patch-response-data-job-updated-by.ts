/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobEndPatchResponseDataJobUpdatedByOneOf } from './job-end-patch-response-data-job-updated-by-one-of';

/**
 * @type JobEndPatchResponseDataJobUpdatedBy
 * The last [User](https://developers.intellihr.io/docs/v1/) who updated this job. May be null for old [Jobs](https://developers.intellihr.io/docs/v1/). This field will remain null if the last update was performed by the API.
 * @export
 */
export type JobEndPatchResponseDataJobUpdatedBy = JobEndPatchResponseDataJobUpdatedByOneOf | Null;


