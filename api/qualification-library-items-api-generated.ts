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
import { QualificationLibraryItems } from '../models';
// @ts-ignore
import { QualificationLibraryItemsCreateRequest } from '../models';
// @ts-ignore
import { QualificationLibraryItemsList } from '../models';
// @ts-ignore
import { QualificationLibraryItemsPatchRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * QualificationLibraryItemsApi - axios parameter creator
 * @export
 */
export const QualificationLibraryItemsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new [Qualification Library Item](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Qualification Library Item
         * @param {QualificationLibraryItemsCreateRequest} qualificationLibraryItemsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord: async (qualificationLibraryItemsCreateRequest: QualificationLibraryItemsCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'qualificationLibraryItemsCreateRequest' is not null or undefined
            assertParamExists('createNewRecord', 'qualificationLibraryItemsCreateRequest', qualificationLibraryItemsCreateRequest)
            const localVarPath = `/qualification-library-items`;
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
                requestBody: qualificationLibraryItemsCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/qualification-library-items',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(qualificationLibraryItemsCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the [Qualification Library Items](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Qualification Library Item by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/qualification-library-items/{id}`;
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
                pathTemplate: '/qualification-library-items/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single [Qualification Library Item](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Qualification Library Item by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findByID: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/qualification-library-items/{id}`;
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
                pathTemplate: '/qualification-library-items/{id}',
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
         * @summary List all Qualification Library Items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllQualifications: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/qualification-library-items`;
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
                pathTemplate: '/qualification-library-items',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Patch attributes of an existing [Qualification Library Items](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Qualification Library Item
         * @param {QualificationLibraryItemsPatchRequest} qualificationLibraryItemsPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecord: async (qualificationLibraryItemsPatchRequest: QualificationLibraryItemsPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'qualificationLibraryItemsPatchRequest' is not null or undefined
            assertParamExists('updateRecord', 'qualificationLibraryItemsPatchRequest', qualificationLibraryItemsPatchRequest)
            const localVarPath = `/qualification-library-items/{id}`;
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
                requestBody: qualificationLibraryItemsPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/qualification-library-items/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(qualificationLibraryItemsPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * QualificationLibraryItemsApi - functional programming interface
 * @export
 */
export const QualificationLibraryItemsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = QualificationLibraryItemsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new [Qualification Library Item](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Qualification Library Item
         * @param {QualificationLibraryItemsApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewRecord(requestParameters: QualificationLibraryItemsApiCreateNewRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QualificationLibraryItems>> {
            const qualificationLibraryItemsCreateRequest: QualificationLibraryItemsCreateRequest = {
                name: requestParameters.name,
                qualificationTypeId: requestParameters.qualificationTypeId,
                qualificationExpiryType: requestParameters.qualificationExpiryType,
                qualificationRegistrationNumberVisibilityType: requestParameters.qualificationRegistrationNumberVisibilityType,
                qualificationAttachmentRequirementType: requestParameters.qualificationAttachmentRequirementType,
                expiryWarningPeriod: requestParameters.expiryWarningPeriod,
                sendExpiryWarning: requestParameters.sendExpiryWarning
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewRecord(qualificationLibraryItemsCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the [Qualification Library Items](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Qualification Library Item by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single [Qualification Library Item](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Qualification Library Item by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findByID(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QualificationLibraryItemsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findByID(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List all Qualification Library Items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllQualifications(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QualificationLibraryItems>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllQualifications(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Patch attributes of an existing [Qualification Library Items](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Qualification Library Item
         * @param {QualificationLibraryItemsApiUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRecord(requestParameters: QualificationLibraryItemsApiUpdateRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<QualificationLibraryItems>> {
            const qualificationLibraryItemsPatchRequest: QualificationLibraryItemsPatchRequest = {
                name: requestParameters.name,
                qualificationTypeId: requestParameters.qualificationTypeId,
                qualificationExpiryType: requestParameters.qualificationExpiryType,
                qualificationRegistrationNumberVisibilityType: requestParameters.qualificationRegistrationNumberVisibilityType,
                qualificationAttachmentRequirementType: requestParameters.qualificationAttachmentRequirementType,
                expiryWarningPeriod: requestParameters.expiryWarningPeriod,
                sendExpiryWarning: requestParameters.sendExpiryWarning
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecord(qualificationLibraryItemsPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * QualificationLibraryItemsApi - factory interface
 * @export
 */
export const QualificationLibraryItemsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = QualificationLibraryItemsApiFp(configuration)
    return {
        /**
         * Create a new [Qualification Library Item](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Create a new Qualification Library Item
         * @param {QualificationLibraryItemsApiCreateNewRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewRecord(requestParameters: QualificationLibraryItemsApiCreateNewRecordRequest, options?: AxiosRequestConfig): AxiosPromise<QualificationLibraryItems> {
            return localVarFp.createNewRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the [Qualification Library Items](https://developers.intellihr.io/docs/v1/) by the given ID.
         * @summary Delete a Qualification Library Item by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single [Qualification Library Item](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Qualification Library Item by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findByID(options?: AxiosRequestConfig): AxiosPromise<QualificationLibraryItemsList> {
            return localVarFp.findByID(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List all Qualification Library Items
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllQualifications(options?: AxiosRequestConfig): AxiosPromise<QualificationLibraryItems> {
            return localVarFp.getAllQualifications(options).then((request) => request(axios, basePath));
        },
        /**
         * Patch attributes of an existing [Qualification Library Items](https://developers.intellihr.io/docs/v1/) record with the provided data.
         * @summary Patch an existing Qualification Library Item
         * @param {QualificationLibraryItemsApiUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecord(requestParameters: QualificationLibraryItemsApiUpdateRecordRequest, options?: AxiosRequestConfig): AxiosPromise<QualificationLibraryItems> {
            return localVarFp.updateRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewRecord operation in QualificationLibraryItemsApi.
 * @export
 * @interface QualificationLibraryItemsApiCreateNewRecordRequest
 */
export type QualificationLibraryItemsApiCreateNewRecordRequest = {
    
} & QualificationLibraryItemsCreateRequest

/**
 * Request parameters for updateRecord operation in QualificationLibraryItemsApi.
 * @export
 * @interface QualificationLibraryItemsApiUpdateRecordRequest
 */
export type QualificationLibraryItemsApiUpdateRecordRequest = {
    
} & QualificationLibraryItemsPatchRequest

/**
 * QualificationLibraryItemsApiGenerated - object-oriented interface
 * @export
 * @class QualificationLibraryItemsApiGenerated
 * @extends {BaseAPI}
 */
export class QualificationLibraryItemsApiGenerated extends BaseAPI {
    /**
     * Create a new [Qualification Library Item](https://developers.intellihr.io/docs/v1/) record with the provided data.
     * @summary Create a new Qualification Library Item
     * @param {QualificationLibraryItemsApiCreateNewRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QualificationLibraryItemsApiGenerated
     */
    public createNewRecord(requestParameters: QualificationLibraryItemsApiCreateNewRecordRequest, options?: AxiosRequestConfig) {
        return QualificationLibraryItemsApiFp(this.configuration).createNewRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the [Qualification Library Items](https://developers.intellihr.io/docs/v1/) by the given ID.
     * @summary Delete a Qualification Library Item by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QualificationLibraryItemsApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return QualificationLibraryItemsApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single [Qualification Library Item](https://developers.intellihr.io/docs/v1/) by its identifier.
     * @summary Find a Qualification Library Item by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QualificationLibraryItemsApiGenerated
     */
    public findByID(options?: AxiosRequestConfig) {
        return QualificationLibraryItemsApiFp(this.configuration).findByID(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List all Qualification Library Items
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QualificationLibraryItemsApiGenerated
     */
    public getAllQualifications(options?: AxiosRequestConfig) {
        return QualificationLibraryItemsApiFp(this.configuration).getAllQualifications(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch attributes of an existing [Qualification Library Items](https://developers.intellihr.io/docs/v1/) record with the provided data.
     * @summary Patch an existing Qualification Library Item
     * @param {QualificationLibraryItemsApiUpdateRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof QualificationLibraryItemsApiGenerated
     */
    public updateRecord(requestParameters: QualificationLibraryItemsApiUpdateRecordRequest, options?: AxiosRequestConfig) {
        return QualificationLibraryItemsApiFp(this.configuration).updateRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
