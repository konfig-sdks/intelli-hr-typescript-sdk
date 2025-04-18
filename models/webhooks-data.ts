/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhooksDataWebhookEvent } from './webhooks-data-webhook-event';

/**
 * 
 * @export
 * @interface WebhooksData
 */
export interface WebhooksData {
    /**
     * The identifier string for the [Webhook](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof WebhooksData
     */
    'id'?: string;
    /**
     * The [Webhook](https://developers.intellihr.io/docs/v1/) endpoint which the request will be sent to when the subscribed [Webhook Event](https://developers.intellihr.io/docs/v1/) is triggered.
     * @type {string}
     * @memberof WebhooksData
     */
    'url'?: string;
    /**
     * 
     * @type {WebhooksDataWebhookEvent}
     * @memberof WebhooksData
     */
    'webhookEvent'?: WebhooksDataWebhookEvent;
    /**
     * Specifies whether users can select this [Webhook](https://developers.intellihr.io/docs/v1/). When disabled, this [Webhook](https://developers.intellihr.io/docs/v1/) will not be sent.
     * @type {boolean}
     * @memberof WebhooksData
     */
    'isEnabled'?: boolean;
    /**
     * A customizable string which can be used to identify what system created this [Webhook](https://developers.intellihr.io/docs/v1/). [Webhooks](https://developers.intellihr.io/docs/v1/) created through the intelliHR application will have source: \'custom\'.
     * @type {string}
     * @memberof WebhooksData
     */
    'source'?: string;
    /**
     * When this record was created. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof WebhooksData
     */
    'createdAt'?: string;
    /**
     * When this record was last updated. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof WebhooksData
     */
    'updatedAt'?: string;
}

