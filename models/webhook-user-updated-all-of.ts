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
 * @interface WebhookUserUpdatedAllOf
 */
export interface WebhookUserUpdatedAllOf {
    /**
     * 
     * @type {any}
     * @memberof WebhookUserUpdatedAllOf
     */
    'event'?: any;
    /**
     * 
     * @type {object}
     * @memberof WebhookUserUpdatedAllOf
     */
    'links'?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof WebhookUserUpdatedAllOf
     */
    'updated_attributes'?: Array<WebhookUserUpdatedAllOfUpdatedAttributesEnum>;
}

type WebhookUserUpdatedAllOfUpdatedAttributesEnum = 'username' | 'person_id' | 'is_enabled' | 'disable_at' | 'sso_id' | 'password' | 'roles' | 'has_accepted_terms'


