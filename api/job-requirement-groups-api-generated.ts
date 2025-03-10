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
import { JobRequirementGroups } from '../models';
// @ts-ignore
import { JobRequirementGroupsCreateRequest } from '../models';
// @ts-ignore
import { JobRequirementGroupsList } from '../models';
// @ts-ignore
import { JobRequirementGroupsPatchRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * JobRequirementGroupsApi - axios parameter creator
 * @export
 */
export const JobRequirementGroupsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Job Requirement Group
         * @param {JobRequirementGroupsCreateRequest} jobRequirementGroupsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewGroup: async (jobRequirementGroupsCreateRequest: JobRequirementGroupsCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobRequirementGroupsCreateRequest' is not null or undefined
            assertParamExists('createNewGroup', 'jobRequirementGroupsCreateRequest', jobRequirementGroupsCreateRequest)
            const localVarPath = `/job-requirement-groups`;
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
                requestBody: jobRequirementGroupsCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-requirement-groups',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobRequirementGroupsCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Job Requirement Group by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/job-requirement-groups/{id}`;
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
                pathTemplate: '/job-requirement-groups/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Job Requirement Group by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/job-requirement-groups/{id}`;
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
                pathTemplate: '/job-requirement-groups/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List all Job Requirement Groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/job-requirement-groups`;
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
                pathTemplate: '/job-requirement-groups',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch attributes of an existing [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Job Requirement Group
         * @param {JobRequirementGroupsPatchRequest} jobRequirementGroupsPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAttributes: async (jobRequirementGroupsPatchRequest: JobRequirementGroupsPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'jobRequirementGroupsPatchRequest' is not null or undefined
            assertParamExists('updateAttributes', 'jobRequirementGroupsPatchRequest', jobRequirementGroupsPatchRequest)
            const localVarPath = `/job-requirement-groups/{id}`;
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
                requestBody: jobRequirementGroupsPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/job-requirement-groups/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(jobRequirementGroupsPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * JobRequirementGroupsApi - functional programming interface
 * @export
 */
export const JobRequirementGroupsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = JobRequirementGroupsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Job Requirement Group
         * @param {JobRequirementGroupsApiCreateNewGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewGroup(requestParameters: JobRequirementGroupsApiCreateNewGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobRequirementGroups>> {
            const jobRequirementGroupsCreateRequest: JobRequirementGroupsCreateRequest = {
                name: requestParameters.name,
                libraryItemIds: requestParameters.libraryItemIds
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewGroup(jobRequirementGroupsCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Job Requirement Group by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Job Requirement Group by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobRequirementGroups>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List all Job Requirement Groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobRequirementGroupsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Patch attributes of an existing [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Job Requirement Group
         * @param {JobRequirementGroupsApiUpdateAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAttributes(requestParameters: JobRequirementGroupsApiUpdateAttributesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JobRequirementGroups>> {
            const jobRequirementGroupsPatchRequest: JobRequirementGroupsPatchRequest = {
                name: requestParameters.name,
                libraryItemIds: requestParameters.libraryItemIds
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAttributes(jobRequirementGroupsPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * JobRequirementGroupsApi - factory interface
 * @export
 */
export const JobRequirementGroupsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = JobRequirementGroupsApiFp(configuration)
    return {
        /**
         * Create a new [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Job Requirement Group
         * @param {JobRequirementGroupsApiCreateNewGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewGroup(requestParameters: JobRequirementGroupsApiCreateNewGroupRequest, options?: AxiosRequestConfig): AxiosPromise<JobRequirementGroups> {
            return localVarFp.createNewGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Job Requirement Group by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Job Requirement Group by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById(options?: AxiosRequestConfig): AxiosPromise<JobRequirementGroups> {
            return localVarFp.findById(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all Job Requirement Groups
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(options?: AxiosRequestConfig): AxiosPromise<JobRequirementGroupsList> {
            return localVarFp.listAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Patch attributes of an existing [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Job Requirement Group
         * @param {JobRequirementGroupsApiUpdateAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAttributes(requestParameters: JobRequirementGroupsApiUpdateAttributesRequest, options?: AxiosRequestConfig): AxiosPromise<JobRequirementGroups> {
            return localVarFp.updateAttributes(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewGroup operation in JobRequirementGroupsApi.
 * @export
 * @interface JobRequirementGroupsApiCreateNewGroupRequest
 */
export type JobRequirementGroupsApiCreateNewGroupRequest = {
    
} & JobRequirementGroupsCreateRequest

/**
 * Request parameters for updateAttributes operation in JobRequirementGroupsApi.
 * @export
 * @interface JobRequirementGroupsApiUpdateAttributesRequest
 */
export type JobRequirementGroupsApiUpdateAttributesRequest = {
    
} & JobRequirementGroupsPatchRequest

/**
 * JobRequirementGroupsApiGenerated - object-oriented interface
 * @export
 * @class JobRequirementGroupsApiGenerated
 * @extends {BaseAPI}
 */
export class JobRequirementGroupsApiGenerated extends BaseAPI {
    /**
     * Create a new [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
     * @summary Create a new Job Requirement Group
     * @param {JobRequirementGroupsApiCreateNewGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRequirementGroupsApiGenerated
     */
    public createNewGroup(requestParameters: JobRequirementGroupsApiCreateNewGroupRequest, options?: AxiosRequestConfig) {
        return JobRequirementGroupsApiFp(this.configuration).createNewGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by the given ID.
     * @summary Delete a Job Requirement Group by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRequirementGroupsApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return JobRequirementGroupsApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by its identifier.
     * @summary Find a Job Requirement Group by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRequirementGroupsApiGenerated
     */
    public findById(options?: AxiosRequestConfig) {
        return JobRequirementGroupsApiFp(this.configuration).findById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List all Job Requirement Groups
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRequirementGroupsApiGenerated
     */
    public listAll(options?: AxiosRequestConfig) {
        return JobRequirementGroupsApiFp(this.configuration).listAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch attributes of an existing [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.
     * @summary Patch an existing Job Requirement Group
     * @param {JobRequirementGroupsApiUpdateAttributesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof JobRequirementGroupsApiGenerated
     */
    public updateAttributes(requestParameters: JobRequirementGroupsApiUpdateAttributesRequest, options?: AxiosRequestConfig) {
        return JobRequirementGroupsApiFp(this.configuration).updateAttributes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
