/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkRightProperty } from './work-right-property';
import { WorkRightsMeta } from './work-rights-meta';

/**
 * 
 * @export
 * @interface WorkRights
 */
export interface WorkRights {
    /**
     * 
     * @type {WorkRightProperty}
     * @memberof WorkRights
     */
    'data'?: WorkRightProperty;
    /**
     * 
     * @type {WorkRightsMeta}
     * @memberof WorkRights
     */
    'meta'?: WorkRightsMeta;
}

