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
import { WorkRights } from '../models';
// @ts-ignore
import { WorkRightsList } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WorkRightsApi - axios parameter creator
 * @export
 */
export const WorkRightsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single work right.
         * @summary Find a Work Right by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWorkRightById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/work-rights/{id}`;
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
                pathTemplate: '/work-rights/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Work Rights](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all Work Rights
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/work-rights`;
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
                pathTemplate: '/work-rights',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WorkRightsApi - functional programming interface
 * @export
 */
export const WorkRightsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkRightsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single work right.
         * @summary Find a Work Right by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findWorkRightById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkRights>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findWorkRightById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Work Rights](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all Work Rights
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkRightsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkRightsApi - factory interface
 * @export
 */
export const WorkRightsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkRightsApiFp(configuration)
    return {
        /**
         * Returns a single work right.
         * @summary Find a Work Right by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWorkRightById(options?: AxiosRequestConfig): AxiosPromise<WorkRights> {
            return localVarFp.findWorkRightById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Work Rights](https://developers.intellihr.io/docs/v1/) recorded in the system.
         * @summary List all Work Rights
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(options?: AxiosRequestConfig): AxiosPromise<WorkRightsList> {
            return localVarFp.listAll(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkRightsApiGenerated - object-oriented interface
 * @export
 * @class WorkRightsApiGenerated
 * @extends {BaseAPI}
 */
export class WorkRightsApiGenerated extends BaseAPI {
    /**
     * Returns a single work right.
     * @summary Find a Work Right by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkRightsApiGenerated
     */
    public findWorkRightById(options?: AxiosRequestConfig) {
        return WorkRightsApiFp(this.configuration).findWorkRightById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Work Rights](https://developers.intellihr.io/docs/v1/) recorded in the system.
     * @summary List all Work Rights
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkRightsApiGenerated
     */
    public listAll(options?: AxiosRequestConfig) {
        return WorkRightsApiFp(this.configuration).listAll(options).then((request) => request(this.axios, this.basePath));
    }
}
