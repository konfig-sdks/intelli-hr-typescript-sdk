/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Contains information related to the pagination of the response
 * @export
 * @interface QualificationLibraryItemsListMetaPagination
 */
export interface QualificationLibraryItemsListMetaPagination {
    /**
     * Total items count
     * @type {number}
     * @memberof QualificationLibraryItemsListMetaPagination
     */
    'total'?: number;
    /**
     * Number of items for current page
     * @type {number}
     * @memberof QualificationLibraryItemsListMetaPagination
     */
    'count'?: number;
    /**
     * Items per page limit
     * @type {number}
     * @memberof QualificationLibraryItemsListMetaPagination
     */
    'per_page'?: number;
    /**
     * Current page
     * @type {number}
     * @memberof QualificationLibraryItemsListMetaPagination
     */
    'current_page'?: number;
    /**
     * Total number of pages
     * @type {number}
     * @memberof QualificationLibraryItemsListMetaPagination
     */
    'total_pages'?: number;
}

