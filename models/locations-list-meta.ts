/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationsListMetaPagination } from './locations-list-meta-pagination';

/**
 * Contains miscellaneous meta information about the response.
 * @export
 * @interface LocationsListMeta
 */
export interface LocationsListMeta {
    /**
     * The point in time for which this response is for. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof LocationsListMeta
     */
    'asAt'?: string;
    /**
     * 
     * @type {LocationsListMetaPagination}
     * @memberof LocationsListMeta
     */
    'pagination'?: LocationsListMetaPagination;
    /**
     * The identifier string for the api request.
     * @type {string}
     * @memberof LocationsListMeta
     */
    'requestId'?: string;
}

