/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomFieldsResponse } from './custom-fields-response';
import { JobEndPatchResponseDataJobFte } from './job-end-patch-response-data-job-fte';
import { JobEndPatchResponseDataJobTurnoverReason } from './job-end-patch-response-data-job-turnover-reason';
import { JobEndPatchResponseDataJobTurnoverType } from './job-end-patch-response-data-job-turnover-type';
import { JobProperty4BusinessEntity } from './job-property4-business-entity';
import { JobProperty4BusinessUnit } from './job-property4-business-unit';
import { JobProperty4CommentsInner } from './job-property4-comments-inner';
import { JobProperty4CreatedBy } from './job-property4-created-by';
import { JobProperty4EmploymentCondition } from './job-property4-employment-condition';
import { JobProperty4Establishment } from './job-property4-establishment';
import { JobProperty4ExtendedLeave } from './job-property4-extended-leave';
import { JobProperty4LastestJobChangeComment } from './job-property4-lastest-job-change-comment';
import { JobProperty4Location } from './job-property4-location';
import { JobProperty4PayGrade } from './job-property4-pay-grade';
import { JobProperty4Person } from './job-property4-person';
import { JobProperty4PositionTitle } from './job-property4-position-title';
import { JobProperty4Recruitment } from './job-property4-recruitment';
import { JobProperty4RemunerationSchedule } from './job-property4-remuneration-schedule';
import { JobProperty4SupervisorJob } from './job-property4-supervisor-job';
import { JobProperty4SupervisorPerson } from './job-property4-supervisor-person';
import { JobProperty4UpdatedBy } from './job-property4-updated-by';
import { RFC3339DatetimeProperty3 } from './rfc3339-datetime-property3';

/**
 * 
 * @export
 * @interface JobProperty4
 */
export interface JobProperty4 {
    /**
     * The identifier string for the [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty4
     */
    'id'?: string;
    /**
     * 
     * @type {JobProperty4Person}
     * @memberof JobProperty4
     */
    'person'?: JobProperty4Person;
    /**
     * 
     * @type {JobProperty4Recruitment}
     * @memberof JobProperty4
     */
    'recruitment'?: JobProperty4Recruitment;
    /**
     * 
     * @type {JobProperty4ExtendedLeave}
     * @memberof JobProperty4
     */
    'extendedLeave'?: JobProperty4ExtendedLeave;
    /**
     * 
     * @type {JobProperty4Location}
     * @memberof JobProperty4
     */
    'location'?: JobProperty4Location;
    /**
     * 
     * @type {JobProperty4PayGrade}
     * @memberof JobProperty4
     */
    'payGrade'?: JobProperty4PayGrade;
    /**
     * 
     * @type {JobProperty4BusinessUnit}
     * @memberof JobProperty4
     */
    'businessUnit'?: JobProperty4BusinessUnit;
    /**
     * 
     * @type {JobProperty4BusinessEntity}
     * @memberof JobProperty4
     */
    'businessEntity'?: JobProperty4BusinessEntity;
    /**
     * 
     * @type {JobProperty4Establishment}
     * @memberof JobProperty4
     */
    'establishment'?: JobProperty4Establishment;
    /**
     * 
     * @type {JobProperty4SupervisorJob}
     * @memberof JobProperty4
     */
    'supervisorJob'?: JobProperty4SupervisorJob;
    /**
     * 
     * @type {JobProperty4SupervisorPerson}
     * @memberof JobProperty4
     */
    'supervisorPerson'?: JobProperty4SupervisorPerson;
    /**
     * 
     * @type {JobProperty4EmploymentCondition}
     * @memberof JobProperty4
     */
    'employmentCondition'?: JobProperty4EmploymentCondition;
    /**
     * 
     * @type {JobProperty4RemunerationSchedule}
     * @memberof JobProperty4
     */
    'remunerationSchedule'?: JobProperty4RemunerationSchedule;
    /**
     * The name of this [Job](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty4
     */
    'name'?: string;
    /**
     * 
     * @type {JobProperty4PositionTitle}
     * @memberof JobProperty4
     */
    'positionTitle'?: JobProperty4PositionTitle;
    /**
     * 
     * @type {JobEndPatchResponseDataJobFte}
     * @memberof JobProperty4
     */
    'fte'?: JobEndPatchResponseDataJobFte;
    /**
     * An array of comment objects that annotate the reason for [Job](https://developers.intellihr.io/docs/v1/) changes. Will be an empty array when there has been no updates to the Job.
     * @type {Array<JobProperty4CommentsInner>}
     * @memberof JobProperty4
     */
    'comments'?: Array<JobProperty4CommentsInner>;
    /**
     * 
     * @type {JobProperty4LastestJobChangeComment}
     * @memberof JobProperty4
     */
    'lastestJobChangeComment'?: JobProperty4LastestJobChangeComment;
    /**
     * The [Work Class](https://developers.intellihr.io/docs/v1/) of this [Job](https://developers.intellihr.io/docs/v1/). This is extra details about the [Work Type](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof JobProperty4
     */
    'workClass'?: string;
    /**
     * This is the [Work Classification](https://developers.intellihr.io/docs/v1/) for this [Job](https://developers.intellihr.io/docs/v1/), it is used to differentiate between full-time and part time employees vs unpaid volunteers. Enum: `Permanent`, `Fixed Contract`, `Unpaid`, `Temporary/Casual`, `Independent Contract`.
     * @type {string}
     * @memberof JobProperty4
     */
    'workType'?: string;
    /**
     * Whether this job is the primary job on the [Person](https://developers.intellihr.io/docs/v1/). Only one job on a [Person](https://developers.intellihr.io/docs/v1/) can be primary at a time.
     * @type {boolean}
     * @memberof JobProperty4
     */
    'isPrimaryJob'?: boolean;
    /**
     * The current status of this job within this organisation. Enum: `Past Job`, `Future Job`, `Ending Job`, `Current Job`.
     * @type {string}
     * @memberof JobProperty4
     */
    'jobStatus'?: string;
    /**
     * 
     * @type {JobProperty4CreatedBy}
     * @memberof JobProperty4
     */
    'createdBy'?: JobProperty4CreatedBy;
    /**
     * 
     * @type {JobProperty4UpdatedBy}
     * @memberof JobProperty4
     */
    'updatedBy'?: JobProperty4UpdatedBy;
    /**
     * The start date of the current position the person is in. The gap between the `companyStartDate` and `positionStartDate` will be filled with \"Previous position title\" historical records, to correctly depict the person as having no information recorded for old job positions. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.
     * @type {string}
     * @memberof JobProperty4
     */
    'positionStartDate'?: string;
    /**
     * The date this [Job](https://developers.intellihr.io/docs/v1/) started or will start within the organisation. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof JobProperty4
     */
    'companyStartDate'?: string;
    /**
     * 
     * @type {RFC3339DatetimeProperty3}
     * @memberof JobProperty4
     */
    'companyEndDate'?: RFC3339DatetimeProperty3;
    /**
     * Whether the end date has been finalised within the intelliHR application.
     * @type {boolean}
     * @memberof JobProperty4
     */
    'isEndDateConfirmed'?: boolean;
    /**
     * 
     * @type {JobEndPatchResponseDataJobTurnoverType}
     * @memberof JobProperty4
     */
    'turnoverType'?: JobEndPatchResponseDataJobTurnoverType;
    /**
     * 
     * @type {JobEndPatchResponseDataJobTurnoverReason}
     * @memberof JobProperty4
     */
    'turnoverReason'?: JobEndPatchResponseDataJobTurnoverReason;
    /**
     * The custom field values for this Job
     * @type {CustomFieldsResponse}
     * @memberof JobProperty4
     */
    'customFields'?: CustomFieldsResponse;
    /**
     * When this record was created. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * @type {string}
     * @memberof JobProperty4
     */
    'createdAt'?: string;
}

