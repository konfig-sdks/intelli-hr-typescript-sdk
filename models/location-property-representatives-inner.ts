/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { LocationPropertyRepresentativesInnerPerson } from './location-property-representatives-inner-person';
import { LocationPropertyRepresentativesInnerRepresentativeType } from './location-property-representatives-inner-representative-type';

/**
 * Representative model
 * @export
 * @interface LocationPropertyRepresentativesInner
 */
export interface LocationPropertyRepresentativesInner {
    /**
     * The identifier string for the Representative.
     * @type {string}
     * @memberof LocationPropertyRepresentativesInner
     */
    'id'?: string;
    /**
     * 
     * @type {LocationPropertyRepresentativesInnerPerson}
     * @memberof LocationPropertyRepresentativesInner
     */
    'person'?: LocationPropertyRepresentativesInnerPerson;
    /**
     * 
     * @type {LocationPropertyRepresentativesInnerRepresentativeType}
     * @memberof LocationPropertyRepresentativesInner
     */
    'representativeType'?: LocationPropertyRepresentativesInnerRepresentativeType;
}

