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
 * @interface UsersPatch
 */
export interface UsersPatch {
    /**
     * Specifies whether this [User](https://developers.intellihr.io/docs/v1/) account is active. When disabled, you can no longer sign in using this account.
     * @type {boolean}
     * @memberof UsersPatch
     */
    'isEnabled'?: boolean;
    /**
     * The unique name of this user.
     * @type {string}
     * @memberof UsersPatch
     */
    'username'?: string;
}

