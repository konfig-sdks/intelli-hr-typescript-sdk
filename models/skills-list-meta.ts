/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillsListMetaPagination } from './skills-list-meta-pagination';

/**
 * Contains miscellaneous meta information about the response.
 * @export
 * @interface SkillsListMeta
 */
export interface SkillsListMeta {
    /**
     * The point in time for which this response is for. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof SkillsListMeta
     */
    'asAt'?: string;
    /**
     * 
     * @type {SkillsListMetaPagination}
     * @memberof SkillsListMeta
     */
    'pagination'?: SkillsListMetaPagination;
    /**
     * The identifier string for the api request.
     * @type {string}
     * @memberof SkillsListMeta
     */
    'requestId'?: string;
}

