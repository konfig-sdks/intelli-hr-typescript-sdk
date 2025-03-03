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
 * @interface PersonIdCreateRequest
 */
export interface PersonIdCreateRequest {
    /**
     * The identifier string for the [Skill](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof PersonIdCreateRequest
     */
    'skillId': string;
    /**
     * The Skill Level you wish to apply to this Skill. Enum: `Expert`, `Proficient`, `Interested`, `Basic`.
     * @type {string}
     * @memberof PersonIdCreateRequest
     */
    'skillLevel': string;
}

