/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface WebhookEvent
 */
export interface WebhookEvent {
    /**
     * The identifier that this event relates to.
     * @type {string}
     * @memberof WebhookEvent
     */
    'id'?: string;
    /**
     * The slug of the [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof WebhookEvent
     */
    'event'?: string;
    /**
     * When this event was fired, not necessarily the the time that the event occurred. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof WebhookEvent
     */
    'timestamp'?: string;
}

