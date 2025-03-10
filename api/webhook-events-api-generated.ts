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
import { WebhookEvents } from '../models';
// @ts-ignore
import { WebhookEventsList } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WebhookEventsApi - axios parameter creator
 * @export
 */
export const WebhookEventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single [Webhook Event](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Webhook Event by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEventById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhook-events/{id}`;
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
                pathTemplate: '/webhook-events/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Webhook Events](https://developers.intellihr.io/docs/v1/).
         * @summary List all Webhook Events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllEvents: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/webhook-events`;
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
                pathTemplate: '/webhook-events',
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
 * WebhookEventsApi - functional programming interface
 * @export
 */
export const WebhookEventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebhookEventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single [Webhook Event](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Webhook Event by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findEventById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEvents>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findEventById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Webhook Events](https://developers.intellihr.io/docs/v1/).
         * @summary List all Webhook Events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAllEvents(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WebhookEventsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAllEvents(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WebhookEventsApi - factory interface
 * @export
 */
export const WebhookEventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebhookEventsApiFp(configuration)
    return {
        /**
         * Returns a single [Webhook Event](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Webhook Event by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEventById(options?: AxiosRequestConfig): AxiosPromise<WebhookEvents> {
            return localVarFp.findEventById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Webhook Events](https://developers.intellihr.io/docs/v1/).
         * @summary List all Webhook Events
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAllEvents(options?: AxiosRequestConfig): AxiosPromise<WebhookEventsList> {
            return localVarFp.listAllEvents(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebhookEventsApiGenerated - object-oriented interface
 * @export
 * @class WebhookEventsApiGenerated
 * @extends {BaseAPI}
 */
export class WebhookEventsApiGenerated extends BaseAPI {
    /**
     * Returns a single [Webhook Event](https://developers.intellihr.io/docs/v1/).
     * @summary Find a Webhook Event by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEventsApiGenerated
     */
    public findEventById(options?: AxiosRequestConfig) {
        return WebhookEventsApiFp(this.configuration).findEventById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Webhook Events](https://developers.intellihr.io/docs/v1/).
     * @summary List all Webhook Events
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhookEventsApiGenerated
     */
    public listAllEvents(options?: AxiosRequestConfig) {
        return WebhookEventsApiFp(this.configuration).listAllEvents(options).then((request) => request(this.axios, this.basePath));
    }
}
