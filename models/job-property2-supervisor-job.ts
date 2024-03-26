/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobProperty2SupervisorJobOneOf } from './job-property2-supervisor-job-one-of';
import { JobProperty2SupervisorJobOneOfPositionTitle } from './job-property2-supervisor-job-one-of-position-title';

/**
 * @type JobProperty2SupervisorJob
 * The [Job](https://developers.intellihr.io/docs/v1/) information for the supervisor of this [Job](https://developers.intellihr.io/docs/v1/) or null if they have no supervisor.
 * @export
 */
export type JobProperty2SupervisorJob = JobProperty2SupervisorJobOneOf | Null;


