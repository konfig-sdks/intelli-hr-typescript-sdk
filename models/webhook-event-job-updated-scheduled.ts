/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookEventBasic } from './webhook-event-basic';
import { WebhookEventEffectiveDatesUpdate } from './webhook-event-effective-dates-update';
import { WebhookEventEffectiveDatesUpdateUpdateEndDate } from './webhook-event-effective-dates-update-update-end-date';
import { WebhookEventEffectiveDatesUpdateUpdateStartDate } from './webhook-event-effective-dates-update-update-start-date';
import { WebhookEventJobUpdatedScheduledAllOf } from './webhook-event-job-updated-scheduled-all-of';
import { WebhookEventUpdateAttributes } from './webhook-event-update-attributes';

/**
 * @type WebhookEventJobUpdatedScheduled
 * @export
 */
export type WebhookEventJobUpdatedScheduled = WebhookEventBasic & WebhookEventEffectiveDatesUpdate & WebhookEventJobUpdatedScheduledAllOf & WebhookEventUpdateAttributes;


