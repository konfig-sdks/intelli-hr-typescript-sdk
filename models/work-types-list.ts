/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkType } from './work-type';
import { WorkTypesListLinks } from './work-types-list-links';
import { WorkTypesListMeta } from './work-types-list-meta';

/**
 * 
 * @export
 * @interface WorkTypesList
 */
export interface WorkTypesList {
    /**
     * 
     * @type {Array<WorkType>}
     * @memberof WorkTypesList
     */
    'data'?: Array<WorkType>;
    /**
     * 
     * @type {WorkTypesListMeta}
     * @memberof WorkTypesList
     */
    'meta'?: WorkTypesListMeta;
    /**
     * 
     * @type {WorkTypesListLinks}
     * @memberof WorkTypesList
     */
    'links'?: WorkTypesListLinks;
}

