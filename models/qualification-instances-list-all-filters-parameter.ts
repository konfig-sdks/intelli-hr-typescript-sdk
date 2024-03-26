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
 * @interface QualificationInstancesListAllFiltersParameter
 */
export interface QualificationInstancesListAllFiltersParameter {
    /**
     * The identifier string for the [Person](https://developers.intellihr.io/docs/v1/). This can be chained by `,` to search by multiple [People](https://developers.intellihr.io/docs/v1/).  Example filter: `filters[personId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`  This filter supports the equality `[eq]` operation
     * @type {string}
     * @memberof QualificationInstancesListAllFiltersParameter
     */
    'personId'?: string;
    /**
     * The employee number for the [Person](https://developers.intellihr.io/docs/v1/) to whom the [Job](https://developers.intellihr.io/docs/v1/) belongs. This can be chained by `,` to search by multiple employee numbers  Example filter: `filters[employeeNumber][eq]=00001`  This filter supports the equality `[eq]` operation
     * @type {string}
     * @memberof QualificationInstancesListAllFiltersParameter
     */
    'employeeNumber'?: string;
    /**
     * The identifier string for the [Qualification Library Item](https://developers.intellihr.io/docs/v1/). This can be chained by `,` to search by multiple [Qualification Library Items](https://developers.intellihr.io/docs/v1/).  Example filter: `filters[qualificationLibraryItemId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`  This filter supports the equality `[eq]` operation
     * @type {string}
     * @memberof QualificationInstancesListAllFiltersParameter
     */
    'qualificationLibraryItemId'?: string;
}

