/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentSourceProperty } from './recruitment-source-property';
import { RecruitmentSourcesMeta } from './recruitment-sources-meta';

/**
 * 
 * @export
 * @interface RecruitmentSources
 */
export interface RecruitmentSources {
    /**
     * 
     * @type {RecruitmentSourceProperty}
     * @memberof RecruitmentSources
     */
    'data'?: RecruitmentSourceProperty;
    /**
     * 
     * @type {RecruitmentSourcesMeta}
     * @memberof RecruitmentSources
     */
    'meta'?: RecruitmentSourcesMeta;
}

