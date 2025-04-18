/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { JobCreateRequestBusinessEntity } from './job-create-request-business-entity';
import { JobCreateRequestBusinessUnit } from './job-create-request-business-unit';
import { JobCreateRequestCustomFieldsValue } from './job-create-request-custom-fields-value';
import { JobCreateRequestEmploymentCondition } from './job-create-request-employment-condition';
import { JobCreateRequestEstablishment } from './job-create-request-establishment';
import { JobCreateRequestLocation } from './job-create-request-location';
import { JobCreateRequestPayGrade } from './job-create-request-pay-grade';
import { JobCreateRequestPerson } from './job-create-request-person';
import { JobCreateRequestRecruitment } from './job-create-request-recruitment';
import { JobCreateRequestRemunerationSchedule } from './job-create-request-remuneration-schedule';
import { JobCreateRequestSupervisorJob } from './job-create-request-supervisor-job';
import { JobCreateRequestSupervisorPerson } from './job-create-request-supervisor-person';
import { JobCreateRequestWorkClass } from './job-create-request-work-class';
import { JobCreateRequestWorkType } from './job-create-request-work-type';

/**
 * 
 * @export
 * @interface JobCreateRequest
 */
export interface JobCreateRequest {
    /**
     * 
     * @type {JobCreateRequestPerson}
     * @memberof JobCreateRequest
     */
    'person': JobCreateRequestPerson;
    /**
     * The date this [Job](https://developers.intellihr.io/docs/v1/) started or will start within the organisation. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof JobCreateRequest
     */
    'companyStartDate': string;
    /**
     * The <b>exclusive</b> date this [Job](https://developers.intellihr.io/docs/v1/) ended or will end within the organisation. For example, if the person\'s last working date is on 2025-04-23, the `companyEndDate` should be set as 2025-04-24 to reflect the exclusive date. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof JobCreateRequest
     */
    'companyEndDate'?: string;
    /**
     * The date this [Job](https://developers.intellihr.io/docs/v1/) started or will start within the organisation. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof JobCreateRequest
     * @deprecated
     */
    'startDate'?: string;
    /**
     * The <b>exclusive</b> date this [Job](https://developers.intellihr.io/docs/v1/) ended or will end within the organisation. For example, if the person\'s last working date is on 2025-04-23, the `endDate` should be set as 2025-04-24 to reflect the exclusive date. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof JobCreateRequest
     * @deprecated
     */
    'endDate'?: string;
    /**
     * The job name assigned to this [Job](https://developers.intellihr.io/docs/v1/). Will attempt to match to an existing [Position Title](https://developers.intellihr.io/docs/v1/), otherwise creates a new [Position Title](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobCreateRequest
     */
    'name': string;
    /**
     * 
     * @type {JobCreateRequestBusinessEntity}
     * @memberof JobCreateRequest
     */
    'businessEntity': JobCreateRequestBusinessEntity;
    /**
     * 
     * @type {JobCreateRequestBusinessUnit}
     * @memberof JobCreateRequest
     */
    'businessUnit': JobCreateRequestBusinessUnit;
    /**
     * 
     * @type {JobCreateRequestEstablishment}
     * @memberof JobCreateRequest
     */
    'establishment'?: JobCreateRequestEstablishment;
    /**
     * 
     * @type {JobCreateRequestSupervisorPerson}
     * @memberof JobCreateRequest
     */
    'supervisorPerson'?: JobCreateRequestSupervisorPerson;
    /**
     * 
     * @type {JobCreateRequestSupervisorJob}
     * @memberof JobCreateRequest
     */
    'supervisorJob'?: JobCreateRequestSupervisorJob;
    /**
     * 
     * @type {JobCreateRequestLocation}
     * @memberof JobCreateRequest
     */
    'location'?: JobCreateRequestLocation;
    /**
     * 
     * @type {JobCreateRequestWorkClass}
     * @memberof JobCreateRequest
     */
    'workClass': JobCreateRequestWorkClass;
    /**
     * 
     * @type {JobCreateRequestWorkType}
     * @memberof JobCreateRequest
     */
    'workType'?: JobCreateRequestWorkType;
    /**
     * The full time equivalent of this [Job](https://developers.intellihr.io/docs/v1/). Indicating the workload of an employee that can be comparable across different contexts. This is null for people without an FTE.
     * @type {string}
     * @memberof JobCreateRequest
     */
    'fte'?: string;
    /**
     * 
     * @type {JobCreateRequestPayGrade}
     * @memberof JobCreateRequest
     */
    'payGrade'?: JobCreateRequestPayGrade;
    /**
     * 
     * @type {JobCreateRequestEmploymentCondition}
     * @memberof JobCreateRequest
     */
    'employmentCondition'?: JobCreateRequestEmploymentCondition;
    /**
     * 
     * @type {JobCreateRequestRemunerationSchedule}
     * @memberof JobCreateRequest
     */
    'remunerationSchedule'?: JobCreateRequestRemunerationSchedule;
    /**
     * 
     * @type {JobCreateRequestRecruitment}
     * @memberof JobCreateRequest
     */
    'recruitment'?: JobCreateRequestRecruitment;
    /**
     * The custom field values for this Job
     * @type {{ [key: string]: JobCreateRequestCustomFieldsValue; }}
     * @memberof JobCreateRequest
     */
    'customFields'?: { [key: string]: JobCreateRequestCustomFieldsValue; };
}

