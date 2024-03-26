/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The [Skill Discipline](https://developers.intellihr.io/docs/v1/) to which this [Skill](https://developers.intellihr.io/docs/v1/) belongs.
 * @export
 * @interface AssignedSkillSkillDiscipline
 */
export interface AssignedSkillSkillDiscipline {
    /**
     * The identifier string for the [Skill Discipline](https://developers.intellihr.io/docs/v1/) of this [Skill](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof AssignedSkillSkillDiscipline
     */
    'id'?: string;
    /**
     * User friendly name given to this [Skill Discipline](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof AssignedSkillSkillDiscipline
     */
    'name'?: string;
    /**
     * Link on the public api to get more information on this piece of data.
     * @type {string}
     * @memberof AssignedSkillSkillDiscipline
     */
    'link'?: string;
}

