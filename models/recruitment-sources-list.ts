/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentSource } from './recruitment-source';
import { RecruitmentSourcesListLinks } from './recruitment-sources-list-links';
import { RecruitmentSourcesListMeta } from './recruitment-sources-list-meta';

/**
 * 
 * @export
 * @interface RecruitmentSourcesList
 */
export interface RecruitmentSourcesList {
    /**
     * Recruitment source details.
     * @type {Array<RecruitmentSource>}
     * @memberof RecruitmentSourcesList
     */
    'data'?: Array<RecruitmentSource>;
    /**
     * 
     * @type {RecruitmentSourcesListMeta}
     * @memberof RecruitmentSourcesList
     */
    'meta'?: RecruitmentSourcesListMeta;
    /**
     * 
     * @type {RecruitmentSourcesListLinks}
     * @memberof RecruitmentSourcesList
     */
    'links'?: RecruitmentSourcesListLinks;
}

