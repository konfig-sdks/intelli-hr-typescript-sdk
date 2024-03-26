/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * [Establishment](https://developers.intellihr.io/docs/v1/) to which this [Job](https://developers.intellihr.io/docs/v1/) belongs. A required field if `No Establishment` has been deleted from the system. Establishment is specified as a search object, which will match the Establishment which best fits the keys for this object. Multiple keys can be used together to further narrow search results.
 * @export
 * @interface JobCreateRequestEstablishment
 */
export interface JobCreateRequestEstablishment {
    /**
     * The identifier string for the [Establishment](https://developers.intellihr.io/docs/v1/) to which this [Job](https://developers.intellihr.io/docs/v1/) belongs.
     * @type {string}
     * @memberof JobCreateRequestEstablishment
     */
    'id'?: string;
    /**
     * Name given to this [Establishment](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobCreateRequestEstablishment
     */
    'name'?: string;
}

