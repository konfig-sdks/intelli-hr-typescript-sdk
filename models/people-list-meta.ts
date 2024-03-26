/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleListMetaPagination } from './people-list-meta-pagination';

/**
 * Contains miscellaneous meta information about the response.
 * @export
 * @interface PeopleListMeta
 */
export interface PeopleListMeta {
    /**
     * 
     * @type {PeopleListMetaPagination}
     * @memberof PeopleListMeta
     */
    'pagination'?: PeopleListMetaPagination;
    /**
     * The identifier string for the api request.
     * @type {string}
     * @memberof PeopleListMeta
     */
    'requestId'?: string;
}

