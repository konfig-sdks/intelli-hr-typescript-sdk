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
 * @interface JobRequirementGroupsPatchRequest
 */
export interface JobRequirementGroupsPatchRequest {
    /**
     * The issue date of the [Job Requirement Group](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof JobRequirementGroupsPatchRequest
     */
    'name': string;
    /**
     * The [Qualification Library Item](https://developers.intellihr.io/docs/v1/) ids assigned to this [Job Requirement Group](https://developers.intellihr.io/docs/v1/).
     * @type {Array<string>}
     * @memberof JobRequirementGroupsPatchRequest
     */
    'libraryItemIds': Array<string>;
}

