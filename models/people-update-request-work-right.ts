/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PeopleUpdateRequestWorkRightOneOf } from './people-update-request-work-right-one-of';

/**
 * @type PeopleUpdateRequestWorkRight
 * [Work Right](https://developers.intellihr.io/docs/v1/) to whom this [Person](https://developers.intellihr.io/docs/v1/) belongs. This [Work Right](https://developers.intellihr.io/docs/v1/) is specified as a search object, which will match the work right which best fits the keys for this object. Multiple keys can be used together to further narrow search results. Null can be provided to remove a person\'s work right.
 * @export
 */
export type PeopleUpdateRequestWorkRight = Null | PeopleUpdateRequestWorkRightOneOf;


