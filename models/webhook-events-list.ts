/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhookEventsListDataInner } from './webhook-events-list-data-inner';
import { WebhookEventsListLinks } from './webhook-events-list-links';
import { WebhookEventsListMeta } from './webhook-events-list-meta';

/**
 * List Webhook Events.
 * @export
 * @interface WebhookEventsList
 */
export interface WebhookEventsList {
    /**
     * 
     * @type {Array<WebhookEventsListDataInner>}
     * @memberof WebhookEventsList
     */
    'data'?: Array<WebhookEventsListDataInner>;
    /**
     * 
     * @type {WebhookEventsListMeta}
     * @memberof WebhookEventsList
     */
    'meta'?: WebhookEventsListMeta;
    /**
     * 
     * @type {WebhookEventsListLinks}
     * @memberof WebhookEventsList
     */
    'links'?: WebhookEventsListLinks;
}

