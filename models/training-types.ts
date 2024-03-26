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
 * @interface TrainingTypes
 */
export interface TrainingTypes {
    /**
     * The identifier string for the [Training Type](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingTypes
     */
    'id'?: string;
    /**
     * User friendly name given to the [Training Type](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof TrainingTypes
     */
    'name'?: string;
    /**
     * Indicates if this [Training Type](https://developers.intellihr.io/docs/v1/) will be used as a default when creating a [Training](https://developers.intellihr.io/docs/v1/) record.
     * @type {boolean}
     * @memberof TrainingTypes
     */
    'isDefault'?: boolean;
    /**
     * Specifies whether users can select this Training Type in dropdowns
     * @type {boolean}
     * @memberof TrainingTypes
     */
    'isEnabled'?: boolean;
}

