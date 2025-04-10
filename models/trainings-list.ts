/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Training } from './training';
import { TrainingsListLinks } from './trainings-list-links';
import { TrainingsListMeta } from './trainings-list-meta';

/**
 * 
 * @export
 * @interface TrainingsList
 */
export interface TrainingsList {
    /**
     * 
     * @type {Array<Training>}
     * @memberof TrainingsList
     */
    'data'?: Array<Training>;
    /**
     * 
     * @type {TrainingsListMeta}
     * @memberof TrainingsList
     */
    'meta'?: TrainingsListMeta;
    /**
     * 
     * @type {TrainingsListLinks}
     * @memberof TrainingsList
     */
    'links'?: TrainingsListLinks;
}

