/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface JobTimelineEventPositionTitlesInnerOneOf
 */
export interface JobTimelineEventPositionTitlesInnerOneOf {
    /**
     * The identifier string for the [Position Title](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobTimelineEventPositionTitlesInnerOneOf
     */
    'id'?: string;
    /**
     * Name given to this [Position Title](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof JobTimelineEventPositionTitlesInnerOneOf
     */
    'name'?: string;
    /**
     * Specifies whether users can select this [Position Title](https://developers.intellihr.io/docs/v1/) in dropdowns.
     * @type {boolean}
     * @memberof JobTimelineEventPositionTitlesInnerOneOf
     */
    'isEnabled'?: boolean;
    /**
     * Code given to this [Position Title](https://developers.intellihr.io/docs/v1/).
     * @type {any}
     * @memberof JobTimelineEventPositionTitlesInnerOneOf
     */
    'code'?: any;
}

