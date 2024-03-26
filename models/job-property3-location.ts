/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsResponse } from './custom-fields-response';

/**
 * The geographical location of this [Job](https://developers.intellihr.io/docs/v1/).
 * @export
 * @interface JobProperty3Location
 */
export interface JobProperty3Location {
    /**
     * The identifier string for the [Location](tag/Locations) of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty3Location
     */
    'id'?: string;
    /**
     * Name given to this [Location](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof JobProperty3Location
     */
    'name'?: string;
    /**
     * The address of this location.
     * @type {string}
     * @memberof JobProperty3Location
     */
    'address'?: string;
    /**
     * Code given to this [Location](https://developers.intellihr.io/docs/v1/).
     * @type {any}
     * @memberof JobProperty3Location
     */
    'code'?: any;
    /**
     * The custom field values for this [Location](https://developers.intellihr.io/docs/v1/)
     * @type {CustomFieldsResponse}
     * @memberof JobProperty3Location
     */
    'customFields'?: CustomFieldsResponse;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof JobProperty3Location
     */
    'link'?: string;
}

