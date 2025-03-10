/* tslint:disable */
/* eslint-disable */
/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { JobCreateRequest } from '../models';
// @ts-ignore
import { JobCreateRequestBusinessEntity } from '../models';
// @ts-ignore
import { JobCreateRequestBusinessUnit } from '../models';
// @ts-ignore
import { JobCreateRequestCustomFieldsValue } from '../models';
// @ts-ignore
import { JobCreateRequestEmploymentCondition } from '../models';
// @ts-ignore
import { JobCreateRequestEstablishment } from '../models';
// @ts-ignore
import { JobCreateRequestLocation } from '../models';
// @ts-ignore
import { JobCreateRequestPayGrade } from '../models';
// @ts-ignore
import { JobCreateRequestPerson } from '../models';
// @ts-ignore
import { JobCreateRequestRecruitment } from '../models';
// @ts-ignore
import { JobCreateRequestRemunerationSchedule } from '../models';
// @ts-ignore
import { JobCreateRequestSupervisorJob } from '../models';
// @ts-ignore
import { JobCreateRequestSupervisorPerson } from '../models';
// @ts-ignore
import { JobCreateRequestWorkClass } from '../models';
// @ts-ignore
import { JobCreateRequestWorkType } from '../models';
// @ts-ignore
import { JobCreateResponse } from '../models';
// @ts-ignore
import { JobPatchRequest } from '../models';
// @ts-ignore
import { JobPatchRequestBusinessEntity } from '../models';
// @ts-ignore
import { JobPatchRequestBusinessUnit } from '../models';
// @ts-ignore
import { JobPatchRequestCustomFieldsValue } from '../models';
// @ts-ignore
import { JobPatchRequestEmploymentCondition } from '../models';
// @ts-ignore
import { JobPatchRequestEstablishment } from '../models';
// @ts-ignore
import { JobPatchRequestJobChangeReason } from '../models';
// @ts-ignore
import { JobPatchRequestLocation } from '../models';
// @ts-ignore
import { JobPatchRequestPayGrade } from '../models';
// @ts-ignore
import { JobPatchRequestRemunerationSchedule } from '../models';
// @ts-ignore
import { JobPatchRequestSupervisorJob } from '../models';
// @ts-ignore
import { JobPatchRequestSupervisorPerson } from '../models';
// @ts-ignore
import { JobPatchRequestWorkClass } from '../models';
// @ts-ignore
import { JobPatchRequestWorkType } from '../models';
// @ts-ignore
import { JobPatchResponse } from '../models';
// @ts-ignore
import { Jobs } from '../models';
// @ts-ignore
import { JobsGetAllFiltersParameter } from '../models';
// @ts-ignore
import { JobsList } from '../models';
// @ts-ignore
import { RFC3339DatetimeProperty4 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobsApi - axios parameter creator
 * @export
 */
export const JobsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Job record with the provided data.
         * @summary Create a new Job
         * @param {JobCreateRequest} jobCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecord: async (jobCreateRequest: JobCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobCreateRequest' is not null or undefined
            assertParamExists('createRecord', 'jobCreateRequest', jobCreateRequest)
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: jobCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a single Job record by UUIDv4 identifier.
         * @summary Find a Job by ID
         * @param {string} [asAt] Used to configure what date to return this job data for, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime.   All data returned from the job endpoints represent the values of the Person\&#39;s job attributes at a specific point in time.   By default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById: async (asAt?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs/{id}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKey", configuration })
            if (asAt !== undefined) {
                localVarQueryParameter['asAt'] = asAt;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Job](https://developers.intellihr.io/docs/v1/) entity records as at the current date.
         * @summary List all Jobs
         * @param {JobsGetAllFiltersParameter} [filters] Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format &#x60;filters[&lt;filter_name&gt;][&lt;operation_type&gt;]&#x3D;&lt;filter_value&gt;&#x60;.For example, a filter to get items matching a specific filter value would be &#x60;filters[personId][eq]&#x3D;dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12&#x60;  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality &#x60;[eq]&#x60;: Checks for an exact match with the given filter value  The list of supported filters is given below.
         * @param {string} [sort] Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be &#x60;-createdAt&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (filters?: JobsGetAllFiltersParameter, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/jobs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKey", configuration })
            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch attributes of an existing Job record with the provided data.
         * @summary Patch an existing Job
         * @param {JobPatchRequest} jobPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAttributes: async (jobPatchRequest: JobPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobPatchRequest' is not null or undefined
            assertParamExists('updateAttributes', 'jobPatchRequest', jobPatchRequest)
            const localVarPath = `/jobs/{id}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKey", configuration })

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: jobPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/jobs/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobsApi - functional programming interface
 * @export
 */
export const JobsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new Job record with the provided data.
         * @summary Create a new Job
         * @param {JobsApiCreateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createRecord(requestParameters: JobsApiCreateRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobCreateResponse>> {
            const jobCreateRequest: JobCreateRequest = {
                person: requestParameters.person,
                companyStartDate: requestParameters.companyStartDate,
                companyEndDate: requestParameters.companyEndDate,
                startDate: requestParameters.startDate,
                endDate: requestParameters.endDate,
                name: requestParameters.name,
                businessEntity: requestParameters.businessEntity,
                businessUnit: requestParameters.businessUnit,
                establishment: requestParameters.establishment,
                supervisorPerson: requestParameters.supervisorPerson,
                supervisorJob: requestParameters.supervisorJob,
                location: requestParameters.location,
                workClass: requestParameters.workClass,
                workType: requestParameters.workType,
                fte: requestParameters.fte,
                payGrade: requestParameters.payGrade,
                employmentCondition: requestParameters.employmentCondition,
                remunerationSchedule: requestParameters.remunerationSchedule,
                recruitment: requestParameters.recruitment,
                customFields: requestParameters.customFields
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createRecord(jobCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a single Job record by UUIDv4 identifier.
         * @summary Find a Job by ID
         * @param {JobsApiFindByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findById(requestParameters: JobsApiFindByIdRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Jobs>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findById(requestParameters.asAt, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Job](https://developers.intellihr.io/docs/v1/) entity records as at the current date.
         * @summary List all Jobs
         * @param {JobsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: JobsApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.filters, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Patch attributes of an existing Job record with the provided data.
         * @summary Patch an existing Job
         * @param {JobsApiUpdateAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAttributes(requestParameters: JobsApiUpdateAttributesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobPatchResponse>> {
            const jobPatchRequest: JobPatchRequest = {
                effectiveFrom: requestParameters.effectiveFrom,
                effectiveTo: requestParameters.effectiveTo,
                name: requestParameters.name,
                businessEntity: requestParameters.businessEntity,
                businessUnit: requestParameters.businessUnit,
                establishment: requestParameters.establishment,
                jobChangeReason: requestParameters.jobChangeReason,
                supervisorPerson: requestParameters.supervisorPerson,
                supervisorJob: requestParameters.supervisorJob,
                location: requestParameters.location,
                workClass: requestParameters.workClass,
                workType: requestParameters.workType,
                fte: requestParameters.fte,
                payGrade: requestParameters.payGrade,
                employmentCondition: requestParameters.employmentCondition,
                remunerationSchedule: requestParameters.remunerationSchedule,
                customFields: requestParameters.customFields
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAttributes(jobPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobsApi - factory interface
 * @export
 */
export const JobsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobsApiFp(configuration)
    return {
        /**
         * Create a new Job record with the provided data.
         * @summary Create a new Job
         * @param {JobsApiCreateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createRecord(requestParameters: JobsApiCreateRecordRequest, options?: AxiosRequestConfig): AxiosPromise<JobCreateResponse> {
            return localVarFp.createRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a single Job record by UUIDv4 identifier.
         * @summary Find a Job by ID
         * @param {JobsApiFindByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById(requestParameters: JobsApiFindByIdRequest = {}, options?: AxiosRequestConfig): AxiosPromise<Jobs> {
            return localVarFp.findById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Job](https://developers.intellihr.io/docs/v1/) entity records as at the current date.
         * @summary List all Jobs
         * @param {JobsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: JobsApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<JobsList> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch attributes of an existing Job record with the provided data.
         * @summary Patch an existing Job
         * @param {JobsApiUpdateAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAttributes(requestParameters: JobsApiUpdateAttributesRequest, options?: AxiosRequestConfig): AxiosPromise<JobPatchResponse> {
            return localVarFp.updateAttributes(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createRecord operation in JobsApi.
 * @export
 * @interface JobsApiCreateRecordRequest
 */
export type JobsApiCreateRecordRequest = {
    
} & JobCreateRequest

/**
 * Request parameters for findById operation in JobsApi.
 * @export
 * @interface JobsApiFindByIdRequest
 */
export type JobsApiFindByIdRequest = {
    
    /**
    * Used to configure what date to return this job data for, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime.   All data returned from the job endpoints represent the values of the Person\'s job attributes at a specific point in time.   By default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.
    * @type {string}
    * @memberof JobsApiFindById
    */
    readonly asAt?: string
    
}

/**
 * Request parameters for getAll operation in JobsApi.
 * @export
 * @interface JobsApiGetAllRequest
 */
export type JobsApiGetAllRequest = {
    
    /**
    * Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[personId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.
    * @type {JobsGetAllFiltersParameter}
    * @memberof JobsApiGetAll
    */
    readonly filters?: JobsGetAllFiltersParameter
    
    /**
    * Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`.
    * @type {string}
    * @memberof JobsApiGetAll
    */
    readonly sort?: string
    
}

/**
 * Request parameters for updateAttributes operation in JobsApi.
 * @export
 * @interface JobsApiUpdateAttributesRequest
 */
export type JobsApiUpdateAttributesRequest = {
    
} & JobPatchRequest

/**
 * JobsApiGenerated - object-oriented interface
 * @export
 * @class JobsApiGenerated
 * @extends {BaseAPI}
 */
export class JobsApiGenerated extends BaseAPI {
    /**
     * Create a new Job record with the provided data.
     * @summary Create a new Job
     * @param {JobsApiCreateRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public createRecord(requestParameters: JobsApiCreateRecordRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).createRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a single Job record by UUIDv4 identifier.
     * @summary Find a Job by ID
     * @param {JobsApiFindByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public findById(requestParameters: JobsApiFindByIdRequest = {}, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).findById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Job](https://developers.intellihr.io/docs/v1/) entity records as at the current date.
     * @summary List all Jobs
     * @param {JobsApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public getAll(requestParameters: JobsApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch attributes of an existing Job record with the provided data.
     * @summary Patch an existing Job
     * @param {JobsApiUpdateAttributesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobsApiGenerated
     */
    public updateAttributes(requestParameters: JobsApiUpdateAttributesRequest, options?: AxiosRequestConfig) {
        return JobsApiFp(this.configuration).updateAttributes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
