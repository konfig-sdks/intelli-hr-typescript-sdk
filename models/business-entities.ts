/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BusinessEntitiesMeta } from './business-entities-meta';
import { BusinessEntityProperty } from './business-entity-property';

/**
 * 
 * @export
 * @interface BusinessEntities
 */
export interface BusinessEntities {
    /**
     * 
     * @type {BusinessEntityProperty}
     * @memberof BusinessEntities
     */
    'data'?: BusinessEntityProperty;
    /**
     * 
     * @type {BusinessEntitiesMeta}
     * @memberof BusinessEntities
     */
    'meta'?: BusinessEntitiesMeta;
}

