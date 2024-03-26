/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CurrencyCodeProperty } from './currency-code-property';

/**
 * 
 * @export
 * @interface DefaultRemunerationComponent
 */
export interface DefaultRemunerationComponent {
    /**
     * The identifier string for the [Default Remuneration Component](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof DefaultRemunerationComponent
     */
    'id'?: string;
    /**
     * Name given to this [Default Remuneration Component](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof DefaultRemunerationComponent
     */
    'name'?: string;
    /**
     * The value of this remuneration component. For multipleOfBase this is the multiplier while for fixed amount this is the amount to directly add to the total.
     * @type {string}
     * @memberof DefaultRemunerationComponent
     */
    'value'?: string;
    /**
     * Whether this [Default Remuneration Component](https://developers.intellihr.io/docs/v1/) is used as any remuneration components.
     * @type {boolean}
     * @memberof DefaultRemunerationComponent
     */
    'isInUse'?: boolean;
    /**
     * Whether this [Default Remuneration Component](https://developers.intellihr.io/docs/v1/) is automatically added to newly created/updated jobs.
     * @type {boolean}
     * @memberof DefaultRemunerationComponent
     */
    'automaticallyAddToJobs'?: boolean;
    /**
     * If this [Default Remuneration Component](https://developers.intellihr.io/docs/v1/) is enabled for use in the system.
     * @type {boolean}
     * @memberof DefaultRemunerationComponent
     */
    'isEnabled'?: boolean;
    /**
     * 
     * @type {CurrencyCodeProperty}
     * @memberof DefaultRemunerationComponent
     */
    'currency'?: CurrencyCodeProperty;
    /**
     * The type of this [Default Remuneration Component](https://developers.intellihr.io/docs/v1/). Enum: `AdditionToBase`, `AdditionToTotal`, `DeductionToBase`, `Breakdown`.
     * @type {string}
     * @memberof DefaultRemunerationComponent
     */
    'type'?: string;
    /**
     * The type of the value of this [Default Remuneration Component](https://developers.intellihr.io/docs/v1/). Enum: `MultipleOfBase`, `FixedAmount`.
     * @type {string}
     * @memberof DefaultRemunerationComponent
     */
    'valueType'?: string;
}

