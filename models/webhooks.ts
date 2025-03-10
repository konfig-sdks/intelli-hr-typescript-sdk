/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WebhooksData } from './webhooks-data';
import { WebhooksMeta } from './webhooks-meta';

/**
 * 
 * @export
 * @interface Webhooks
 */
export interface Webhooks {
    /**
     * 
     * @type {WebhooksData}
     * @memberof Webhooks
     */
    'data'?: WebhooksData;
    /**
     * 
     * @type {WebhooksMeta}
     * @memberof Webhooks
     */
    'meta'?: WebhooksMeta;
}

