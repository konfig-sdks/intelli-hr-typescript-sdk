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
import { Webhooks } from '../models';
// @ts-ignore
import { WebhooksCreate } from '../models';
// @ts-ignore
import { WebhooksList } from '../models';
// @ts-ignore
import { WebhooksPatch } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
export const WebhooksApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a Webhook
         * @param {WebhooksCreate} webhooksCreate 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook: async (webhooksCreate: WebhooksCreate, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhooksCreate' is not null or undefined
            assertParamExists('createWebhook', 'webhooksCreate', webhooksCreate)
            const localVarPath = `/webhooks`;
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
                requestBody: webhooksCreate,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/webhooks',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(webhooksCreate, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the provided webhook.
         * @summary Delete a Webhook by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/{id}`;
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
                pathTemplate: '/webhooks/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single webhook.
         * @summary Find a Webhook by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks/{id}`;
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
                pathTemplate: '/webhooks/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all webhooks.
         * @summary List all Webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhooks`;
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
                pathTemplate: '/webhooks',
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
         * @summary Patch a Webhook
         * @param {WebhooksPatch} webhooksPatch 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook: async (webhooksPatch: WebhooksPatch, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'webhooksPatch' is not null or undefined
            assertParamExists('updateWebhook', 'webhooksPatch', webhooksPatch)
            const localVarPath = `/webhooks/{id}`;
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
                requestBody: webhooksPatch,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/webhooks/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(webhooksPatch, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WebhooksApi - functional programming interface
 * @export
 */
export const WebhooksApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhooksApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a Webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWebhook(requestParameters: WebhooksApiCreateWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhooks>> {
            const webhooksCreate: WebhooksCreate = {
                url: requestParameters.url,
                webhookEvent: requestParameters.webhookEvent,
                isEnabled: requestParameters.isEnabled,
                source: requestParameters.source
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWebhook(webhooksCreate, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the provided webhook.
         * @summary Delete a Webhook by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single webhook.
         * @summary Find a Webhook by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhooks>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all webhooks.
         * @summary List all Webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhooksList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Patch a Webhook
         * @param {WebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateWebhook(requestParameters: WebhooksApiUpdateWebhookRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Webhooks>> {
            const webhooksPatch: WebhooksPatch = {
                url: requestParameters.url,
                webhookEvent: requestParameters.webhookEvent,
                isEnabled: requestParameters.isEnabled,
                source: requestParameters.source
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateWebhook(webhooksPatch, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhooksApi - factory interface
 * @export
 */
export const WebhooksApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhooksApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a Webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook(requestParameters: WebhooksApiCreateWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<Webhooks> {
            return localVarFp.createWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the provided webhook.
         * @summary Delete a Webhook by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single webhook.
         * @summary Find a Webhook by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById(options?: AxiosRequestConfig): AxiosPromise<Webhooks> {
            return localVarFp.findById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all webhooks.
         * @summary List all Webhooks
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(options?: AxiosRequestConfig): AxiosPromise<WebhooksList> {
            return localVarFp.listAll(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Patch a Webhook
         * @param {WebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateWebhook(requestParameters: WebhooksApiUpdateWebhookRequest, options?: AxiosRequestConfig): AxiosPromise<Webhooks> {
            return localVarFp.updateWebhook(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiCreateWebhookRequest
 */
export type WebhooksApiCreateWebhookRequest = {
    
} & WebhooksCreate

/**
 * Request parameters for updateWebhook operation in WebhooksApi.
 * @export
 * @interface WebhooksApiUpdateWebhookRequest
 */
export type WebhooksApiUpdateWebhookRequest = {
    
} & WebhooksPatch

/**
 * WebhooksApiGenerated - object-oriented interface
 * @export
 * @class WebhooksApiGenerated
 * @extends {BaseAPI}
 */
export class WebhooksApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create a Webhook
     * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public createWebhook(requestParameters: WebhooksApiCreateWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).createWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the provided webhook.
     * @summary Delete a Webhook by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single webhook.
     * @summary Find a Webhook by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public findById(options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).findById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all webhooks.
     * @summary List all Webhooks
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public listAll(options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).listAll(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Patch a Webhook
     * @param {WebhooksApiUpdateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApiGenerated
     */
    public updateWebhook(requestParameters: WebhooksApiUpdateWebhookRequest, options?: AxiosRequestConfig) {
        return WebhooksApiFp(this.configuration).updateWebhook(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
