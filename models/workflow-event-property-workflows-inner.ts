/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkflowEventPropertyWorkflowsInnerWorkflowFormDesignsInner } from './workflow-event-property-workflows-inner-workflow-form-designs-inner';

/**
 * 
 * @export
 * @interface WorkflowEventPropertyWorkflowsInner
 */
export interface WorkflowEventPropertyWorkflowsInner {
    /**
     * The description of this [Workflow](https://developers.intellihr.io/docs/v1/). This description would normally be shown to users of the system.
     * @type {string}
     * @memberof WorkflowEventPropertyWorkflowsInner
     */
    'description'?: string;
    /**
     * The identifier string for the [Workflow](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof WorkflowEventPropertyWorkflowsInner
     */
    'id'?: string;
    /**
     * Name given to this [Workflow](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.
     * @type {string}
     * @memberof WorkflowEventPropertyWorkflowsInner
     */
    'name'?: string;
    /**
     * An array of Workflow Form Designs that belong to this [Workflow](https://developers.intellihr.io/docs/v1/).
     * @type {Array<WorkflowEventPropertyWorkflowsInnerWorkflowFormDesignsInner>}
     * @memberof WorkflowEventPropertyWorkflowsInner
     */
    'workflowFormDesigns'?: Array<WorkflowEventPropertyWorkflowsInnerWorkflowFormDesignsInner>;
}

