/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A search object for [Training Provider](https://developers.intellihr.io/docs/v1/) for this [Training](https://developers.intellihr.io/docs/v1/). The provider can be specified via id or via name. The default [Training Provider](https://developers.intellihr.io/docs/v1/) will be used if none is provided.
 * @export
 * @interface TrainingsCreateRequestProvider
 */
export interface TrainingsCreateRequestProvider {
    /**
     * The identifier string for the [Training Provider](https://developers.intellihr.io/docs/v1/) of the [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingsCreateRequestProvider
     */
    'id'?: string;
    /**
     * User friendly name given to the [Training Provider](https://developers.intellihr.io/docs/v1/) of the [Training](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingsCreateRequestProvider
     */
    'name'?: string;
}

