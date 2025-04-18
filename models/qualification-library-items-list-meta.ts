/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { QualificationLibraryItemsListMetaPagination } from './qualification-library-items-list-meta-pagination';

/**
 * Contains miscellaneous meta information about the response.
 * @export
 * @interface QualificationLibraryItemsListMeta
 */
export interface QualificationLibraryItemsListMeta {
    /**
     * The point in time at which the data in this response is accurate. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof QualificationLibraryItemsListMeta
     */
    'asAt'?: string;
    /**
     * 
     * @type {QualificationLibraryItemsListMetaPagination}
     * @memberof QualificationLibraryItemsListMeta
     */
    'pagination'?: QualificationLibraryItemsListMetaPagination;
    /**
     * The identifier string for the api request.
     * @type {string}
     * @memberof QualificationLibraryItemsListMeta
     */
    'requestId'?: string;
}

