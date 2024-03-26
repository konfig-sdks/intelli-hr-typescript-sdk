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
 * @interface WebhookEventsData
 */
export interface WebhookEventsData {
    /**
     * The identifier string for the [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof WebhookEventsData
     */
    'id'?: string;
    /**
     * The human readable unique event key for this [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof WebhookEventsData
     */
    'name'?: string;
    /**
     * The slug of the [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof WebhookEventsData
     */
    'event'?: string;
    /**
     * An example of the payload which will be sent to [Webhooks](https://developers.intellihr.io/docs/v1/) that subscribe to this particular [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @type {object}
     * @memberof WebhookEventsData
     */
    'examplePayload'?: object;
}

