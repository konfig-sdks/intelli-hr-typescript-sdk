/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Position Title that exist within the organisation. Position Title are assigned to [Jobs](https://developers.intellihr.io/docs/v1/).
 * @export
 * @interface JobProperty3SupervisorJobOneOfPositionTitle
 */
export interface JobProperty3SupervisorJobOneOfPositionTitle {
    /**
     * The identifier string for the [Position Title](https://developers.intellihr.io/docs/v1/) of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty3SupervisorJobOneOfPositionTitle
     */
    'id'?: string;
    /**
     * A name given to this [Position Title](https://developers.intellihr.io/docs/v1/)
     * @type {string}
     * @memberof JobProperty3SupervisorJobOneOfPositionTitle
     */
    'name'?: string;
    /**
     * An optional code that relates to this [Position Title](https://developers.intellihr.io/docs/v1/)
     * @type {any}
     * @memberof JobProperty3SupervisorJobOneOfPositionTitle
     */
    'code'?: any;
}

