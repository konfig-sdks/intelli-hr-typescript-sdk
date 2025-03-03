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
import { Locations } from '../models';
// @ts-ignore
import { LocationsCreateRequest } from '../models';
// @ts-ignore
import { LocationsCreateRequestCustomFieldsValue } from '../models';
// @ts-ignore
import { LocationsList } from '../models';
// @ts-ignore
import { LocationsPatchRequest } from '../models';
// @ts-ignore
import { LocationsPatchRequestCustomFieldsValue } from '../models';
// @ts-ignore
import { UUIDv4Property3 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * LocationsApi - axios parameter creator
 * @export
 */
export const LocationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the created [Location](https://developers.intellihr.io/docs/v1/).
         * @summary Create a new Location
         * @param {LocationsCreateRequest} locationsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewLocation: async (locationsCreateRequest: LocationsCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationsCreateRequest' is not null or undefined
            assertParamExists('createNewLocation', 'locationsCreateRequest', locationsCreateRequest)
            const localVarPath = `/locations`;
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
                requestBody: locationsCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/locations',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(locationsCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the [Location](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
         * @summary Delete a Location by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/locations/{id}`;
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
                pathTemplate: '/locations/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single location.
         * @summary Find a Location by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findLocationById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/locations/{id}`;
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
                pathTemplate: '/locations/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all locations.
         * @summary List all locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/locations`;
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
                pathTemplate: '/locations',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the updated [Location](https://developers.intellihr.io/docs/v1/).
         * @summary Update a Location by ID
         * @param {LocationsPatchRequest} locationsPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (locationsPatchRequest: LocationsPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'locationsPatchRequest' is not null or undefined
            assertParamExists('updateById', 'locationsPatchRequest', locationsPatchRequest)
            const localVarPath = `/locations/{id}`;
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
                requestBody: locationsPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/locations/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(locationsPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocationsApi - functional programming interface
 * @export
 */
export const LocationsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocationsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the created [Location](https://developers.intellihr.io/docs/v1/).
         * @summary Create a new Location
         * @param {LocationsApiCreateNewLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewLocation(requestParameters: LocationsApiCreateNewLocationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Locations>> {
            const locationsCreateRequest: LocationsCreateRequest = {
                parentId: requestParameters.parentId,
                name: requestParameters.name,
                code: requestParameters.code,
                address: requestParameters.address,
                isEnabled: requestParameters.isEnabled,
                customFields: requestParameters.customFields
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewLocation(locationsCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the [Location](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
         * @summary Delete a Location by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single location.
         * @summary Find a Location by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findLocationById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Locations>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findLocationById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all locations.
         * @summary List all locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocationsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the updated [Location](https://developers.intellihr.io/docs/v1/).
         * @summary Update a Location by ID
         * @param {LocationsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: LocationsApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Locations>> {
            const locationsPatchRequest: LocationsPatchRequest = {
                parentId: requestParameters.parentId,
                name: requestParameters.name,
                code: requestParameters.code,
                address: requestParameters.address,
                isEnabled: requestParameters.isEnabled,
                customFields: requestParameters.customFields
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(locationsPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LocationsApi - factory interface
 * @export
 */
export const LocationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocationsApiFp(configuration)
    return {
        /**
         * Returns the created [Location](https://developers.intellihr.io/docs/v1/).
         * @summary Create a new Location
         * @param {LocationsApiCreateNewLocationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewLocation(requestParameters: LocationsApiCreateNewLocationRequest, options?: AxiosRequestConfig): AxiosPromise<Locations> {
            return localVarFp.createNewLocation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the [Location](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
         * @summary Delete a Location by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single location.
         * @summary Find a Location by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findLocationById(options?: AxiosRequestConfig): AxiosPromise<Locations> {
            return localVarFp.findLocationById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all locations.
         * @summary List all locations
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(options?: AxiosRequestConfig): AxiosPromise<LocationsList> {
            return localVarFp.listAll(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the updated [Location](https://developers.intellihr.io/docs/v1/).
         * @summary Update a Location by ID
         * @param {LocationsApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: LocationsApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Locations> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewLocation operation in LocationsApi.
 * @export
 * @interface LocationsApiCreateNewLocationRequest
 */
export type LocationsApiCreateNewLocationRequest = {
    
} & LocationsCreateRequest

/**
 * Request parameters for updateById operation in LocationsApi.
 * @export
 * @interface LocationsApiUpdateByIdRequest
 */
export type LocationsApiUpdateByIdRequest = {
    
} & LocationsPatchRequest

/**
 * LocationsApiGenerated - object-oriented interface
 * @export
 * @class LocationsApiGenerated
 * @extends {BaseAPI}
 */
export class LocationsApiGenerated extends BaseAPI {
    /**
     * Returns the created [Location](https://developers.intellihr.io/docs/v1/).
     * @summary Create a new Location
     * @param {LocationsApiCreateNewLocationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public createNewLocation(requestParameters: LocationsApiCreateNewLocationRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).createNewLocation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the [Location](https://developers.intellihr.io/docs/v1/)\'s by the given ID.
     * @summary Delete a Location by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single location.
     * @summary Find a Location by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public findLocationById(options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).findLocationById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all locations.
     * @summary List all locations
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public listAll(options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).listAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the updated [Location](https://developers.intellihr.io/docs/v1/).
     * @summary Update a Location by ID
     * @param {LocationsApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocationsApiGenerated
     */
    public updateById(requestParameters: LocationsApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return LocationsApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
