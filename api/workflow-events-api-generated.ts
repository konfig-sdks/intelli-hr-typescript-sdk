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
import { WorkflowEvents } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WorkflowEventsApi - axios parameter creator
 * @export
 */
export const WorkflowEventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a single [Workflow Event](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Workflow Event by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/workflow-events/{id}`;
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
                pathTemplate: '/workflow-events/{id}',
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
 * WorkflowEventsApi - functional programming interface
 * @export
 */
export const WorkflowEventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WorkflowEventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a single [Workflow Event](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Workflow Event by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WorkflowEvents>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WorkflowEventsApi - factory interface
 * @export
 */
export const WorkflowEventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WorkflowEventsApiFp(configuration)
    return {
        /**
         * Returns a single [Workflow Event](https://developers.intellihr.io/docs/v1/) by its identifier.
         * @summary Find a Workflow Event by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findById(options?: AxiosRequestConfig): AxiosPromise<WorkflowEvents> {
            return localVarFp.findById(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkflowEventsApiGenerated - object-oriented interface
 * @export
 * @class WorkflowEventsApiGenerated
 * @extends {BaseAPI}
 */
export class WorkflowEventsApiGenerated extends BaseAPI {
    /**
     * Returns a single [Workflow Event](https://developers.intellihr.io/docs/v1/) by its identifier.
     * @summary Find a Workflow Event by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkflowEventsApiGenerated
     */
    public findById(options?: AxiosRequestConfig) {
        return WorkflowEventsApiFp(this.configuration).findById(options).then((request) => request(this.axios, this.basePath));
    }
}
