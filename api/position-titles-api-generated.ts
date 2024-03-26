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
import { PositionTitles } from '../models';
// @ts-ignore
import { PositionTitlesCreateRequest } from '../models';
// @ts-ignore
import { PositionTitlesList } from '../models';
// @ts-ignore
import { PositionTitlesListAllFiltersParameter } from '../models';
// @ts-ignore
import { PositionTitlesPatchRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PositionTitlesApi - axios parameter creator
 * @export
 */
export const PositionTitlesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new [Position Title](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Position Title
         * @param {PositionTitlesCreateRequest} positionTitlesCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord: async (positionTitlesCreateRequest: PositionTitlesCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'positionTitlesCreateRequest' is not null or undefined
            assertParamExists('createNewRecord', 'positionTitlesCreateRequest', positionTitlesCreateRequest)
            const localVarPath = `/position-titles`;
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
                requestBody: positionTitlesCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/position-titles',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(positionTitlesCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the [Position Titles](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Position Title by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/position-titles/{id}`;
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
                pathTemplate: '/position-titles/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Position Titles](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all position titles
         * @param {PositionTitlesListAllFiltersParameter} [filters] Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format &#x60;filters[&lt;filter_name&gt;][&lt;operation_type&gt;]&#x3D;&lt;filter_value&gt;&#x60;.For example, a filter to get items matching a specific filter value would be &#x60;filters[name][eq]&#x3D;Engineering Manager&#x60;  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality &#x60;[eq]&#x60;: Checks for an exact match with the given filter value  The list of supported filters is given below.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (filters?: PositionTitlesListAllFiltersParameter, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/position-titles`;
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/position-titles',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch attributes of an existing [Position Titles](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Position Title
         * @param {PositionTitlesPatchRequest} positionTitlesPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAttributes: async (positionTitlesPatchRequest: PositionTitlesPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'positionTitlesPatchRequest' is not null or undefined
            assertParamExists('updateAttributes', 'positionTitlesPatchRequest', positionTitlesPatchRequest)
            const localVarPath = `/position-titles/{id}`;
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
                requestBody: positionTitlesPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/position-titles/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(positionTitlesPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PositionTitlesApi - functional programming interface
 * @export
 */
export const PositionTitlesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PositionTitlesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new [Position Title](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Position Title
         * @param {PositionTitlesApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewRecord(requestParameters: PositionTitlesApiCreateNewRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PositionTitles>> {
            const positionTitlesCreateRequest: PositionTitlesCreateRequest = {
                name: requestParameters.name,
                code: requestParameters.code
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewRecord(positionTitlesCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the [Position Titles](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Position Title by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Position Titles](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all position titles
         * @param {PositionTitlesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: PositionTitlesApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PositionTitlesList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.filters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Patch attributes of an existing [Position Titles](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Position Title
         * @param {PositionTitlesApiUpdateAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAttributes(requestParameters: PositionTitlesApiUpdateAttributesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PositionTitles>> {
            const positionTitlesPatchRequest: PositionTitlesPatchRequest = {
                name: requestParameters.name,
                code: requestParameters.code,
                isEnabled: requestParameters.isEnabled
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAttributes(positionTitlesPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PositionTitlesApi - factory interface
 * @export
 */
export const PositionTitlesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PositionTitlesApiFp(configuration)
    return {
        /**
         * Create a new [Position Title](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Position Title
         * @param {PositionTitlesApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord(requestParameters: PositionTitlesApiCreateNewRecordRequest, options?: AxiosRequestConfig): AxiosPromise<PositionTitles> {
            return localVarFp.createNewRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the [Position Titles](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Position Title by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Position Titles](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all position titles
         * @param {PositionTitlesApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: PositionTitlesApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PositionTitlesList> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch attributes of an existing [Position Titles](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Position Title
         * @param {PositionTitlesApiUpdateAttributesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAttributes(requestParameters: PositionTitlesApiUpdateAttributesRequest, options?: AxiosRequestConfig): AxiosPromise<PositionTitles> {
            return localVarFp.updateAttributes(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewRecord operation in PositionTitlesApi.
 * @export
 * @interface PositionTitlesApiCreateNewRecordRequest
 */
export type PositionTitlesApiCreateNewRecordRequest = {
    
} & PositionTitlesCreateRequest

/**
 * Request parameters for listAll operation in PositionTitlesApi.
 * @export
 * @interface PositionTitlesApiListAllRequest
 */
export type PositionTitlesApiListAllRequest = {
    
    /**
    * Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Engineering Manager`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.
    * @type {PositionTitlesListAllFiltersParameter}
    * @memberof PositionTitlesApiListAll
    */
    readonly filters?: PositionTitlesListAllFiltersParameter
    
}

/**
 * Request parameters for updateAttributes operation in PositionTitlesApi.
 * @export
 * @interface PositionTitlesApiUpdateAttributesRequest
 */
export type PositionTitlesApiUpdateAttributesRequest = {
    
} & PositionTitlesPatchRequest

/**
 * PositionTitlesApiGenerated - object-oriented interface
 * @export
 * @class PositionTitlesApiGenerated
 * @extends {BaseAPI}
 */
export class PositionTitlesApiGenerated extends BaseAPI {
    /**
     * Create a new [Position Title](https://developers.intellihr.io/docs/v1/) record with the provided data.
     * @summary Create a new Position Title
     * @param {PositionTitlesApiCreateNewRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PositionTitlesApiGenerated
     */
    public createNewRecord(requestParameters: PositionTitlesApiCreateNewRecordRequest, options?: AxiosRequestConfig) {
        return PositionTitlesApiFp(this.configuration).createNewRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the [Position Titles](https://developers.intellihr.io/docs/v1/) by the given ID.
     * @summary Delete a Position Title by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PositionTitlesApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return PositionTitlesApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Position Titles](https://developers.intellihr.io/docs/v1/) recorded in the system.
     * @summary List all position titles
     * @param {PositionTitlesApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PositionTitlesApiGenerated
     */
    public listAll(requestParameters: PositionTitlesApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return PositionTitlesApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch attributes of an existing [Position Titles](https://developers.intellihr.io/docs/v1/) record with the provided data.
     * @summary Patch an existing Position Title
     * @param {PositionTitlesApiUpdateAttributesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PositionTitlesApiGenerated
     */
    public updateAttributes(requestParameters: PositionTitlesApiUpdateAttributesRequest, options?: AxiosRequestConfig) {
        return PositionTitlesApiFp(this.configuration).updateAttributes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
