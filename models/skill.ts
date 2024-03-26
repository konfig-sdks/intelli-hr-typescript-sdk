/*
intelliHR Public API

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

The version of the OpenAPI document: V1
Contact: support@intellihr.co

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { SkillSkillDiscipline } from './skill-skill-discipline';

/**
 * 
 * @export
 * @interface Skill
 */
export interface Skill {
    /**
     * A description of the [Skill](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof Skill
     */
    'description'?: string;
    /**
     * The identifier string for the [Skill](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof Skill
     */
    'id'?: string;
    /**
     * User friendly name given to this [Skill](https://developers.intellihr.io/docs/v1/).
     * @type {string}
     * @memberof Skill
     */
    'name'?: string;
    /**
     * Whether this [Skill](https://developers.intellihr.io/docs/v1/) is business critical.
     * @type {boolean}
     * @memberof Skill
     */
    'isBusinessCritical'?: boolean;
    /**
     * 
     * @type {SkillSkillDiscipline}
     * @memberof Skill
     */
    'skillDiscipline'?: SkillSkillDiscipline;
}

