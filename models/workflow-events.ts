/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkflowEventProperty } from './workflow-event-property';
import { WorkflowEventsMeta } from './workflow-events-meta';

/**
 * 
 * @export
 * @interface WorkflowEvents
 */
export interface WorkflowEvents {
    /**
     * 
     * @type {WorkflowEventProperty}
     * @memberof WorkflowEvents
     */
    'data'?: WorkflowEventProperty;
    /**
     * 
     * @type {WorkflowEventsMeta}
     * @memberof WorkflowEvents
     */
    'meta'?: WorkflowEventsMeta;
}

