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
import { Trainings } from '../models';
// @ts-ignore
import { TrainingsCreateRequest } from '../models';
// @ts-ignore
import { TrainingsCreateRequestCoordinatorPerson } from '../models';
// @ts-ignore
import { TrainingsCreateRequestCustomFieldsValue } from '../models';
// @ts-ignore
import { TrainingsCreateRequestJob } from '../models';
// @ts-ignore
import { TrainingsCreateRequestPerson } from '../models';
// @ts-ignore
import { TrainingsCreateRequestProvider } from '../models';
// @ts-ignore
import { TrainingsCreateRequestStatus } from '../models';
// @ts-ignore
import { TrainingsCreateRequestType } from '../models';
// @ts-ignore
import { TrainingsList } from '../models';
// @ts-ignore
import { TrainingsListAllFiltersParameter } from '../models';
// @ts-ignore
import { TrainingsPatchRequest } from '../models';
// @ts-ignore
import { TrainingsPatchRequestCoordinatorPerson } from '../models';
// @ts-ignore
import { TrainingsPatchRequestCustomFieldsValue } from '../models';
// @ts-ignore
import { TrainingsPatchRequestJob } from '../models';
// @ts-ignore
import { TrainingsPatchRequestPerson } from '../models';
// @ts-ignore
import { TrainingsPatchRequestProvider } from '../models';
// @ts-ignore
import { TrainingsPatchRequestStatus } from '../models';
// @ts-ignore
import { TrainingsPatchRequestType } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TrainingsApi - axios parameter creator
 * @export
 */
export const TrainingsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Training
         * @summary 
         * @param {TrainingsCreateRequest} trainingsCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewTraining: async (trainingsCreateRequest: TrainingsCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trainingsCreateRequest' is not null or undefined
            assertParamExists('createNewTraining', 'trainingsCreateRequest', trainingsCreateRequest)
            const localVarPath = `/trainings`;
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
                requestBody: trainingsCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/trainings',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(trainingsCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the provided [Training](https://developers.intellihr.io/docs/v1/) record.
         * @summary Delete a Training by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trainings/{id}`;
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
                pathTemplate: '/trainings/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single [Training](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Training by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTrainingById: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trainings/{id}`;
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
                pathTemplate: '/trainings/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Trainings](https://developers.intellihr.io/docs/v1/).
         * @summary List all Trainings
         * @param {TrainingsListAllFiltersParameter} [filters] Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format &#x60;filters[&lt;filter_name&gt;][&lt;operation_type&gt;]&#x3D;&lt;filter_value&gt;&#x60;.For example, a filter to get items matching a specific filter value would be &#x60;filters[name][eq]&#x3D;Accounting%20Compliance%20101&#x60;  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality &#x60;[eq]&#x60;: Checks for an exact match with the given filter value  The list of supported filters is given below.
         * @param {string} [sort] Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be &#x60;-createdAt&#x60;.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (filters?: TrainingsListAllFiltersParameter, sort?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/trainings`;
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
                pathTemplate: '/trainings',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update a Training
         * @summary 
         * @param {TrainingsPatchRequest} trainingsPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTrainingById: async (trainingsPatchRequest: TrainingsPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trainingsPatchRequest' is not null or undefined
            assertParamExists('updateTrainingById', 'trainingsPatchRequest', trainingsPatchRequest)
            const localVarPath = `/trainings/{id}`;
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
                requestBody: trainingsPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/trainings/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(trainingsPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TrainingsApi - functional programming interface
 * @export
 */
export const TrainingsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TrainingsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new Training
         * @summary 
         * @param {TrainingsApiCreateNewTrainingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewTraining(requestParameters: TrainingsApiCreateNewTrainingRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Trainings>> {
            const trainingsCreateRequest: TrainingsCreateRequest = {
                coordinatorPerson: requestParameters.coordinatorPerson,
                completionDate: requestParameters.completionDate,
                cost: requestParameters.cost,
                currency: requestParameters.currency,
                hours: requestParameters.hours,
                job: requestParameters.job,
                name: requestParameters.name,
                person: requestParameters.person,
                provider: requestParameters.provider,
                type: requestParameters.type,
                customFields: requestParameters.customFields,
                status: requestParameters.status
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewTraining(trainingsCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the provided [Training](https://developers.intellihr.io/docs/v1/) record.
         * @summary Delete a Training by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single [Training](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Training by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findTrainingById(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Trainings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findTrainingById(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Trainings](https://developers.intellihr.io/docs/v1/).
         * @summary List all Trainings
         * @param {TrainingsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: TrainingsApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrainingsList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.filters, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update a Training
         * @summary 
         * @param {TrainingsApiUpdateTrainingByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateTrainingById(requestParameters: TrainingsApiUpdateTrainingByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Trainings>> {
            const trainingsPatchRequest: TrainingsPatchRequest = {
                coordinatorPerson: requestParameters.coordinatorPerson,
                completionDate: requestParameters.completionDate,
                cost: requestParameters.cost,
                currency: requestParameters.currency,
                hours: requestParameters.hours,
                job: requestParameters.job,
                name: requestParameters.name,
                person: requestParameters.person,
                provider: requestParameters.provider,
                type: requestParameters.type,
                customFields: requestParameters.customFields,
                status: requestParameters.status
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateTrainingById(trainingsPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TrainingsApi - factory interface
 * @export
 */
export const TrainingsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TrainingsApiFp(configuration)
    return {
        /**
         * Create a new Training
         * @summary 
         * @param {TrainingsApiCreateNewTrainingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewTraining(requestParameters: TrainingsApiCreateNewTrainingRequest, options?: AxiosRequestConfig): AxiosPromise<Trainings> {
            return localVarFp.createNewTraining(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the provided [Training](https://developers.intellihr.io/docs/v1/) record.
         * @summary Delete a Training by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single [Training](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Training by ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTrainingById(options?: AxiosRequestConfig): AxiosPromise<Trainings> {
            return localVarFp.findTrainingById(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Trainings](https://developers.intellihr.io/docs/v1/).
         * @summary List all Trainings
         * @param {TrainingsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: TrainingsApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<TrainingsList> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a Training
         * @summary 
         * @param {TrainingsApiUpdateTrainingByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateTrainingById(requestParameters: TrainingsApiUpdateTrainingByIdRequest, options?: AxiosRequestConfig): AxiosPromise<Trainings> {
            return localVarFp.updateTrainingById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewTraining operation in TrainingsApi.
 * @export
 * @interface TrainingsApiCreateNewTrainingRequest
 */
export type TrainingsApiCreateNewTrainingRequest = {
    
} & TrainingsCreateRequest

/**
 * Request parameters for listAll operation in TrainingsApi.
 * @export
 * @interface TrainingsApiListAllRequest
 */
export type TrainingsApiListAllRequest = {
    
    /**
    * Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Accounting%20Compliance%20101`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.
    * @type {TrainingsListAllFiltersParameter}
    * @memberof TrainingsApiListAll
    */
    readonly filters?: TrainingsListAllFiltersParameter
    
    /**
    * Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`.
    * @type {string}
    * @memberof TrainingsApiListAll
    */
    readonly sort?: string
    
}

/**
 * Request parameters for updateTrainingById operation in TrainingsApi.
 * @export
 * @interface TrainingsApiUpdateTrainingByIdRequest
 */
export type TrainingsApiUpdateTrainingByIdRequest = {
    
} & TrainingsPatchRequest

/**
 * TrainingsApiGenerated - object-oriented interface
 * @export
 * @class TrainingsApiGenerated
 * @extends {BaseAPI}
 */
export class TrainingsApiGenerated extends BaseAPI {
    /**
     * Create a new Training
     * @summary 
     * @param {TrainingsApiCreateNewTrainingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingsApiGenerated
     */
    public createNewTraining(requestParameters: TrainingsApiCreateNewTrainingRequest, options?: AxiosRequestConfig) {
        return TrainingsApiFp(this.configuration).createNewTraining(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the provided [Training](https://developers.intellihr.io/docs/v1/) record.
     * @summary Delete a Training by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingsApiGenerated
     */
    public deleteById(options?: AxiosRequestConfig) {
        return TrainingsApiFp(this.configuration).deleteById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single [Training](https://developers.intellihr.io/docs/v1/).
     * @summary Find a Training by ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingsApiGenerated
     */
    public findTrainingById(options?: AxiosRequestConfig) {
        return TrainingsApiFp(this.configuration).findTrainingById(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Trainings](https://developers.intellihr.io/docs/v1/).
     * @summary List all Trainings
     * @param {TrainingsApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingsApiGenerated
     */
    public listAll(requestParameters: TrainingsApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return TrainingsApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update a Training
     * @summary 
     * @param {TrainingsApiUpdateTrainingByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TrainingsApiGenerated
     */
    public updateTrainingById(requestParameters: TrainingsApiUpdateTrainingByIdRequest, options?: AxiosRequestConfig) {
        return TrainingsApiFp(this.configuration).updateTrainingById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
