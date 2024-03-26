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
 * @interface WorkRightsListMetaPagination
 */
export interface WorkRightsListMetaPagination {
    /**
     * Total items count
     * @type {number}
     * @memberof WorkRightsListMetaPagination
     */
    'total'?: number;
    /**
     * Number of items for current page
     * @type {number}
     * @memberof WorkRightsListMetaPagination
     */
    'count'?: number;
    /**
     * Items per page limit
     * @type {number}
     * @memberof WorkRightsListMetaPagination
     */
    'per_page'?: number;
    /**
     * Current page
     * @type {number}
     * @memberof WorkRightsListMetaPagination
     */
    'current_page'?: number;
    /**
     * Total number of pages
     * @type {number}
     * @memberof WorkRightsListMetaPagination
     */
    'total_pages'?: number;
}

