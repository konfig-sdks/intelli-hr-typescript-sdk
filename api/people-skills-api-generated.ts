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
import { PersonId } from '../models';
// @ts-ignore
import { PersonIdCreateRequest } from '../models';
// @ts-ignore
import { PersonIdList } from '../models';
// @ts-ignore
import { PersonIdPatchRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PeopleSkillsApi - axios parameter creator
 * @export
 */
export const PeopleSkillsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Assigns a [Skill](https://developers.intellihr.io/docs/v1/) to an existing [Person](https://developers.intellihr.io/docs/v1/)
         * @summary Assign a Skill to a Person
         * @param {string} personId Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
         * @param {PersonIdCreateRequest} personIdCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignSkillToPerson: async (personId: string, personIdCreateRequest: PersonIdCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('assignSkillToPerson', 'personId', personId)
            // verify required parameter 'personIdCreateRequest' is not null or undefined
            assertParamExists('assignSkillToPerson', 'personIdCreateRequest', personIdCreateRequest)
            const localVarPath = `/people/{personId}/skills`
                .replace(`{${"personId"}}`, encodeURIComponent(String(personId !== undefined ? personId : `-personId-`)));
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
                requestBody: personIdCreateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/people/{personId}/skills',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(personIdCreateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the assigned [Skill](https://developers.intellihr.io/docs/v1/) from a [Person](https://developers.intellihr.io/docs/v1/).
         * @summary Delete an Assigned Skill by ID
         * @param {string} personId Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssignedSkillById: async (personId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('deleteAssignedSkillById', 'personId', personId)
            const localVarPath = `/people/{personId}/skills/{id}`
                .replace(`{${"personId"}}`, encodeURIComponent(String(personId !== undefined ? personId : `-personId-`)));
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
                pathTemplate: '/people/{personId}/skills/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a single [Skill](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Person\'s Skill by ID
         * @param {string} personId Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSkillById: async (personId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('findSkillById', 'personId', personId)
            const localVarPath = `/people/{personId}/skills/{id}`
                .replace(`{${"personId"}}`, encodeURIComponent(String(personId !== undefined ? personId : `-personId-`)));
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
                pathTemplate: '/people/{personId}/skills/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all [Skills](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).  Note that this endpoint is not Paginated.
         * @summary List all Skills assigned to a Person
         * @param {string} personId Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPersonSkills: async (personId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('listPersonSkills', 'personId', personId)
            const localVarPath = `/people/{personId}/skills`
                .replace(`{${"personId"}}`, encodeURIComponent(String(personId !== undefined ? personId : `-personId-`)));
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
                pathTemplate: '/people/{personId}/skills',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update an assigned [Skill](https://developers.intellihr.io/docs/v1/) on a [Person](https://developers.intellihr.io/docs/v1/)
         * @summary Update an Assigned Skill
         * @param {string} personId Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
         * @param {PersonIdPatchRequest} personIdPatchRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAssignedSkill: async (personId: string, personIdPatchRequest: PersonIdPatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'personId' is not null or undefined
            assertParamExists('updateAssignedSkill', 'personId', personId)
            // verify required parameter 'personIdPatchRequest' is not null or undefined
            assertParamExists('updateAssignedSkill', 'personIdPatchRequest', personIdPatchRequest)
            const localVarPath = `/people/{personId}/skills/{id}`
                .replace(`{${"personId"}}`, encodeURIComponent(String(personId !== undefined ? personId : `-personId-`)));
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
                requestBody: personIdPatchRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/people/{personId}/skills/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(personIdPatchRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PeopleSkillsApi - functional programming interface
 * @export
 */
export const PeopleSkillsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PeopleSkillsApiAxiosParamCreator(configuration)
    return {
        /**
         * Assigns a [Skill](https://developers.intellihr.io/docs/v1/) to an existing [Person](https://developers.intellihr.io/docs/v1/)
         * @summary Assign a Skill to a Person
         * @param {PeopleSkillsApiAssignSkillToPersonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignSkillToPerson(requestParameters: PeopleSkillsApiAssignSkillToPersonRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonId>> {
            const personIdCreateRequest: PersonIdCreateRequest = {
                skillId: requestParameters.skillId,
                skillLevel: requestParameters.skillLevel
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignSkillToPerson(requestParameters.personId, personIdCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes the assigned [Skill](https://developers.intellihr.io/docs/v1/) from a [Person](https://developers.intellihr.io/docs/v1/).
         * @summary Delete an Assigned Skill by ID
         * @param {PeopleSkillsApiDeleteAssignedSkillByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAssignedSkillById(requestParameters: PeopleSkillsApiDeleteAssignedSkillByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteAssignedSkillById(requestParameters.personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a single [Skill](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Person\'s Skill by ID
         * @param {PeopleSkillsApiFindSkillByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findSkillById(requestParameters: PeopleSkillsApiFindSkillByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonId>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findSkillById(requestParameters.personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all [Skills](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).  Note that this endpoint is not Paginated.
         * @summary List all Skills assigned to a Person
         * @param {PeopleSkillsApiListPersonSkillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPersonSkills(requestParameters: PeopleSkillsApiListPersonSkillsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonIdList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPersonSkills(requestParameters.personId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update an assigned [Skill](https://developers.intellihr.io/docs/v1/) on a [Person](https://developers.intellihr.io/docs/v1/)
         * @summary Update an Assigned Skill
         * @param {PeopleSkillsApiUpdateAssignedSkillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateAssignedSkill(requestParameters: PeopleSkillsApiUpdateAssignedSkillRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PersonId>> {
            const personIdPatchRequest: PersonIdPatchRequest = {
                skillLevel: requestParameters.skillLevel
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateAssignedSkill(requestParameters.personId, personIdPatchRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PeopleSkillsApi - factory interface
 * @export
 */
export const PeopleSkillsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PeopleSkillsApiFp(configuration)
    return {
        /**
         * Assigns a [Skill](https://developers.intellihr.io/docs/v1/) to an existing [Person](https://developers.intellihr.io/docs/v1/)
         * @summary Assign a Skill to a Person
         * @param {PeopleSkillsApiAssignSkillToPersonRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignSkillToPerson(requestParameters: PeopleSkillsApiAssignSkillToPersonRequest, options?: AxiosRequestConfig): AxiosPromise<PersonId> {
            return localVarFp.assignSkillToPerson(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the assigned [Skill](https://developers.intellihr.io/docs/v1/) from a [Person](https://developers.intellihr.io/docs/v1/).
         * @summary Delete an Assigned Skill by ID
         * @param {PeopleSkillsApiDeleteAssignedSkillByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAssignedSkillById(requestParameters: PeopleSkillsApiDeleteAssignedSkillByIdRequest, options?: AxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteAssignedSkillById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a single [Skill](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).
         * @summary Find a Person\'s Skill by ID
         * @param {PeopleSkillsApiFindSkillByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSkillById(requestParameters: PeopleSkillsApiFindSkillByIdRequest, options?: AxiosRequestConfig): AxiosPromise<PersonId> {
            return localVarFp.findSkillById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all [Skills](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).  Note that this endpoint is not Paginated.
         * @summary List all Skills assigned to a Person
         * @param {PeopleSkillsApiListPersonSkillsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPersonSkills(requestParameters: PeopleSkillsApiListPersonSkillsRequest, options?: AxiosRequestConfig): AxiosPromise<PersonIdList> {
            return localVarFp.listPersonSkills(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update an assigned [Skill](https://developers.intellihr.io/docs/v1/) on a [Person](https://developers.intellihr.io/docs/v1/)
         * @summary Update an Assigned Skill
         * @param {PeopleSkillsApiUpdateAssignedSkillRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateAssignedSkill(requestParameters: PeopleSkillsApiUpdateAssignedSkillRequest, options?: AxiosRequestConfig): AxiosPromise<PersonId> {
            return localVarFp.updateAssignedSkill(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignSkillToPerson operation in PeopleSkillsApi.
 * @export
 * @interface PeopleSkillsApiAssignSkillToPersonRequest
 */
export type PeopleSkillsApiAssignSkillToPersonRequest = {
    
    /**
    * Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
    * @type {string}
    * @memberof PeopleSkillsApiAssignSkillToPerson
    */
    readonly personId: string
    
} & PersonIdCreateRequest

/**
 * Request parameters for deleteAssignedSkillById operation in PeopleSkillsApi.
 * @export
 * @interface PeopleSkillsApiDeleteAssignedSkillByIdRequest
 */
export type PeopleSkillsApiDeleteAssignedSkillByIdRequest = {
    
    /**
    * Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
    * @type {string}
    * @memberof PeopleSkillsApiDeleteAssignedSkillById
    */
    readonly personId: string
    
}

/**
 * Request parameters for findSkillById operation in PeopleSkillsApi.
 * @export
 * @interface PeopleSkillsApiFindSkillByIdRequest
 */
export type PeopleSkillsApiFindSkillByIdRequest = {
    
    /**
    * Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
    * @type {string}
    * @memberof PeopleSkillsApiFindSkillById
    */
    readonly personId: string
    
}

/**
 * Request parameters for listPersonSkills operation in PeopleSkillsApi.
 * @export
 * @interface PeopleSkillsApiListPersonSkillsRequest
 */
export type PeopleSkillsApiListPersonSkillsRequest = {
    
    /**
    * Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
    * @type {string}
    * @memberof PeopleSkillsApiListPersonSkills
    */
    readonly personId: string
    
}

/**
 * Request parameters for updateAssignedSkill operation in PeopleSkillsApi.
 * @export
 * @interface PeopleSkillsApiUpdateAssignedSkillRequest
 */
export type PeopleSkillsApiUpdateAssignedSkillRequest = {
    
    /**
    * Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)
    * @type {string}
    * @memberof PeopleSkillsApiUpdateAssignedSkill
    */
    readonly personId: string
    
} & PersonIdPatchRequest

/**
 * PeopleSkillsApiGenerated - object-oriented interface
 * @export
 * @class PeopleSkillsApiGenerated
 * @extends {BaseAPI}
 */
export class PeopleSkillsApiGenerated extends BaseAPI {
    /**
     * Assigns a [Skill](https://developers.intellihr.io/docs/v1/) to an existing [Person](https://developers.intellihr.io/docs/v1/)
     * @summary Assign a Skill to a Person
     * @param {PeopleSkillsApiAssignSkillToPersonRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSkillsApiGenerated
     */
    public assignSkillToPerson(requestParameters: PeopleSkillsApiAssignSkillToPersonRequest, options?: AxiosRequestConfig) {
        return PeopleSkillsApiFp(this.configuration).assignSkillToPerson(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the assigned [Skill](https://developers.intellihr.io/docs/v1/) from a [Person](https://developers.intellihr.io/docs/v1/).
     * @summary Delete an Assigned Skill by ID
     * @param {PeopleSkillsApiDeleteAssignedSkillByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSkillsApiGenerated
     */
    public deleteAssignedSkillById(requestParameters: PeopleSkillsApiDeleteAssignedSkillByIdRequest, options?: AxiosRequestConfig) {
        return PeopleSkillsApiFp(this.configuration).deleteAssignedSkillById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a single [Skill](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).
     * @summary Find a Person\'s Skill by ID
     * @param {PeopleSkillsApiFindSkillByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSkillsApiGenerated
     */
    public findSkillById(requestParameters: PeopleSkillsApiFindSkillByIdRequest, options?: AxiosRequestConfig) {
        return PeopleSkillsApiFp(this.configuration).findSkillById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all [Skills](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).  Note that this endpoint is not Paginated.
     * @summary List all Skills assigned to a Person
     * @param {PeopleSkillsApiListPersonSkillsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSkillsApiGenerated
     */
    public listPersonSkills(requestParameters: PeopleSkillsApiListPersonSkillsRequest, options?: AxiosRequestConfig) {
        return PeopleSkillsApiFp(this.configuration).listPersonSkills(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update an assigned [Skill](https://developers.intellihr.io/docs/v1/) on a [Person](https://developers.intellihr.io/docs/v1/)
     * @summary Update an Assigned Skill
     * @param {PeopleSkillsApiUpdateAssignedSkillRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PeopleSkillsApiGenerated
     */
    public updateAssignedSkill(requestParameters: PeopleSkillsApiUpdateAssignedSkillRequest, options?: AxiosRequestConfig) {
        return PeopleSkillsApiFp(this.configuration).updateAssignedSkill(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
