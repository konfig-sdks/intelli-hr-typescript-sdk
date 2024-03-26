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
import { JobChangeReasons } from '../models';
// @ts-ignore
import { JobChangeReasonsCreateRequest } from '../models';
// @ts-ignore
import { JobChangeReasonsList } from '../models';
// @ts-ignore
import { JobChangeReasonsPatchRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobChangeReasonsApi - axios parameter creator
 * @export
 */
export const JobChangeReasonsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the created [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Create a new Job Change Reason
         * @param {JobChangeReasonsCreateRequest} jobChangeReasonsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReason: async (jobChangeReasonsCreateRequest: JobChangeReasonsCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobChangeReasonsCreateRequest' is not null or undefined
            assertParamExists('createNewReason', 'jobChangeReasonsCreateRequest', jobChangeReasonsCreateRequest)
            const localVarPath = `/job-change-reasons`;
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
                requestBody: jobChangeReasonsCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-change-reasons',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobChangeReasonsCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the [Job Change Reason](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
         * @summary Delete a Job Change Reason by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/job-change-reasons/{id}`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication ApiKey required
            await setApiKeyToObject({ object: localVarHeaderParameter, key: "Authorization", keyParamName: "apiKey", configuration })

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-change-reasons/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Job Change Reason by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/job-change-reasons/{id}`;
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-change-reasons/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Job Change Reasons](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all Job Change Reasons
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/job-change-reasons`;
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-change-reasons',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the updated [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Update a Job Change Reason by ID
         * @param {JobChangeReasonsPatchRequest} jobChangeReasonsPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (jobChangeReasonsPatchRequest: JobChangeReasonsPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobChangeReasonsPatchRequest' is not null or undefined
            assertParamExists('updateById', 'jobChangeReasonsPatchRequest', jobChangeReasonsPatchRequest)
            const localVarPath = `/job-change-reasons/{id}`;
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
                requestBody: jobChangeReasonsPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-change-reasons/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobChangeReasonsPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobChangeReasonsApi - functional programming interface
 * @export
 */
export const JobChangeReasonsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobChangeReasonsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the created [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Create a new Job Change Reason
         * @param {JobChangeReasonsApiCreateNewReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewReason(requestParameters: JobChangeReasonsApiCreateNewReasonRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobChangeReasons>> {
            const jobChangeReasonsCreateRequest: JobChangeReasonsCreateRequest = {
                name: requestParameters.name,
                isEnabled: requestParameters.isEnabled
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewReason(jobChangeReasonsCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the [Job Change Reason](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
         * @summary Delete a Job Change Reason by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Job Change Reason by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobChangeReasons>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Job Change Reasons](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all Job Change Reasons
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobChangeReasonsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the updated [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Update a Job Change Reason by ID
         * @param {JobChangeReasonsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: JobChangeReasonsApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobChangeReasons>> {
            const jobChangeReasonsPatchRequest: JobChangeReasonsPatchRequest = {
                name: requestParameters.name,
                isEnabled: requestParameters.isEnabled
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(jobChangeReasonsPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobChangeReasonsApi - factory interface
 * @export
 */
export const JobChangeReasonsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobChangeReasonsApiFp(configuration)
    return {
        /**
         * Returns the created [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Create a new Job Change Reason
         * @param {JobChangeReasonsApiCreateNewReasonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewReason(requestParameters: JobChangeReasonsApiCreateNewReasonRequest, options?: AxiosRequestConfig): AxiosPromise<JobChangeReasons> {
            return localVarFp.createNewReason(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the [Job Change Reason](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
         * @summary Delete a Job Change Reason by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Job Change Reason by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById(options?: AxiosRequestConfig): AxiosPromise<JobChangeReasons> {
            return localVarFp.findById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Job Change Reasons](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all Job Change Reasons
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(options?: AxiosRequestConfig): AxiosPromise<JobChangeReasonsList> {
            return localVarFp.listAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the updated [Job Change Reason](https://developers.intellihr.io/docs/v1/).
         * @summary Update a Job Change Reason by ID
         * @param {JobChangeReasonsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: JobChangeReasonsApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<JobChangeReasons> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewReason operation in JobChangeReasonsApi.
 * @export
 * @interface JobChangeReasonsApiCreateNewReasonRequest
 */
export type JobChangeReasonsApiCreateNewReasonRequest = {
    
} & JobChangeReasonsCreateRequest

/**
 * Request parameters for updateById operation in JobChangeReasonsApi.
 * @export
 * @interface JobChangeReasonsApiUpdateByIdRequest
 */
export type JobChangeReasonsApiUpdateByIdRequest = {
    
} & JobChangeReasonsPatchRequest

/**
 * JobChangeReasonsApiGenerated - object-oriented interface
 * @export
 * @class JobChangeReasonsApiGenerated
 * @extends {BaseAPI}
 */
export class JobChangeReasonsApiGenerated extends BaseAPI {
    /**
     * Returns the created [Job Change Reason](https://developers.intellihr.io/docs/v1/).
     * @summary Create a new Job Change Reason
     * @param {JobChangeReasonsApiCreateNewReasonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobChangeReasonsApiGenerated
     */
    public createNewReason(requestParameters: JobChangeReasonsApiCreateNewReasonRequest, options?: AxiosRequestConfig) {
        return JobChangeReasonsApiFp(this.configuration).createNewReason(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the [Job Change Reason](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
     * @summary Delete a Job Change Reason by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobChangeReasonsApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return JobChangeReasonsApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single [Job Change Reason](https://developers.intellihr.io/docs/v1/).
     * @summary Find a Job Change Reason by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobChangeReasonsApiGenerated
     */
    public findById(options?: AxiosRequestConfig) {
        return JobChangeReasonsApiFp(this.configuration).findById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Job Change Reasons](https://developers.intellihr.io/docs/v1/) recorded in the system.
     * @summary List all Job Change Reasons
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobChangeReasonsApiGenerated
     */
    public listAll(options?: AxiosRequestConfig) {
        return JobChangeReasonsApiFp(this.configuration).listAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the updated [Job Change Reason](https://developers.intellihr.io/docs/v1/).
     * @summary Update a Job Change Reason by ID
     * @param {JobChangeReasonsApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobChangeReasonsApiGenerated
     */
    public updateById(requestParameters: JobChangeReasonsApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return JobChangeReasonsApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
