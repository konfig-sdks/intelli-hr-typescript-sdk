/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The [Webhook Event](https://developers.intellihr.io/docs/v1/) that triggered this [Webhook](https://developers.intellihr.io/docs/v1/).
 * @export
 * @interface DataPropertyInner1WebhookEvent
 */
export interface DataPropertyInner1WebhookEvent {
    /**
     * The identifier string for the [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof DataPropertyInner1WebhookEvent
     */
    'id'?: string;
    /**
     * The human readable unique event key for this [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof DataPropertyInner1WebhookEvent
     */
    'name'?: string;
    /**
     * The slug of the [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof DataPropertyInner1WebhookEvent
     */
    'event'?: string;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof DataPropertyInner1WebhookEvent
     */
    'link'?: string;
}

