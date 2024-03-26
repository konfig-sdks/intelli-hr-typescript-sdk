/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleData } from './people-data';
import { PeopleMeta } from './people-meta';

/**
 * 
 * @export
 * @interface People
 */
export interface People {
    /**
     * 
     * @type {PeopleData}
     * @memberof People
     */
    'data'?: PeopleData;
    /**
     * 
     * @type {PeopleMeta}
     * @memberof People
     */
    'meta'?: PeopleMeta;
}

