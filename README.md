<div align="left">

[![Visit Intellihr](./header.png)](https://intellihr.com)

# [Intellihr](https://intellihr.com)<a id="intellihr"></a>

You can find developer's guide and more documentation on [https://developers.intellihr.io](https://developers.intellihr.io)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`intellihr.businessEntities.createNewEntity`](#intellihrbusinessentitiescreatenewentity)
  * [`intellihr.businessEntities.deleteById`](#intellihrbusinessentitiesdeletebyid)
  * [`intellihr.businessEntities.findById`](#intellihrbusinessentitiesfindbyid)
  * [`intellihr.businessEntities.listAll`](#intellihrbusinessentitieslistall)
  * [`intellihr.businessEntities.updateById`](#intellihrbusinessentitiesupdatebyid)
  * [`intellihr.businessUnits.createNewUnit`](#intellihrbusinessunitscreatenewunit)
  * [`intellihr.businessUnits.deleteById`](#intellihrbusinessunitsdeletebyid)
  * [`intellihr.businessUnits.findById`](#intellihrbusinessunitsfindbyid)
  * [`intellihr.businessUnits.listAll`](#intellihrbusinessunitslistall)
  * [`intellihr.businessUnits.updateById`](#intellihrbusinessunitsupdatebyid)
  * [`intellihr.customFieldDefinitions.createDefinition`](#intellihrcustomfielddefinitionscreatedefinition)
  * [`intellihr.customFieldDefinitions.deleteById`](#intellihrcustomfielddefinitionsdeletebyid)
  * [`intellihr.customFieldDefinitions.findDefinitionById`](#intellihrcustomfielddefinitionsfinddefinitionbyid)
  * [`intellihr.customFieldDefinitions.listAll`](#intellihrcustomfielddefinitionslistall)
  * [`intellihr.customFieldDefinitions.updateDefinitionById`](#intellihrcustomfielddefinitionsupdatedefinitionbyid)
  * [`intellihr.defaultRemunerationComponents.findById`](#intellihrdefaultremunerationcomponentsfindbyid)
  * [`intellihr.defaultRemunerationComponents.listAll`](#intellihrdefaultremunerationcomponentslistall)
  * [`intellihr.employmentConditions.findById`](#intellihremploymentconditionsfindbyid)
  * [`intellihr.employmentConditions.listAllEmploymentConditions`](#intellihremploymentconditionslistallemploymentconditions)
  * [`intellihr.endJob.cancelEndDate`](#intellihrendjobcancelenddate)
  * [`intellihr.endJob.jobFinalize`](#intellihrendjobjobfinalize)
  * [`intellihr.extendedLeave.createNew`](#intellihrextendedleavecreatenew)
  * [`intellihr.extendedLeave.updateFinalise`](#intellihrextendedleaveupdatefinalise)
  * [`intellihr.extendedLeaveTypes.findById`](#intellihrextendedleavetypesfindbyid)
  * [`intellihr.extendedLeaveTypes.listAll`](#intellihrextendedleavetypeslistall)
  * [`intellihr.forms.findById`](#intellihrformsfindbyid)
  * [`intellihr.jobChangeReasons.createNewReason`](#intellihrjobchangereasonscreatenewreason)
  * [`intellihr.jobChangeReasons.deleteById`](#intellihrjobchangereasonsdeletebyid)
  * [`intellihr.jobChangeReasons.findById`](#intellihrjobchangereasonsfindbyid)
  * [`intellihr.jobChangeReasons.listAll`](#intellihrjobchangereasonslistall)
  * [`intellihr.jobChangeReasons.updateById`](#intellihrjobchangereasonsupdatebyid)
  * [`intellihr.jobRequirementGroups.createNewGroup`](#intellihrjobrequirementgroupscreatenewgroup)
  * [`intellihr.jobRequirementGroups.deleteById`](#intellihrjobrequirementgroupsdeletebyid)
  * [`intellihr.jobRequirementGroups.findById`](#intellihrjobrequirementgroupsfindbyid)
  * [`intellihr.jobRequirementGroups.listAll`](#intellihrjobrequirementgroupslistall)
  * [`intellihr.jobRequirementGroups.updateAttributes`](#intellihrjobrequirementgroupsupdateattributes)
  * [`intellihr.jobTimeline.getUpcomingChanges`](#intellihrjobtimelinegetupcomingchanges)
  * [`intellihr.jobs.createRecord`](#intellihrjobscreaterecord)
  * [`intellihr.jobs.findById`](#intellihrjobsfindbyid)
  * [`intellihr.jobs.getAll`](#intellihrjobsgetall)
  * [`intellihr.jobs.updateAttributes`](#intellihrjobsupdateattributes)
  * [`intellihr.locations.createNewLocation`](#intellihrlocationscreatenewlocation)
  * [`intellihr.locations.deleteById`](#intellihrlocationsdeletebyid)
  * [`intellihr.locations.findLocationById`](#intellihrlocationsfindlocationbyid)
  * [`intellihr.locations.listAll`](#intellihrlocationslistall)
  * [`intellihr.locations.updateById`](#intellihrlocationsupdatebyid)
  * [`intellihr.payGrades.createRecord`](#intellihrpaygradescreaterecord)
  * [`intellihr.payGrades.deleteById`](#intellihrpaygradesdeletebyid)
  * [`intellihr.payGrades.findById`](#intellihrpaygradesfindbyid)
  * [`intellihr.payGrades.getAll`](#intellihrpaygradesgetall)
  * [`intellihr.payGrades.updateRecord`](#intellihrpaygradesupdaterecord)
  * [`intellihr.people.createNewPerson`](#intellihrpeoplecreatenewperson)
  * [`intellihr.people.findById`](#intellihrpeoplefindbyid)
  * [`intellihr.people.listAllPeople`](#intellihrpeoplelistallpeople)
  * [`intellihr.people.updatePersonById`](#intellihrpeopleupdatepersonbyid)
  * [`intellihr.peopleDocuments.createPresignedUploadUrl`](#intellihrpeopledocumentscreatepresigneduploadurl)
  * [`intellihr.peopleDocuments.list`](#intellihrpeopledocumentslist)
  * [`intellihr.peopleDocuments.updateDocument`](#intellihrpeopledocumentsupdatedocument)
  * [`intellihr.peopleImages.generateTemporaryImageUrl`](#intellihrpeopleimagesgeneratetemporaryimageurl)
  * [`intellihr.peopleImages.getTemporaryImage`](#intellihrpeopleimagesgettemporaryimage)
  * [`intellihr.peopleImages.promoteImage`](#intellihrpeopleimagespromoteimage)
  * [`intellihr.peopleSkills.assignSkillToPerson`](#intellihrpeopleskillsassignskilltoperson)
  * [`intellihr.peopleSkills.deleteAssignedSkillById`](#intellihrpeopleskillsdeleteassignedskillbyid)
  * [`intellihr.peopleSkills.findSkillById`](#intellihrpeopleskillsfindskillbyid)
  * [`intellihr.peopleSkills.listPersonSkills`](#intellihrpeopleskillslistpersonskills)
  * [`intellihr.peopleSkills.updateAssignedSkill`](#intellihrpeopleskillsupdateassignedskill)
  * [`intellihr.permissionGroups.findGroupById`](#intellihrpermissiongroupsfindgroupbyid)
  * [`intellihr.permissionGroups.listAll`](#intellihrpermissiongroupslistall)
  * [`intellihr.personDocumentsDeprecated.createPresignedUploadUrl`](#intellihrpersondocumentsdeprecatedcreatepresigneduploadurl)
  * [`intellihr.personDocumentsDeprecated.updateDocument`](#intellihrpersondocumentsdeprecatedupdatedocument)
  * [`intellihr.positionTitles.createNewRecord`](#intellihrpositiontitlescreatenewrecord)
  * [`intellihr.positionTitles.deleteById`](#intellihrpositiontitlesdeletebyid)
  * [`intellihr.positionTitles.listAll`](#intellihrpositiontitleslistall)
  * [`intellihr.positionTitles.updateAttributes`](#intellihrpositiontitlesupdateattributes)
  * [`intellihr.qualificationInstances.createNewInstance`](#intellihrqualificationinstancescreatenewinstance)
  * [`intellihr.qualificationInstances.deleteById`](#intellihrqualificationinstancesdeletebyid)
  * [`intellihr.qualificationInstances.findById`](#intellihrqualificationinstancesfindbyid)
  * [`intellihr.qualificationInstances.listAll`](#intellihrqualificationinstanceslistall)
  * [`intellihr.qualificationInstances.updateInstanceById`](#intellihrqualificationinstancesupdateinstancebyid)
  * [`intellihr.qualificationLibraryItems.createNewRecord`](#intellihrqualificationlibraryitemscreatenewrecord)
  * [`intellihr.qualificationLibraryItems.deleteById`](#intellihrqualificationlibraryitemsdeletebyid)
  * [`intellihr.qualificationLibraryItems.findByID`](#intellihrqualificationlibraryitemsfindbyid)
  * [`intellihr.qualificationLibraryItems.getAllQualifications`](#intellihrqualificationlibraryitemsgetallqualifications)
  * [`intellihr.qualificationLibraryItems.updateRecord`](#intellihrqualificationlibraryitemsupdaterecord)
  * [`intellihr.qualificationStatuses.findStatusById`](#intellihrqualificationstatusesfindstatusbyid)
  * [`intellihr.qualificationTypes.findById`](#intellihrqualificationtypesfindbyid)
  * [`intellihr.qualificationTypes.listAllQualificationTypes`](#intellihrqualificationtypeslistallqualificationtypes)
  * [`intellihr.recruitmentSources.findById`](#intellihrrecruitmentsourcesfindbyid)
  * [`intellihr.recruitmentSources.listAll`](#intellihrrecruitmentsourceslistall)
  * [`intellihr.representativeTypes.findById`](#intellihrrepresentativetypesfindbyid)
  * [`intellihr.representativeTypes.listAll`](#intellihrrepresentativetypeslistall)
  * [`intellihr.skillDisciplines.createNewDiscipline`](#intellihrskilldisciplinescreatenewdiscipline)
  * [`intellihr.skillDisciplines.findById`](#intellihrskilldisciplinesfindbyid)
  * [`intellihr.skillDisciplines.listAll`](#intellihrskilldisciplineslistall)
  * [`intellihr.skillDisciplines.updateDisciplineById`](#intellihrskilldisciplinesupdatedisciplinebyid)
  * [`intellihr.skills.createNewSkill`](#intellihrskillscreatenewskill)
  * [`intellihr.skills.findSkillById`](#intellihrskillsfindskillbyid)
  * [`intellihr.skills.getAll`](#intellihrskillsgetall)
  * [`intellihr.skills.updateSkillById`](#intellihrskillsupdateskillbyid)
  * [`intellihr.trainingProviders.findById`](#intellihrtrainingprovidersfindbyid)
  * [`intellihr.trainingProviders.listAll`](#intellihrtrainingproviderslistall)
  * [`intellihr.trainingStatuses.listAll`](#intellihrtrainingstatuseslistall)
  * [`intellihr.trainingTypes.findById`](#intellihrtrainingtypesfindbyid)
  * [`intellihr.trainingTypes.listAll`](#intellihrtrainingtypeslistall)
  * [`intellihr.trainings.createNewTraining`](#intellihrtrainingscreatenewtraining)
  * [`intellihr.trainings.deleteById`](#intellihrtrainingsdeletebyid)
  * [`intellihr.trainings.findTrainingById`](#intellihrtrainingsfindtrainingbyid)
  * [`intellihr.trainings.listAll`](#intellihrtrainingslistall)
  * [`intellihr.trainings.updateTrainingById`](#intellihrtrainingsupdatetrainingbyid)
  * [`intellihr.users.createUser`](#intellihruserscreateuser)
  * [`intellihr.users.findUserById`](#intellihrusersfinduserbyid)
  * [`intellihr.users.getAllUsers`](#intellihrusersgetallusers)
  * [`intellihr.users.updateById`](#intellihrusersupdatebyid)
  * [`intellihr.webhookEvents.findEventById`](#intellihrwebhookeventsfindeventbyid)
  * [`intellihr.webhookEvents.listAllEvents`](#intellihrwebhookeventslistallevents)
  * [`intellihr.webhooks.createWebhook`](#intellihrwebhookscreatewebhook)
  * [`intellihr.webhooks.deleteById`](#intellihrwebhooksdeletebyid)
  * [`intellihr.webhooks.findById`](#intellihrwebhooksfindbyid)
  * [`intellihr.webhooks.listAll`](#intellihrwebhookslistall)
  * [`intellihr.webhooks.updateWebhook`](#intellihrwebhooksupdatewebhook)
  * [`intellihr.workClasses.findById`](#intellihrworkclassesfindbyid)
  * [`intellihr.workClasses.listAll`](#intellihrworkclasseslistall)
  * [`intellihr.workRights.findWorkRightById`](#intellihrworkrightsfindworkrightbyid)
  * [`intellihr.workRights.listAll`](#intellihrworkrightslistall)
  * [`intellihr.workTypes.findById`](#intellihrworktypesfindbyid)
  * [`intellihr.workTypes.listAll`](#intellihrworktypeslistall)
  * [`intellihr.workflowEvents.findById`](#intellihrworkfloweventsfindbyid)
  * [`intellihr.workflows.triggerById`](#intellihrworkflowstriggerbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=intelliHR&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { IntelliHr } from "intelli-hr-typescript-sdk";

const intellihr = new IntelliHr({
  // Defining the base path is optional and defaults to https://api.intellihr.io/v1
  // basePath: "https://api.intellihr.io/v1",
  apiKey: "API_KEY",
});

const createNewEntityResponse =
  await intellihr.businessEntities.createNewEntity({
    name: "IntelliHR",
    code: "BE001",
    legalName: "IntelliHR Systems Limited",
    number: "00 000 000 000",
  });

console.log(createNewEntityResponse);
```

## Reference<a id="reference"></a>


### `intellihr.businessEntities.createNewEntity`<a id="intellihrbusinessentitiescreatenewentity"></a>

Returns the created [Business Entity](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewEntityResponse =
  await intellihr.businessEntities.createNewEntity({
    name: "IntelliHR",
    code: "BE001",
    legalName: "IntelliHR Systems Limited",
    number: "00 000 000 000",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Business Entity](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### code: `string`<a id="code-string"></a>

Code given to this [Business Entity](https://developers.intellihr.io/docs/v1/)

##### legalName: `string`<a id="legalname-string"></a>

Legal name can be different from the name presented to a user. Usually used for administrative tasks.

##### number: `string`<a id="number-string"></a>

Legally registered [Business Entity](https://developers.intellihr.io/docs/v1/) number, e.g. in Australia this might be the ABN, or in America the RN.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Business Entity](https://developers.intellihr.io/docs/v1/) in dropdowns.

##### customFields: Record<string, [`BusinessEntitiesCreateRequestCustomFieldsValue`](./models/business-entities-create-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this [Business Entity](https://developers.intellihr.io/docs/v1/)

#### 🔄 Return<a id="🔄-return"></a>

[BusinessEntities](./models/business-entities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-entities` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessEntities.deleteById`<a id="intellihrbusinessentitiesdeletebyid"></a>

Deletes the [Business Entity](https://developers.intellihr.io/docs/v1/)'s by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.businessEntities.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-entities/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessEntities.findById`<a id="intellihrbusinessentitiesfindbyid"></a>

Returns a single [Business Entity](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.businessEntities.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[BusinessEntities](./models/business-entities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-entities/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessEntities.listAll`<a id="intellihrbusinessentitieslistall"></a>

Returns a list of all [Business Entities](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.businessEntities.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[BusinessEntitiesList](./models/business-entities-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-entities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessEntities.updateById`<a id="intellihrbusinessentitiesupdatebyid"></a>

Returns the updated [Business Entity](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await intellihr.businessEntities.updateById({
  id: "id_example",
  name: "IntelliHR",
  code: "BE001",
  legalName: "IntelliHR Systems Limited",
  number: "00 000 000 000",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Business Entity](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### code: `string`<a id="code-string"></a>

Code given to this [Business Entity](https://developers.intellihr.io/docs/v1/)

##### legalName: `string`<a id="legalname-string"></a>

Legal name can be different from the name presented to a user. Usually used for administrative tasks.

##### number: `string`<a id="number-string"></a>

Legally registered [Business Entity](https://developers.intellihr.io/docs/v1/) number, e.g. in Australia this might be the ABN, or in America the RN.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Business Entity](https://developers.intellihr.io/docs/v1/) in dropdowns.

##### customFields: Record<string, [`BusinessEntitiesPatchRequestCustomFieldsValue`](./models/business-entities-patch-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this [Business Entity](https://developers.intellihr.io/docs/v1/)

#### 🔄 Return<a id="🔄-return"></a>

[BusinessEntities](./models/business-entities.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-entities/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessUnits.createNewUnit`<a id="intellihrbusinessunitscreatenewunit"></a>

Returns the created [Business Unit](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUnitResponse = await intellihr.businessUnits.createNewUnit({
  identifier: "",
  name: "Engineering",
  code: "BE001",
  notes: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Business Unit](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### identifier: `string`<a id="identifier-string"></a>

Optional identifier that can be used for administrative tasks.

##### code: `string`<a id="code-string"></a>

Code given to this [Business Unit](https://developers.intellihr.io/docs/v1/)

##### notes: `string`<a id="notes-string"></a>

Notes attached to a [Business Unit](https://developers.intellihr.io/docs/v1/)

##### parentId: [`UUIDv4Property`](./models/uuidv4-property.ts)<a id="parentid-uuidv4propertymodelsuuidv4-propertyts"></a>

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Business Unit](https://developers.intellihr.io/docs/v1/) in dropdowns.

##### customFields: Record<string, [`BusinessUnitsCreateRequestCustomFieldsValue`](./models/business-units-create-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this Business Unit

#### 🔄 Return<a id="🔄-return"></a>

[BusinessUnits](./models/business-units.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-units` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessUnits.deleteById`<a id="intellihrbusinessunitsdeletebyid"></a>

Deletes the [Business Unit](https://developers.intellihr.io/docs/v1/)'s by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.businessUnits.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-units/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessUnits.findById`<a id="intellihrbusinessunitsfindbyid"></a>

Returns a single [Business Unit](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.businessUnits.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[BusinessUnits](./models/business-units.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-units/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessUnits.listAll`<a id="intellihrbusinessunitslistall"></a>

Returns a list of all [Business Units](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.businessUnits.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`BusinessUnitsListAllFiltersParameter`](./models/business-units-list-all-filters-parameter.ts)<a id="filters-businessunitslistallfiltersparametermodelsbusiness-units-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[identifier][eq]=Engineering`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[BusinessUnitsList](./models/business-units-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-units` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.businessUnits.updateById`<a id="intellihrbusinessunitsupdatebyid"></a>

Returns the updated [Business Unit](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await intellihr.businessUnits.updateById({
  id: "id_example",
  identifier: "",
  name: "Engineering",
  code: "BE001",
  notes: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Business Unit](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### identifier: `string`<a id="identifier-string"></a>

Optional identifier that can be used for administrative tasks.

##### code: `string`<a id="code-string"></a>

Code given to this [Business Unit](https://developers.intellihr.io/docs/v1/)

##### notes: `string`<a id="notes-string"></a>

Notes attached to a [Business Unit](https://developers.intellihr.io/docs/v1/)

##### parentId: [`UUIDv4Property`](./models/uuidv4-property.ts)<a id="parentid-uuidv4propertymodelsuuidv4-propertyts"></a>

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Business Unit](https://developers.intellihr.io/docs/v1/) in dropdowns.

##### customFields: Record<string, [`BusinessUnitsPatchRequestCustomFieldsValue`](./models/business-units-patch-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this Business Unit

#### 🔄 Return<a id="🔄-return"></a>

[BusinessUnits](./models/business-units.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/business-units/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.customFieldDefinitions.createDefinition`<a id="intellihrcustomfielddefinitionscreatedefinition"></a>

Returns the created [Custom Field Definition](https://developers.intellihr.io/docs/v1/)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDefinitionResponse =
  await intellihr.customFieldDefinitions.createDefinition({
    name: "Custom Field",
    apiName: "custom_field",
    modelType: "PERSON",
    type: "TEXT",
    isSensitive: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Custom Field Definition](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### apiName: `string`<a id="apiname-string"></a>

The api name given to this [Custom Field Definition](https://developers.intellihr.io/docs/v1/). This name is used to uniquely identify the custom field in the api and is used as the key when modifying the custom field on a record.

##### modelType: `string`<a id="modeltype-string"></a>

The model that this custom field relates to and can be attached to. Enum: `ADDRESS`, `BUSINESS_ENTITY`, `BUSINESS_UNIT`, `EMAIL_ADDRESS`, `JOB`, `LOCATION`, `PERSON`, `POSITION_TITLE`, `PHONE_NUMBER`, `REMUNERATION`, `TRAINING`.

##### type: `string`<a id="type-string"></a>

The type of data this field records. Enum: `SINGLE_SELECT`, `MULTI_SELECT`, `TEXT`, `NUMBER`, `PEOPLE_DROPDOWN`.

##### description: [`CustomFieldDefinitionPropertyDescription`](./models/custom-field-definition-property-description.ts)<a id="description-customfielddefinitionpropertydescriptionmodelscustom-field-definition-property-descriptionts"></a>

##### isSensitive: `boolean`<a id="issensitive-boolean"></a>

Whether or not this [Custom Field Definition](https://developers.intellihr.io/docs/v1/) is marked as sensitive information.

##### selectDefinition: [`TheSelectDefinitionOfTheCustomFieldDefinitionProperty`](./models/the-select-definition-of-the-custom-field-definition-property.ts)<a id="selectdefinition-theselectdefinitionofthecustomfielddefinitionpropertymodelsthe-select-definition-of-the-custom-field-definition-propertyts"></a>

##### textDefinition: [`OptionallyAddTextValidationOfTheCustomFieldDefinitionProperty`](./models/optionally-add-text-validation-of-the-custom-field-definition-property.ts)<a id="textdefinition-optionallyaddtextvalidationofthecustomfielddefinitionpropertymodelsoptionally-add-text-validation-of-the-custom-field-definition-propertyts"></a>

##### peopleDropdownDefinition: [`ThePeopleDropdownDefinitionOfTheCustomFieldDefinitionProperty`](./models/the-people-dropdown-definition-of-the-custom-field-definition-property.ts)<a id="peopledropdowndefinition-thepeopledropdowndefinitionofthecustomfielddefinitionpropertymodelsthe-people-dropdown-definition-of-the-custom-field-definition-propertyts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldDefinitions](./models/custom-field-definitions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom-field-definitions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.customFieldDefinitions.deleteById`<a id="intellihrcustomfielddefinitionsdeletebyid"></a>

Deletes the [Custom Field Definition](https://developers.intellihr.io/docs/v1/) by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.customFieldDefinitions.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom-field-definitions/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.customFieldDefinitions.findDefinitionById`<a id="intellihrcustomfielddefinitionsfinddefinitionbyid"></a>

Returns a single Custom Field Definition.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findDefinitionByIdResponse =
  await intellihr.customFieldDefinitions.findDefinitionById();
```

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldDefinitions](./models/custom-field-definitions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom-field-definitions/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.customFieldDefinitions.listAll`<a id="intellihrcustomfielddefinitionslistall"></a>

Returns a list of all Custom Field Definitions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.customFieldDefinitions.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`CustomFieldDefinitionsListAllFiltersParameter`](./models/custom-field-definitions-list-all-filters-parameter.ts)<a id="filters-customfielddefinitionslistallfiltersparametermodelscustom-field-definitions-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[modelType][eq]=TRAINING`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldDefinitionsList](./models/custom-field-definitions-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom-field-definitions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.customFieldDefinitions.updateDefinitionById`<a id="intellihrcustomfielddefinitionsupdatedefinitionbyid"></a>

Returns the updated [Custom Field Definition](https://developers.intellihr.io/docs/v1/)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDefinitionByIdResponse =
  await intellihr.customFieldDefinitions.updateDefinitionById({
    id: "id_example",
    name: "Custom Field",
    isEnabled: false,
    isSensitive: false,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: [`CustomFieldDefinitionPropertyDescription`](./models/custom-field-definition-property-description.ts)<a id="description-customfielddefinitionpropertydescriptionmodelscustom-field-definition-property-descriptionts"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Custom Field Definition](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Whether or not this [Custom Field Definition](https://developers.intellihr.io/docs/v1/) is enabled to be used.

##### isSensitive: `boolean`<a id="issensitive-boolean"></a>

Whether or not this [Custom Field Definition](https://developers.intellihr.io/docs/v1/) is marked as sensitive information.

##### selectDefinition: [`TheSelectDefinitionOfTheCustomFieldDefinitionProperty1`](./models/the-select-definition-of-the-custom-field-definition-property1.ts)<a id="selectdefinition-theselectdefinitionofthecustomfielddefinitionproperty1modelsthe-select-definition-of-the-custom-field-definition-property1ts"></a>

##### peopleDropdownDefinition: [`ThePeopleDropdownDefinitionOfTheCustomFieldDefinitionProperty1`](./models/the-people-dropdown-definition-of-the-custom-field-definition-property1.ts)<a id="peopledropdowndefinition-thepeopledropdowndefinitionofthecustomfielddefinitionproperty1modelsthe-people-dropdown-definition-of-the-custom-field-definition-property1ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CustomFieldDefinitions](./models/custom-field-definitions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/custom-field-definitions/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.defaultRemunerationComponents.findById`<a id="intellihrdefaultremunerationcomponentsfindbyid"></a>

Returns a single default remuneration component.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse =
  await intellihr.defaultRemunerationComponents.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[DefaultRemunerationComponents](./models/default-remuneration-components.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/default-remuneration-components/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.defaultRemunerationComponents.listAll`<a id="intellihrdefaultremunerationcomponentslistall"></a>

Returns a list of all [Default Remuneration Components](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.defaultRemunerationComponents.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[DefaultRemunerationComponentsList](./models/default-remuneration-components-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/default-remuneration-components` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.employmentConditions.findById`<a id="intellihremploymentconditionsfindbyid"></a>

Returns a single employment condition.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.employmentConditions.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentConditions](./models/employment-conditions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-conditions/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.employmentConditions.listAllEmploymentConditions`<a id="intellihremploymentconditionslistallemploymentconditions"></a>

Returns a list of all employment conditions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllEmploymentConditionsResponse =
  await intellihr.employmentConditions.listAllEmploymentConditions();
```

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentConditionsList](./models/employment-conditions-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/employment-conditions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.endJob.cancelEndDate`<a id="intellihrendjobcancelenddate"></a>

If a job end date has been finalised, this will cancel the finalisation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cancelEndDateResponse = await intellihr.endJob.cancelEndDate({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### UNKNOWN_PARAMETER_NAME:<a id="unknown_parameter_name"></a>

Whether to cancel the disabling of the users account upon the job end date, if user doesn\'t exist the Boolean has no effect yet the request will still succeed.

#### 🔄 Return<a id="🔄-return"></a>

[JobEndRemoveResponse](./models/job-end-remove-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-end/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.endJob.jobFinalize`<a id="intellihrendjobjobfinalize"></a>

Set an end date, and finalise a job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const jobFinalizeResponse = await intellihr.endJob.jobFinalize({
  id: "id_example",
  endDate: "2015-03-01T22:30:00+00:00",
  reassignDirectReportsTo: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
  turnoverType: "involuntary",
  turnoverReason: "Medical reasons",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### endDate: `string`<a id="enddate-string"></a>

The <b>exclusive</b> date this [Job](https://developers.intellihr.io/docs/v1/) ended or will end within the organisation. For example, if the person\\\'s last working date is on 2025-04-23, the `endDate` should be set as 2025-04-24 to reflect the exclusive date. Required if not finalising an end date, or the job does not have an end date. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### reassignDirectReportsTo: `string`<a id="reassigndirectreportsto-string"></a>

The identifier string for the [Job](https://developers.intellihr.io/docs/v1/) of the person that the direct report will be reassigned to.

##### turnoverType: `string`<a id="turnovertype-string"></a>

The type of turnover this end of job would be classified as: `voluntary`, `involuntary` or `unknown`. Required if finalising an end date.

##### turnoverReason: `string`<a id="turnoverreason-string"></a>

The name of the turnover reason.

##### UNKNOWN_PARAMETER_NAME:<a id="unknown_parameter_name"></a>

If true, do not finalise the job.

##### UNKNOWN_PARAMETER_NAME2:<a id="unknown_parameter_name2"></a>

If true, keeps the user account when finalising the job.

##### UNKNOWN_PARAMETER_NAME3:<a id="unknown_parameter_name3"></a>

When true, no events will be fired from this action

#### 🔄 Return<a id="🔄-return"></a>

[JobEndPatchResponse](./models/job-end-patch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-end/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.extendedLeave.createNew`<a id="intellihrextendedleavecreatenew"></a>

Create a new Extended Leave on an existing Job.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewResponse = await intellihr.extendedLeave.createNew({
  jobId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
  startDate: "2015-03-01T22:30:00+00:00",
  endDate: "2015-03-01T22:30:00+00:00",
  leaveType: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    name: "Long Service",
  },
  fte: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The identifier string for the [Job](https://developers.intellihr.io/docs/v1/) that this extended leave belongs to.

##### startDate: `string`<a id="startdate-string"></a>

The date this [Extended Leave](https://developers.intellihr.io/docs/v1/) started or will start. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### endDate: `string`<a id="enddate-string"></a>

The date this [Extended Leave](https://developers.intellihr.io/docs/v1/) is expected to end. Leave is created without a finalised return date. In order to create more than one Extended Leave on a Job, the end date must be finalised on the most recent created Extended Leave. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### leaveType: [`LeaveCreateRequestLeaveType`](./models/leave-create-request-leave-type.ts)<a id="leavetype-leavecreaterequestleavetypemodelsleave-create-request-leave-typets"></a>

##### fte: `string`<a id="fte-string"></a>

The full time equivalent for this [Job](https://developers.intellihr.io/docs/v1/) if changing during this leave period.

#### 🔄 Return<a id="🔄-return"></a>

[LeaveCreateResponse](./models/leave-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/extended-leave` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.extendedLeave.updateFinalise`<a id="intellihrextendedleaveupdatefinalise"></a>

Update or Finalise an existing Extended Leave.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFinaliseResponse = await intellihr.extendedLeave.updateFinalise({
  jobId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
  shouldNotFinaliseEndDate: false,
  startDate: "2015-03-01T22:30:00+00:00",
  endDate: "2015-03-01T22:30:00+00:00",
  fte: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The identifier string for the [Job](https://developers.intellihr.io/docs/v1/) that this extended leave belongs to.

##### endDate: `string`<a id="enddate-string"></a>

The date this [Extended Leave](https://developers.intellihr.io/docs/v1/) is expected to end. Leave is created without a finalised return date. In order to create more than one Extended Leave on a Job, the end date must be finalised on the most recent created Extended Leave. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### shouldNotFinaliseEndDate: `boolean`<a id="shouldnotfinaliseenddate-boolean"></a>

Whether or not to finalise the end date for the [Extended Leave](https://developers.intellihr.io/docs/v1/). This boolean will change the input variables required if you are finalising an Extended Leave or just updating it. Finalising the end date prevents any further changes to this Extended Leave.

##### startDate: `string`<a id="startdate-string"></a>

The date this [Extended Leave](https://developers.intellihr.io/docs/v1/) started or will start. This field is only required if not finalising the Extended Leave end date, and will not be used if shouldNotFinaliseEndDate is not set or is set to false. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### leaveType: [`LeaveUpdateRequestLeaveType`](./models/leave-update-request-leave-type.ts)<a id="leavetype-leaveupdaterequestleavetypemodelsleave-update-request-leave-typets"></a>

##### fte: `string`<a id="fte-string"></a>

The full time equivalent for this [Job](https://developers.intellihr.io/docs/v1/) upon returning from Extended Leave. This field is only required when finalising the Extended Leave end date, and will not be used if shouldNotFinaliseEndDate is set to true.

#### 🔄 Return<a id="🔄-return"></a>

[LeaveUpdateResponse](./models/leave-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/extended-leave/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.extendedLeaveTypes.findById`<a id="intellihrextendedleavetypesfindbyid"></a>

Returns a single Extended Leave Type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.extendedLeaveTypes.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[ExtendedLeaveTypes](./models/extended-leave-types.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/extended-leave-types/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.extendedLeaveTypes.listAll`<a id="intellihrextendedleavetypeslistall"></a>

Returns a list of all Extended Leave Types.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.extendedLeaveTypes.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[ExtendedLeaveTypesList](./models/extended-leave-types-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/extended-leave-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.forms.findById`<a id="intellihrformsfindbyid"></a>

Returns a single [Form](https://developers.intellihr.io/docs/v1/) instance by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.forms.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Forms](./models/forms.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/forms/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobChangeReasons.createNewReason`<a id="intellihrjobchangereasonscreatenewreason"></a>

Returns the created [Job Change Reason](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewReasonResponse =
  await intellihr.jobChangeReasons.createNewReason({
    name: "Engineering",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Job Change Reason](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Job Change Reason](https://developers.intellihr.io/docs/v1/) in dropdowns.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangeReasons](./models/job-change-reasons.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-change-reasons` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobChangeReasons.deleteById`<a id="intellihrjobchangereasonsdeletebyid"></a>

Deletes the [Job Change Reason](https://developers.intellihr.io/docs/v1/)'s by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.jobChangeReasons.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-change-reasons/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobChangeReasons.findById`<a id="intellihrjobchangereasonsfindbyid"></a>

Returns a single [Job Change Reason](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.jobChangeReasons.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[JobChangeReasons](./models/job-change-reasons.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-change-reasons/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobChangeReasons.listAll`<a id="intellihrjobchangereasonslistall"></a>

Returns a list of all [Job Change Reasons](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.jobChangeReasons.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[JobChangeReasonsList](./models/job-change-reasons-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-change-reasons` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobChangeReasons.updateById`<a id="intellihrjobchangereasonsupdatebyid"></a>

Returns the updated [Job Change Reason](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await intellihr.jobChangeReasons.updateById({
  id: "id_example",
  name: "Engineering",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Job Change Reason](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Job Change Reason](https://developers.intellihr.io/docs/v1/) in dropdowns.

#### 🔄 Return<a id="🔄-return"></a>

[JobChangeReasons](./models/job-change-reasons.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-change-reasons/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobRequirementGroups.createNewGroup`<a id="intellihrjobrequirementgroupscreatenewgroup"></a>

Create a new [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewGroupResponse =
  await intellihr.jobRequirementGroups.createNewGroup({
    name: "ABCDE12345",
    libraryItemIds: ["8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The issue date of the [Job Requirement Group](https://developers.intellihr.io/docs/v1/)

##### libraryItemIds: `string`[]<a id="libraryitemids-string"></a>

The [Qualification Library Item](https://developers.intellihr.io/docs/v1/) ids assigned to this [Job Requirement Group](https://developers.intellihr.io/docs/v1/).

#### 🔄 Return<a id="🔄-return"></a>

[JobRequirementGroups](./models/job-requirement-groups.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-requirement-groups` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobRequirementGroups.deleteById`<a id="intellihrjobrequirementgroupsdeletebyid"></a>

Deletes the [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.jobRequirementGroups.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-requirement-groups/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobRequirementGroups.findById`<a id="intellihrjobrequirementgroupsfindbyid"></a>

Returns a single [Job Requirement Group](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.jobRequirementGroups.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[JobRequirementGroups](./models/job-requirement-groups.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-requirement-groups/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobRequirementGroups.listAll`<a id="intellihrjobrequirementgroupslistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.jobRequirementGroups.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[JobRequirementGroupsList](./models/job-requirement-groups-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-requirement-groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobRequirementGroups.updateAttributes`<a id="intellihrjobrequirementgroupsupdateattributes"></a>

Patch attributes of an existing [Job Requirement Group](https://developers.intellihr.io/docs/v1/) record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttributesResponse =
  await intellihr.jobRequirementGroups.updateAttributes({
    id: "id_example",
    name: "ABCDE12345",
    libraryItemIds: ["8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The issue date of the [Job Requirement Group](https://developers.intellihr.io/docs/v1/)

##### libraryItemIds: `string`[]<a id="libraryitemids-string"></a>

The [Qualification Library Item](https://developers.intellihr.io/docs/v1/) ids assigned to this [Job Requirement Group](https://developers.intellihr.io/docs/v1/).

#### 🔄 Return<a id="🔄-return"></a>

[JobRequirementGroups](./models/job-requirement-groups.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/job-requirement-groups/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobTimeline.getUpcomingChanges`<a id="intellihrjobtimelinegetupcomingchanges"></a>

Returns the upcoming changes and current information about a [Job](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUpcomingChangesResponse =
  await intellihr.jobTimeline.getUpcomingChanges({
    jobId: "jobId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

Id string param for relevant [Job](https://developers.intellihr.io/docs/v1/)

#### 🔄 Return<a id="🔄-return"></a>

[JobIdTimelineGetResponse](./models/job-id-timeline-get-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{jobId}/timeline` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobs.createRecord`<a id="intellihrjobscreaterecord"></a>

Create a new Job record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRecordResponse = await intellihr.jobs.createRecord({
  person: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    name: "Bruce Wayne",
    primaryEmailAddress: "bruce.wayne@example.com",
    employeeNumber: "00001",
    autoIncrementIntellihrId: "1000",
  },
  companyStartDate: "2015-03-01T22:30:00+00:00",
  companyEndDate: "2015-03-01T22:30:00+00:00",
  startDate: "2015-03-01T22:30:00+00:00",
  endDate: "2015-03-01T22:30:00+00:00",
  name: "Food Scientist",
  businessEntity: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    name: "IntelliHR",
    legalName: "IntelliHR Systems Limited",
    number: "00 000 000 000",
  },
  businessUnit: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    name: "Engineering",
  },
  workClass: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    name: "Casual",
  },
  fte: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### person: [`JobCreateRequestPerson`](./models/job-create-request-person.ts)<a id="person-jobcreaterequestpersonmodelsjob-create-request-personts"></a>

##### companyStartDate: `string`<a id="companystartdate-string"></a>

The date this [Job](https://developers.intellihr.io/docs/v1/) started or will start within the organisation. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### name: `string`<a id="name-string"></a>

The job name assigned to this [Job](https://developers.intellihr.io/docs/v1/). Will attempt to match to an existing [Position Title](https://developers.intellihr.io/docs/v1/), otherwise creates a new [Position Title](https://developers.intellihr.io/docs/v1/).

##### businessEntity: [`JobCreateRequestBusinessEntity`](./models/job-create-request-business-entity.ts)<a id="businessentity-jobcreaterequestbusinessentitymodelsjob-create-request-business-entityts"></a>

##### businessUnit: [`JobCreateRequestBusinessUnit`](./models/job-create-request-business-unit.ts)<a id="businessunit-jobcreaterequestbusinessunitmodelsjob-create-request-business-unitts"></a>

##### workClass: [`JobCreateRequestWorkClass`](./models/job-create-request-work-class.ts)<a id="workclass-jobcreaterequestworkclassmodelsjob-create-request-work-classts"></a>

##### companyEndDate: `string`<a id="companyenddate-string"></a>

The <b>exclusive</b> date this [Job](https://developers.intellihr.io/docs/v1/) ended or will end within the organisation. For example, if the person\\\'s last working date is on 2025-04-23, the `companyEndDate` should be set as 2025-04-24 to reflect the exclusive date. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### startDate: `string`<a id="startdate-string"></a>

The date this [Job](https://developers.intellihr.io/docs/v1/) started or will start within the organisation. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### endDate: `string`<a id="enddate-string"></a>

The <b>exclusive</b> date this [Job](https://developers.intellihr.io/docs/v1/) ended or will end within the organisation. For example, if the person\\\'s last working date is on 2025-04-23, the `endDate` should be set as 2025-04-24 to reflect the exclusive date. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### establishment: [`JobCreateRequestEstablishment`](./models/job-create-request-establishment.ts)<a id="establishment-jobcreaterequestestablishmentmodelsjob-create-request-establishmentts"></a>

##### supervisorPerson: [`JobCreateRequestSupervisorPerson`](./models/job-create-request-supervisor-person.ts)<a id="supervisorperson-jobcreaterequestsupervisorpersonmodelsjob-create-request-supervisor-personts"></a>

##### supervisorJob: [`JobCreateRequestSupervisorJob`](./models/job-create-request-supervisor-job.ts)<a id="supervisorjob-jobcreaterequestsupervisorjobmodelsjob-create-request-supervisor-jobts"></a>

##### location: [`JobCreateRequestLocation`](./models/job-create-request-location.ts)<a id="location-jobcreaterequestlocationmodelsjob-create-request-locationts"></a>

##### workType: [`JobCreateRequestWorkType`](./models/job-create-request-work-type.ts)<a id="worktype-jobcreaterequestworktypemodelsjob-create-request-work-typets"></a>

##### fte: `string`<a id="fte-string"></a>

The full time equivalent of this [Job](https://developers.intellihr.io/docs/v1/). Indicating the workload of an employee that can be comparable across different contexts. This is null for people without an FTE.

##### payGrade: [`JobCreateRequestPayGrade`](./models/job-create-request-pay-grade.ts)<a id="paygrade-jobcreaterequestpaygrademodelsjob-create-request-pay-gradets"></a>

##### employmentCondition: [`JobCreateRequestEmploymentCondition`](./models/job-create-request-employment-condition.ts)<a id="employmentcondition-jobcreaterequestemploymentconditionmodelsjob-create-request-employment-conditionts"></a>

##### remunerationSchedule: [`JobCreateRequestRemunerationSchedule`](./models/job-create-request-remuneration-schedule.ts)<a id="remunerationschedule-jobcreaterequestremunerationschedulemodelsjob-create-request-remuneration-schedulets"></a>

##### recruitment: [`JobCreateRequestRecruitment`](./models/job-create-request-recruitment.ts)<a id="recruitment-jobcreaterequestrecruitmentmodelsjob-create-request-recruitmentts"></a>

##### customFields: Record<string, [`JobCreateRequestCustomFieldsValue`](./models/job-create-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this Job

#### 🔄 Return<a id="🔄-return"></a>

[JobCreateResponse](./models/job-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobs.findById`<a id="intellihrjobsfindbyid"></a>

Get a single Job record by UUIDv4 identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.jobs.findById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### asAt: `string`<a id="asat-string"></a>

Used to configure what date to return this job data for, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime.   All data returned from the job endpoints represent the values of the Person\'s job attributes at a specific point in time.   By default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.

#### 🔄 Return<a id="🔄-return"></a>

[Jobs](./models/jobs.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobs.getAll`<a id="intellihrjobsgetall"></a>

Returns a list of all [Job](https://developers.intellihr.io/docs/v1/) entity records as at the current date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await intellihr.jobs.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`JobsGetAllFiltersParameter`](./models/jobs-get-all-filters-parameter.ts)<a id="filters-jobsgetallfiltersparametermodelsjobs-get-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[personId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

##### sort: `string`<a id="sort-string"></a>

Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`.

#### 🔄 Return<a id="🔄-return"></a>

[JobsList](./models/jobs-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.jobs.updateAttributes`<a id="intellihrjobsupdateattributes"></a>

Patch attributes of an existing Job record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttributesResponse = await intellihr.jobs.updateAttributes({
  id: "id_example",
  effectiveFrom: null,
  effectiveTo: "2015-03-01T22:30:00+00:00",
  name: "Food Scientist",
  fte: "1",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveFrom: [`RFC3339DatetimeProperty4`](./models/rfc3339-datetime-property4.ts)<a id="effectivefrom-rfc3339datetimeproperty4modelsrfc3339-datetime-property4ts"></a>

##### effectiveTo: `string`<a id="effectiveto-string"></a>

The date this [Job](https://developers.intellihr.io/docs/v1/) Update is effective to within the organisation. Note that this doesn\\\'t affect the end date of the overall job itself. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### name: `string`<a id="name-string"></a>

The job name to be updated. Will attempt to match to an existing [Position Title](https://developers.intellihr.io/docs/v1/), otherwise creates a new [Position Title](https://developers.intellihr.io/docs/v1/).

##### businessEntity: [`JobPatchRequestBusinessEntity`](./models/job-patch-request-business-entity.ts)<a id="businessentity-jobpatchrequestbusinessentitymodelsjob-patch-request-business-entityts"></a>

##### businessUnit: [`JobPatchRequestBusinessUnit`](./models/job-patch-request-business-unit.ts)<a id="businessunit-jobpatchrequestbusinessunitmodelsjob-patch-request-business-unitts"></a>

##### establishment: [`JobPatchRequestEstablishment`](./models/job-patch-request-establishment.ts)<a id="establishment-jobpatchrequestestablishmentmodelsjob-patch-request-establishmentts"></a>

##### jobChangeReason: [`JobPatchRequestJobChangeReason`](./models/job-patch-request-job-change-reason.ts)<a id="jobchangereason-jobpatchrequestjobchangereasonmodelsjob-patch-request-job-change-reasonts"></a>

##### supervisorPerson: [`JobPatchRequestSupervisorPerson`](./models/job-patch-request-supervisor-person.ts)<a id="supervisorperson-jobpatchrequestsupervisorpersonmodelsjob-patch-request-supervisor-personts"></a>

##### supervisorJob: [`JobPatchRequestSupervisorJob`](./models/job-patch-request-supervisor-job.ts)<a id="supervisorjob-jobpatchrequestsupervisorjobmodelsjob-patch-request-supervisor-jobts"></a>

##### location: [`JobPatchRequestLocation`](./models/job-patch-request-location.ts)<a id="location-jobpatchrequestlocationmodelsjob-patch-request-locationts"></a>

##### workClass: [`JobPatchRequestWorkClass`](./models/job-patch-request-work-class.ts)<a id="workclass-jobpatchrequestworkclassmodelsjob-patch-request-work-classts"></a>

##### workType: [`JobPatchRequestWorkType`](./models/job-patch-request-work-type.ts)<a id="worktype-jobpatchrequestworktypemodelsjob-patch-request-work-typets"></a>

##### fte: `string`<a id="fte-string"></a>

The full time equivalent of this [Job](https://developers.intellihr.io/docs/v1/). Indicating the workload of an employee that can be comparable across different contexts. This is null for people without an FTE.

##### payGrade: [`JobPatchRequestPayGrade`](./models/job-patch-request-pay-grade.ts)<a id="paygrade-jobpatchrequestpaygrademodelsjob-patch-request-pay-gradets"></a>

##### employmentCondition: [`JobPatchRequestEmploymentCondition`](./models/job-patch-request-employment-condition.ts)<a id="employmentcondition-jobpatchrequestemploymentconditionmodelsjob-patch-request-employment-conditionts"></a>

##### remunerationSchedule: [`JobPatchRequestRemunerationSchedule`](./models/job-patch-request-remuneration-schedule.ts)<a id="remunerationschedule-jobpatchrequestremunerationschedulemodelsjob-patch-request-remuneration-schedulets"></a>

##### customFields: Record<string, [`JobPatchRequestCustomFieldsValue`](./models/job-patch-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this Job

#### 🔄 Return<a id="🔄-return"></a>

[JobPatchResponse](./models/job-patch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/jobs/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.locations.createNewLocation`<a id="intellihrlocationscreatenewlocation"></a>

Returns the created [Location](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewLocationResponse = await intellihr.locations.createNewLocation({
  name: "Brisbane Office",
  code: "BE001",
  address: "1234 Queen Street, Brisbane City QLD 4000",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Location](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### parentId: [`UUIDv4Property3`](./models/uuidv4-property3.ts)<a id="parentid-uuidv4property3modelsuuidv4-property3ts"></a>

##### code: `string`<a id="code-string"></a>

Code given to this [Location](https://developers.intellihr.io/docs/v1/)

##### address: `string`<a id="address-string"></a>

The address of this location.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Location](https://developers.intellihr.io/docs/v1/) in dropdowns.

##### customFields: Record<string, [`LocationsCreateRequestCustomFieldsValue`](./models/locations-create-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this Location

#### 🔄 Return<a id="🔄-return"></a>

[Locations](./models/locations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.locations.deleteById`<a id="intellihrlocationsdeletebyid"></a>

Deletes the [Location](https://developers.intellihr.io/docs/v1/)'s by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.locations.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locations/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.locations.findLocationById`<a id="intellihrlocationsfindlocationbyid"></a>

Returns a single location.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findLocationByIdResponse = await intellihr.locations.findLocationById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Locations](./models/locations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locations/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.locations.listAll`<a id="intellihrlocationslistall"></a>

Returns a list of all locations.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.locations.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[LocationsList](./models/locations-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.locations.updateById`<a id="intellihrlocationsupdatebyid"></a>

Returns the updated [Location](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await intellihr.locations.updateById({
  id: "id_example",
  name: "Brisbane Office",
  code: "BE001",
  address: "1234 Queen Street, Brisbane City QLD 4000",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### parentId: [`UUIDv4Property3`](./models/uuidv4-property3.ts)<a id="parentid-uuidv4property3modelsuuidv4-property3ts"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Location](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### code: `string`<a id="code-string"></a>

Code given to this [Location](https://developers.intellihr.io/docs/v1/)

##### address: `string`<a id="address-string"></a>

The address of this location.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Location](https://developers.intellihr.io/docs/v1/) in dropdowns.

##### customFields: Record<string, [`LocationsPatchRequestCustomFieldsValue`](./models/locations-patch-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this Location

#### 🔄 Return<a id="🔄-return"></a>

[Locations](./models/locations.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locations/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.payGrades.createRecord`<a id="intellihrpaygradescreaterecord"></a>

Create a new Pay Grade record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRecordResponse = await intellihr.payGrades.createRecord({
  description: "The founder pay grade",
  name: "Founder",
  code: "L0",
  payGradeType: "FIXED",
  isOverridable: false,
  permanentHourlyRate: 25.5,
  permanentHourlyRateCurrency: "AUD",
  casualHourlyRate: 25.5,
  casualHourlyRateCurrency: "AUD",
  annualSalary: 25.5,
  annualSalaryCurrency: "AUD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name assigned to this [Pay Grade](https://developers.intellihr.io/docs/v1/).

##### description: `string`<a id="description-string"></a>

Description of the [Pay Grade](https://developers.intellihr.io/docs/v1/).

##### code: `string`<a id="code-string"></a>

Administrative, short code associated to the [Pay Grade](https://developers.intellihr.io/docs/v1/).

##### employmentCondition: [`PayGradeCreateRequestEmploymentCondition`](./models/pay-grade-create-request-employment-condition.ts)<a id="employmentcondition-paygradecreaterequestemploymentconditionmodelspay-grade-create-request-employment-conditionts"></a>

##### payGradeType: `string`<a id="paygradetype-string"></a>

The type of this [Pay Grade](https://developers.intellihr.io/docs/v1/). Enum: `FIXED` or `STEP`.

##### isOverridable: `boolean`<a id="isoverridable-boolean"></a>

Allow this [Pay Grade](https://developers.intellihr.io/docs/v1/) value to be overwritten.

##### permanentHourlyRate: `number`<a id="permanenthourlyrate-number"></a>

Stores the hourly rate for permanent [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.

##### permanentHourlyRateCurrency: `string`<a id="permanenthourlyratecurrency-string"></a>

The currency that the permanentHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### casualHourlyRate: `number`<a id="casualhourlyrate-number"></a>

Stores the hourly rate for casual [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.

##### casualHourlyRateCurrency: `string`<a id="casualhourlyratecurrency-string"></a>

The currency that the casualHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### annualSalary: `number`<a id="annualsalary-number"></a>

Stores the annual salary for [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.

##### annualSalaryCurrency: `string`<a id="annualsalarycurrency-string"></a>

The currency that the annualSalary is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### paySteps: [`PayGradeCreateRequestPayStepsInner`](./models/pay-grade-create-request-pay-steps-inner.ts)[]<a id="paysteps-paygradecreaterequestpaystepsinnermodelspay-grade-create-request-pay-steps-innerts"></a>

An array of Paygrade Step Rates. This array is to be used when payGradeType of \\\"Step\\\" is used.

#### 🔄 Return<a id="🔄-return"></a>

[PayGrades](./models/pay-grades.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pay-grades` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.payGrades.deleteById`<a id="intellihrpaygradesdeletebyid"></a>

Deletes the [Pay Grade](https://developers.intellihr.io/docs/v1/) by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.payGrades.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pay-grades/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.payGrades.findById`<a id="intellihrpaygradesfindbyid"></a>

Returns a single pay grade.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.payGrades.findById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### asAt: `string`<a id="asat-string"></a>

Used to configure what date to return this data, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime.   All data returned from the endpoints represent the values of the attributes at a specific point in time.   By default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.

#### 🔄 Return<a id="🔄-return"></a>

[PayGrades](./models/pay-grades.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pay-grades/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.payGrades.getAll`<a id="intellihrpaygradesgetall"></a>

Returns a list of all pay grades.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await intellihr.payGrades.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### asAt: `string`<a id="asat-string"></a>

Used to configure what date to return this data, as a [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6) datetime.   All data returned from the endpoints represent the values of the attributes at a specific point in time.   By default, the current datetime is used, but this parameter can be used to configure a different datetime to see historical data.

#### 🔄 Return<a id="🔄-return"></a>

[PayGradesList](./models/pay-grades-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pay-grades` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.payGrades.updateRecord`<a id="intellihrpaygradesupdaterecord"></a>

Patch attributes of an existing Pay Grade record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecordResponse = await intellihr.payGrades.updateRecord({
  id: "id_example",
  description: "The founder pay grade",
  effectiveFrom: "2015-03-01T22:30:00+00:00",
  effectiveTo: "2015-03-01T22:30:00+00:00",
  name: "Founder",
  code: "L0",
  payGradeType: "FIXED",
  permanentHourlyRate: 25.5,
  permanentHourlyRateCurrency: "AUD",
  casualHourlyRate: 25.5,
  casualHourlyRateCurrency: "AUD",
  annualSalary: 25.5,
  annualSalaryCurrency: "AUD",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### effectiveFrom: `string`<a id="effectivefrom-string"></a>

The date this [Pay Grade](https://developers.intellihr.io/docs/v1/) Update is effective from within the organisation. Note that this doesn\\\'t affect the availableFrom date of the overall Pay Grade itself.  Not providing an effectiveFrom will apply the changes from the beggining of time.. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### description: `string`<a id="description-string"></a>

Description of the [Pay Grade](https://developers.intellihr.io/docs/v1/).

##### effectiveTo: `string`<a id="effectiveto-string"></a>

The date this [Pay Grade](https://developers.intellihr.io/docs/v1/) Update is effective to within the organisation.. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Toggle the availability of the [Pay Grade](https://developers.intellihr.io/docs/v1/) on or off within the organisation.

##### name: `string`<a id="name-string"></a>

The name assigned to this [Pay Grade](https://developers.intellihr.io/docs/v1/).

##### code: `string`<a id="code-string"></a>

Administrative, short code associated to the [Pay Grade](https://developers.intellihr.io/docs/v1/).

##### employmentCondition: [`PayGradeUpdateRequestEmploymentCondition`](./models/pay-grade-update-request-employment-condition.ts)<a id="employmentcondition-paygradeupdaterequestemploymentconditionmodelspay-grade-update-request-employment-conditionts"></a>

##### payGradeType: `string`<a id="paygradetype-string"></a>

The type of this [Pay Grade](https://developers.intellihr.io/docs/v1/). Enum: `FIXED` or `STEP`.

##### isOverridable: `boolean`<a id="isoverridable-boolean"></a>

Allow this [Pay Grade](https://developers.intellihr.io/docs/v1/) value to be overwritten.

##### permanentHourlyRate: `number`<a id="permanenthourlyrate-number"></a>

Stores the hourly rate for permanent [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.

##### permanentHourlyRateCurrency: `string`<a id="permanenthourlyratecurrency-string"></a>

The currency that the permanentHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### casualHourlyRate: `number`<a id="casualhourlyrate-number"></a>

Stores the hourly rate for casual [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.

##### casualHourlyRateCurrency: `string`<a id="casualhourlyratecurrency-string"></a>

The currency that the casualHourlyRate is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### annualSalary: `number`<a id="annualsalary-number"></a>

Stores the annual salary for [Jobs](https://developers.intellihr.io/docs/v1/). These inputs will be ignored if you also pass in pay Step values.

##### annualSalaryCurrency: `string`<a id="annualsalarycurrency-string"></a>

The currency that the annualSalary is being paid in. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### paySteps: [`PayGradeUpdateRequestPayStepsInner`](./models/pay-grade-update-request-pay-steps-inner.ts)[]<a id="paysteps-paygradeupdaterequestpaystepsinnermodelspay-grade-update-request-pay-steps-innerts"></a>

An array of Paygrade Step Rates. This will replace the current Pay Steps with a new list.  Providing an `id` for an existing Pay Step will update that record instead of createing a new Pay Step.

#### 🔄 Return<a id="🔄-return"></a>

[PayGrades](./models/pay-grades.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/pay-grades/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.people.createNewPerson`<a id="intellihrpeoplecreatenewperson"></a>

Create a person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewPersonResponse = await intellihr.people.createNewPerson({
  lastName: "Wayne",
  gender: "Other",
  emailAddresses: [null],
  phoneNumbers: [null],
  addresses: [null],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### lastName: `string`<a id="lastname-string"></a>

The [Person\\\'s](https://developers.intellihr.io/docs/v1/) Last Name.

##### title: [`PeopleCreateRequestTitle`](./models/people-create-request-title.ts)<a id="title-peoplecreaterequesttitlemodelspeople-create-request-titlets"></a>

##### firstName: [`PeopleCreateRequestFirstName`](./models/people-create-request-first-name.ts)<a id="firstname-peoplecreaterequestfirstnamemodelspeople-create-request-first-namets"></a>

##### middleName: [`PeopleCreateRequestMiddleName`](./models/people-create-request-middle-name.ts)<a id="middlename-peoplecreaterequestmiddlenamemodelspeople-create-request-middle-namets"></a>

##### preferredName: [`PeopleCreateRequestPreferredName`](./models/people-create-request-preferred-name.ts)<a id="preferredname-peoplecreaterequestpreferrednamemodelspeople-create-request-preferred-namets"></a>

##### dateOfBirth: [`PeopleCreateRequestDateOfBirth`](./models/people-create-request-date-of-birth.ts)<a id="dateofbirth-peoplecreaterequestdateofbirthmodelspeople-create-request-date-of-birthts"></a>

##### gender: `string`<a id="gender-string"></a>

Human readable string for the [Person\\\'s](https://developers.intellihr.io/docs/v1/) gender, e.g. `Male`. Searching is done case-insensitively and \\\'starts-with\\\' e.g. passing `male` will match with a [Gender](https://developers.intellihr.io/docs/v1/) called \\\"Male\\\" as will \\\"m\\\" or \\\"M\\\". If multiple [Genders](https://developers.intellihr.io/docs/v1/) match the first will be chosen. The gender options available are: `Female`, `Male`, `Non-binary`, `Other`, `Undisclosed`.

##### employeeNumber: [`ExtendedLeavePropertyPersonEmployeeNumber`](./models/extended-leave-property-person-employee-number.ts)<a id="employeenumber-extendedleavepropertypersonemployeenumbermodelsextended-leave-property-person-employee-numberts"></a>

##### emergencyContact: [`PeopleCreateRequestEmergencyContact`](./models/people-create-request-emergency-contact.ts)<a id="emergencycontact-peoplecreaterequestemergencycontactmodelspeople-create-request-emergency-contactts"></a>

##### primaryEmailAddress: [`PeopleCreateRequestPrimaryEmailAddress`](./models/people-create-request-primary-email-address.ts)<a id="primaryemailaddress-peoplecreaterequestprimaryemailaddressmodelspeople-create-request-primary-email-addressts"></a>

##### primaryPhoneNumber: [`PeopleCreateRequestPrimaryPhoneNumber`](./models/people-create-request-primary-phone-number.ts)<a id="primaryphonenumber-peoplecreaterequestprimaryphonenumbermodelspeople-create-request-primary-phone-numberts"></a>

##### emailAddresses: [`PeopleCreateRequestEmailAddressesInner`](./models/people-create-request-email-addresses-inner.ts)[]<a id="emailaddresses-peoplecreaterequestemailaddressesinnermodelspeople-create-request-email-addresses-innerts"></a>

Information about this [Person\\\'s](https://developers.intellihr.io/docs/v1/) email addresses. This will replace all of their current emails. The provided email addresses will be converted to lowercase. Note that a [Person](https://developers.intellihr.io/docs/v1/) must have at least one primary email address.

##### phoneNumbers: [`PeopleCreateRequestPhoneNumbersInner`](./models/people-create-request-phone-numbers-inner.ts)[]<a id="phonenumbers-peoplecreaterequestphonenumbersinnermodelspeople-create-request-phone-numbers-innerts"></a>

Information about this [Person\\\'s](https://developers.intellihr.io/docs/v1/) phone numbers. This will replace all of their current phone numbers. Note that a [Person](https://developers.intellihr.io/docs/v1/) must have at least one primary phone number.

##### addresses: [`PeopleCreateRequestAddressesInner`](./models/people-create-request-addresses-inner.ts)[]<a id="addresses-peoplecreaterequestaddressesinnermodelspeople-create-request-addresses-innerts"></a>

Information about this [Person\\\'s](https://developers.intellihr.io/docs/v1/) addresses. This will insert all of their current addresses.

##### customFields: Record<string, [`PeopleCreateRequestCustomFieldsValue`](./models/people-create-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this [Person](https://developers.intellihr.io/docs/v1/)

##### medicalConditions: [`PeopleCreateRequestMedicalConditionsInner`](./models/people-create-request-medical-conditions-inner.ts)[]<a id="medicalconditions-peoplecreaterequestmedicalconditionsinnermodelspeople-create-request-medical-conditions-innerts"></a>

The medical conditions that this person has

##### workRight: [`PeopleCreateRequestWorkRight`](./models/people-create-request-work-right.ts)<a id="workright-peoplecreaterequestworkrightmodelspeople-create-request-work-rightts"></a>

##### workRightExpiryDate: [`PeopleCreateRequestWorkRightExpiryDate`](./models/people-create-request-work-right-expiry-date.ts)<a id="workrightexpirydate-peoplecreaterequestworkrightexpirydatemodelspeople-create-request-work-right-expiry-datets"></a>

##### userAccount: [`PeopleCreateRequestUserAccount`](./models/people-create-request-user-account.ts)<a id="useraccount-peoplecreaterequestuseraccountmodelspeople-create-request-user-accountts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[People](./models/people.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.people.findById`<a id="intellihrpeoplefindbyid"></a>

Get a single Person record by UUIDv4 identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.people.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[People](./models/people.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.people.listAllPeople`<a id="intellihrpeoplelistallpeople"></a>

Returns a list of all [People](https://developers.intellihr.io/docs/v1/) as at the current date.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllPeopleResponse = await intellihr.people.listAllPeople({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`PeopleListAllPeopleFiltersParameter`](./models/people-list-all-people-filters-parameter.ts)<a id="filters-peoplelistallpeoplefiltersparametermodelspeople-list-all-people-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[jobId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

##### sort: `string`<a id="sort-string"></a>

Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleList](./models/people-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.people.updatePersonById`<a id="intellihrpeopleupdatepersonbyid"></a>

Update a person

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePersonByIdResponse = await intellihr.people.updatePersonById({
  id: "id_example",
  lastName: "Wayne",
  gender: "Other",
  emailAddresses: [null],
  phoneNumbers: [null],
  addresses: [null],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: [`PeopleCreateRequestTitle`](./models/people-create-request-title.ts)<a id="title-peoplecreaterequesttitlemodelspeople-create-request-titlets"></a>

##### firstName: [`PeopleCreateRequestFirstName`](./models/people-create-request-first-name.ts)<a id="firstname-peoplecreaterequestfirstnamemodelspeople-create-request-first-namets"></a>

##### middleName: [`PeopleCreateRequestMiddleName`](./models/people-create-request-middle-name.ts)<a id="middlename-peoplecreaterequestmiddlenamemodelspeople-create-request-middle-namets"></a>

##### lastName: `string`<a id="lastname-string"></a>

The [Person\\\'s](https://developers.intellihr.io/docs/v1/) Last Name.

##### preferredName: [`PeopleCreateRequestPreferredName`](./models/people-create-request-preferred-name.ts)<a id="preferredname-peoplecreaterequestpreferrednamemodelspeople-create-request-preferred-namets"></a>

##### dateOfBirth: [`PeopleCreateRequestDateOfBirth`](./models/people-create-request-date-of-birth.ts)<a id="dateofbirth-peoplecreaterequestdateofbirthmodelspeople-create-request-date-of-birthts"></a>

##### gender: `string`<a id="gender-string"></a>

Human readable string for the [Person\\\'s](https://developers.intellihr.io/docs/v1/) gender, e.g. `Male`. Searching is done case-insensitively and \\\'starts-with\\\' e.g. passing `male` will match with a [Gender](https://developers.intellihr.io/docs/v1/) called \\\"Male\\\" as will \\\"m\\\" or \\\"M\\\". If multiple [Genders](https://developers.intellihr.io/docs/v1/) match the first will be chosen. The gender options available are: `Female`, `Male`, `Non-binary`, `Other`, `Undisclosed`.

##### employeeNumber: [`ExtendedLeavePropertyPersonEmployeeNumber`](./models/extended-leave-property-person-employee-number.ts)<a id="employeenumber-extendedleavepropertypersonemployeenumbermodelsextended-leave-property-person-employee-numberts"></a>

##### emergencyContact: [`PeopleUpdateRequestEmergencyContact`](./models/people-update-request-emergency-contact.ts)<a id="emergencycontact-peopleupdaterequestemergencycontactmodelspeople-update-request-emergency-contactts"></a>

##### emailAddresses: [`PeopleUpdateRequestEmailAddressesInner`](./models/people-update-request-email-addresses-inner.ts)[]<a id="emailaddresses-peopleupdaterequestemailaddressesinnermodelspeople-update-request-email-addresses-innerts"></a>

Information about this [Person\\\'s](https://developers.intellihr.io/docs/v1/) email addresses. This will replace all of their current emails. The provided email addresses will be converted to lowercase. Note that a [Person](https://developers.intellihr.io/docs/v1/) must have at least one primary email address.

##### phoneNumbers: [`PeopleUpdateRequestPhoneNumbersInner`](./models/people-update-request-phone-numbers-inner.ts)[]<a id="phonenumbers-peopleupdaterequestphonenumbersinnermodelspeople-update-request-phone-numbers-innerts"></a>

Information about this [Person\\\'s](https://developers.intellihr.io/docs/v1/) phone numbers. This will replace all of their current phone numbers. Note that a [Person](https://developers.intellihr.io/docs/v1/) must have at least one primary phone number.

##### addresses: [`PeopleUpdateRequestAddressesInner`](./models/people-update-request-addresses-inner.ts)[]<a id="addresses-peopleupdaterequestaddressesinnermodelspeople-update-request-addresses-innerts"></a>

Information about this [Person\\\'s](https://developers.intellihr.io/docs/v1/) addresses. This will replace all of their current addresses.

##### customFields: Record<string, [`PeopleUpdateRequestCustomFieldsValue`](./models/people-update-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this [Person](https://developers.intellihr.io/docs/v1/)

##### medicalConditions: [`PeopleUpdateRequestMedicalConditionsInner`](./models/people-update-request-medical-conditions-inner.ts)[]<a id="medicalconditions-peopleupdaterequestmedicalconditionsinnermodelspeople-update-request-medical-conditions-innerts"></a>

The medical conditions that this person has

##### workRight: [`PeopleUpdateRequestWorkRight`](./models/people-update-request-work-right.ts)<a id="workright-peopleupdaterequestworkrightmodelspeople-update-request-work-rightts"></a>

##### workRightExpiryDate: [`PeopleCreateRequestWorkRightExpiryDate`](./models/people-create-request-work-right-expiry-date.ts)<a id="workrightexpirydate-peoplecreaterequestworkrightexpirydatemodelspeople-create-request-work-right-expiry-datets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[People](./models/people.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleDocuments.createPresignedUploadUrl`<a id="intellihrpeopledocumentscreatepresigneduploadurl"></a>

Create a presigned upload URL

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPresignedUploadUrlResponse =
  await intellihr.peopleDocuments.createPresignedUploadUrl({
    personId: "personId_example",
    filename: "OfferLetter.pdf",
    mime: "application/pdf",
    size: 300,
    extension: "pdf",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filename: `string`<a id="filename-string"></a>

The filename of the document. This will be used for display name. Includes extension.

##### mime: `string`<a id="mime-string"></a>

The mime type of the document

##### size: `number`<a id="size-number"></a>

The size in bytes. We use this to validate the upload was successful so must match the actual file size

##### extension: `string`<a id="extension-string"></a>

The extension of the document, not including the dot

##### personId: `string`<a id="personid-string"></a>

personId parameter

#### 🔄 Return<a id="🔄-return"></a>

[PeopleDocumentsCreateResponse](./models/people-documents-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleDocuments.list`<a id="intellihrpeopledocumentslist"></a>

Returns a list of all [Documents](https://developers.intellihr.io/docs/v1/) of a given [person]((https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await intellihr.peopleDocuments.list({
  personId: "personId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

##### limit: `number`<a id="limit-number"></a>

The number of items per page

##### page: `number`<a id="page-number"></a>

The page number

#### 🔄 Return<a id="🔄-return"></a>

[PeopleDocumentsFindResponse](./models/people-documents-find-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/documents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleDocuments.updateDocument`<a id="intellihrpeopledocumentsupdatedocument"></a>

Update a Document

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDocumentResponse = await intellihr.peopleDocuments.updateDocument({
  personId: "personId_example",
  id: "id_example",
  filename: "OfferLetter.pdf",
  uploadStatus: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

personId parameter

##### filename: `string`<a id="filename-string"></a>

The filename of the document. This will be used for display name. Includes extension.

##### uploadStatus: `any`<a id="uploadstatus-any"></a>

The upload status of this [Document](https://developers.intellihr.io/docs/v1/). Enum: `SUCCESS`, `PENDING`, `FAILED`.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleDocumentsPatchResponse](./models/people-documents-patch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/documents/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleImages.generateTemporaryImageUrl`<a id="intellihrpeopleimagesgeneratetemporaryimageurl"></a>

Generates an upload url for an temporary image of the specified type to an existing [Person](https://developers.intellihr.io/docs/v1/)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateTemporaryImageUrlResponse =
  await intellihr.peopleImages.generateTemporaryImageUrl({
    personId: "personId_example",
    imageType: "PERSON_PROFILE",
    extension: "png",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

##### imageType: `string`<a id="imagetype-string"></a>

The Image Type. Enum: `PERSON_PROFILE`, `PROFILE_COVER`.

##### extension: `string`<a id="extension-string"></a>

The extension of the image, not including the dot

#### 🔄 Return<a id="🔄-return"></a>

[PersonIdImageCreateResponse](./models/person-id-image-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/images` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleImages.getTemporaryImage`<a id="intellihrpeopleimagesgettemporaryimage"></a>

Returns the current temporary image of the specified type for the provided [Person](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTemporaryImageResponse =
  await intellihr.peopleImages.getTemporaryImage({
    personId: "personId_example",
    imageType: "PERSON_PROFILE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

##### imageType: `string`<a id="imagetype-string"></a>

The Image Type. Enum: `PERSON_PROFILE`, `PROFILE_COVER`.

#### 🔄 Return<a id="🔄-return"></a>

[PersonIdImageFindResponse](./models/person-id-image-find-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/images` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleImages.promoteImage`<a id="intellihrpeopleimagespromoteimage"></a>

Activates the temporary image as the active image on a [Person](https://developers.intellihr.io/docs/v1/), has some minor editing options.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const promoteImageResponse = await intellihr.peopleImages.promoteImage({
  personId: "personId_example",
  imageType: "PERSON_PROFILE",
  rotation: 0,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

##### imageType: `string`<a id="imagetype-string"></a>

The Image Type. Enum: `PERSON_PROFILE`, `PROFILE_COVER`.

##### rotation: `number`<a id="rotation-number"></a>

the degree to rotate the image from 0-359

##### coordinates: [`PersonIdImagePatchRequestCoordinates`](./models/person-id-image-patch-request-coordinates.ts)<a id="coordinates-personidimagepatchrequestcoordinatesmodelsperson-id-image-patch-request-coordinatests"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/images` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleSkills.assignSkillToPerson`<a id="intellihrpeopleskillsassignskilltoperson"></a>

Assigns a [Skill](https://developers.intellihr.io/docs/v1/) to an existing [Person](https://developers.intellihr.io/docs/v1/)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignSkillToPersonResponse =
  await intellihr.peopleSkills.assignSkillToPerson({
    personId: "personId_example",
    skillId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    skillLevel: "Fortnightly",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### skillId: `string`<a id="skillid-string"></a>

The identifier string for the [Skill](https://developers.intellihr.io/docs/v1/).

##### skillLevel: `string`<a id="skilllevel-string"></a>

The Skill Level you wish to apply to this Skill. Enum: `Expert`, `Proficient`, `Interested`, `Basic`.

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

#### 🔄 Return<a id="🔄-return"></a>

[PersonId](./models/person-id.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/skills` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleSkills.deleteAssignedSkillById`<a id="intellihrpeopleskillsdeleteassignedskillbyid"></a>

Deletes the assigned [Skill](https://developers.intellihr.io/docs/v1/) from a [Person](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAssignedSkillByIdResponse =
  await intellihr.peopleSkills.deleteAssignedSkillById({
    personId: "personId_example",
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/skills/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleSkills.findSkillById`<a id="intellihrpeopleskillsfindskillbyid"></a>

Returns a single [Skill](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findSkillByIdResponse = await intellihr.peopleSkills.findSkillById({
  personId: "personId_example",
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

#### 🔄 Return<a id="🔄-return"></a>

[PersonId](./models/person-id.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/skills/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleSkills.listPersonSkills`<a id="intellihrpeopleskillslistpersonskills"></a>

Returns a list of all [Skills](https://developers.intellihr.io/docs/v1/) for the provided [Person](https://developers.intellihr.io/docs/v1/).  Note that this endpoint is not Paginated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPersonSkillsResponse = await intellihr.peopleSkills.listPersonSkills({
  personId: "personId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

#### 🔄 Return<a id="🔄-return"></a>

[PersonIdList](./models/person-id-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/skills` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.peopleSkills.updateAssignedSkill`<a id="intellihrpeopleskillsupdateassignedskill"></a>

Update an assigned [Skill](https://developers.intellihr.io/docs/v1/) on a [Person](https://developers.intellihr.io/docs/v1/)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAssignedSkillResponse =
  await intellihr.peopleSkills.updateAssignedSkill({
    personId: "personId_example",
    id: "id_example",
    skillLevel: "Fortnightly",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

Id string param for relevant [Person](https://developers.intellihr.io/docs/v1/)

##### skillLevel: `string`<a id="skilllevel-string"></a>

The Skill Level you wish to apply to this Skill. Enum: `Expert`, `Proficient`, `Interested`, `Basic`.

#### 🔄 Return<a id="🔄-return"></a>

[PersonId](./models/person-id.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{personId}/skills/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.permissionGroups.findGroupById`<a id="intellihrpermissiongroupsfindgroupbyid"></a>

Returns a single [Permission Groups](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findGroupByIdResponse = await intellihr.permissionGroups.findGroupById();
```

#### 🔄 Return<a id="🔄-return"></a>

[PermissionGroups](./models/permission-groups.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/permission-groups/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.permissionGroups.listAll`<a id="intellihrpermissiongroupslistall"></a>

Returns a list of all [Permission Groups](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.permissionGroups.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`PermissionGroupsListAllFiltersParameter`](./models/permission-groups-list-all-filters-parameter.ts)<a id="filters-permissiongroupslistallfiltersparametermodelspermission-groups-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[isEnabled][eq]=true`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionGroupsList](./models/permission-groups-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/permission-groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.personDocumentsDeprecated.createPresignedUploadUrl`<a id="intellihrpersondocumentsdeprecatedcreatepresigneduploadurl"></a>

Create a presigned upload URL

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPresignedUploadUrlResponse =
  await intellihr.personDocumentsDeprecated.createPresignedUploadUrl({
    person: {
      id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
      name: "Bruce Wayne",
      primaryEmailAddress: "bruce.wayne@example.com",
      employeeNumber: "00001",
      autoIncrementIntellihrId: "1000",
    },
    filename: "OfferLetter.pdf",
    mime: "application/pdf",
    size: 300,
    extension: "pdf",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### person: [`PersonDocumentsCreateRequestPerson`](./models/person-documents-create-request-person.ts)<a id="person-persondocumentscreaterequestpersonmodelsperson-documents-create-request-personts"></a>

##### filename: `string`<a id="filename-string"></a>

The filename of the document. This will be used for display name. Includes extension.

##### mime: `string`<a id="mime-string"></a>

The mime type of the document

##### size: `number`<a id="size-number"></a>

The size in bytes. We use this to validate the upload was successful so must match the actual file size

##### extension: `string`<a id="extension-string"></a>

The extension of the document, not including the dot

#### 🔄 Return<a id="🔄-return"></a>

[PersonDocumentsCreateResponse](./models/person-documents-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/person-documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.personDocumentsDeprecated.updateDocument`<a id="intellihrpersondocumentsdeprecatedupdatedocument"></a>

Update a Document

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDocumentResponse =
  await intellihr.personDocumentsDeprecated.updateDocument({
    id: "id_example",
    personId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    filename: "OfferLetter.pdf",
    uploadStatus: null,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

The identifier string for the [Person](https://developers.intellihr.io/docs/v1/) to whom this [Document](https://developers.intellihr.io/docs/v1/) belongs.

##### filename: `string`<a id="filename-string"></a>

The filename of the document. This will be used for display name. Includes extension.

##### uploadStatus: `any`<a id="uploadstatus-any"></a>

The upload status of this [Document](https://developers.intellihr.io/docs/v1/). Enum: `SUCCESS`, `PENDING`, `FAILED`.

#### 🔄 Return<a id="🔄-return"></a>

[PersonDocumentsPatchResponse](./models/person-documents-patch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/person-documents/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.positionTitles.createNewRecord`<a id="intellihrpositiontitlescreatenewrecord"></a>

Create a new [Position Title](https://developers.intellihr.io/docs/v1/) record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewRecordResponse = await intellihr.positionTitles.createNewRecord({
  name: "Engineering Manager",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Position Title](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### code: `any`<a id="code-any"></a>

Code given to this [Position Title](https://developers.intellihr.io/docs/v1/).

#### 🔄 Return<a id="🔄-return"></a>

[PositionTitles](./models/position-titles.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position-titles` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.positionTitles.deleteById`<a id="intellihrpositiontitlesdeletebyid"></a>

Deletes the [Position Titles](https://developers.intellihr.io/docs/v1/) by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.positionTitles.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position-titles/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.positionTitles.listAll`<a id="intellihrpositiontitleslistall"></a>

Returns a list of all [Position Titles](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.positionTitles.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`PositionTitlesListAllFiltersParameter`](./models/position-titles-list-all-filters-parameter.ts)<a id="filters-positiontitleslistallfiltersparametermodelsposition-titles-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Engineering Manager`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[PositionTitlesList](./models/position-titles-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position-titles` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.positionTitles.updateAttributes`<a id="intellihrpositiontitlesupdateattributes"></a>

Patch attributes of an existing [Position Titles](https://developers.intellihr.io/docs/v1/) record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAttributesResponse =
  await intellihr.positionTitles.updateAttributes({
    id: "id_example",
    name: "Engineering Manager",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Name given to this [Position Title](https://developers.intellihr.io/docs/v1/). This name would normally be shown to users of the system.

##### code: `any`<a id="code-any"></a>

Code given to this [Position Title](https://developers.intellihr.io/docs/v1/).

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Position Title](https://developers.intellihr.io/docs/v1/) in dropdowns.

#### 🔄 Return<a id="🔄-return"></a>

[PositionTitles](./models/position-titles.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/position-titles/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationInstances.createNewInstance`<a id="intellihrqualificationinstancescreatenewinstance"></a>

Returns the created [Qualification Instance](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewInstanceResponse =
  await intellihr.qualificationInstances.createNewInstance({
    personId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    qualificationLibraryItemId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    status: "DRAFT",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### personId: `string`<a id="personid-string"></a>

The identifier string for the Person Id.

##### qualificationLibraryItemId: `string`<a id="qualificationlibraryitemid-string"></a>

The identifier string for the Qualification Library Item Id.

##### status: `string`<a id="status-string"></a>

The status of this [Qualification Instance](https://developers.intellihr.io/docs/v1/)

##### issuingOrganisation: [`QualificationInstancesCreateRequestIssuingOrganisation`](./models/qualification-instances-create-request-issuing-organisation.ts)<a id="issuingorganisation-qualificationinstancescreaterequestissuingorganisationmodelsqualification-instances-create-request-issuing-organisationts"></a>

##### registrationNumber: [`QualificationInstancesCreateRequestRegistrationNumber`](./models/qualification-instances-create-request-registration-number.ts)<a id="registrationnumber-qualificationinstancescreaterequestregistrationnumbermodelsqualification-instances-create-request-registration-numberts"></a>

##### issueDate: [`RFC3339DatetimeProperty9`](./models/rfc3339-datetime-property9.ts)<a id="issuedate-rfc3339datetimeproperty9modelsrfc3339-datetime-property9ts"></a>

##### expiryDate: [`RFC3339DatetimeProperty10`](./models/rfc3339-datetime-property10.ts)<a id="expirydate-rfc3339datetimeproperty10modelsrfc3339-datetime-property10ts"></a>

##### expiryNotificationQueuedAt: [`RFC3339DatetimeProperty11`](./models/rfc3339-datetime-property11.ts)<a id="expirynotificationqueuedat-rfc3339datetimeproperty11modelsrfc3339-datetime-property11ts"></a>

##### notes: [`QualificationInstancesCreateRequestNotes`](./models/qualification-instances-create-request-notes.ts)<a id="notes-qualificationinstancescreaterequestnotesmodelsqualification-instances-create-request-notests"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Qualifications](./models/qualifications.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualifications` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationInstances.deleteById`<a id="intellihrqualificationinstancesdeletebyid"></a>

Deletes the [Qualification Instance](https://developers.intellihr.io/docs/v1/) by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.qualificationInstances.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualifications/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationInstances.findById`<a id="intellihrqualificationinstancesfindbyid"></a>

Returns a single [Qualification Instance](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.qualificationInstances.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Qualifications](./models/qualifications.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualifications/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationInstances.listAll`<a id="intellihrqualificationinstanceslistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.qualificationInstances.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`QualificationInstancesListAllFiltersParameter`](./models/qualification-instances-list-all-filters-parameter.ts)<a id="filters-qualificationinstanceslistallfiltersparametermodelsqualification-instances-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[personId][eq]=dc996d73-a75e-499c-a96e-bd7d0df45f57,26d0ffc4-60f6-4672-a603-caaa4564af12`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[QualificationsList](./models/qualifications-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualifications` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationInstances.updateInstanceById`<a id="intellihrqualificationinstancesupdateinstancebyid"></a>

Returns the updated [Qualification Instance](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInstanceByIdResponse =
  await intellihr.qualificationInstances.updateInstanceById({
    id: "id_example",
    status: "DRAFT",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

The status of this [Qualification Instance](https://developers.intellihr.io/docs/v1/)

##### issuingOrganisation: [`QualificationInstancesCreateRequestIssuingOrganisation`](./models/qualification-instances-create-request-issuing-organisation.ts)<a id="issuingorganisation-qualificationinstancescreaterequestissuingorganisationmodelsqualification-instances-create-request-issuing-organisationts"></a>

##### registrationNumber: [`QualificationInstancesCreateRequestRegistrationNumber`](./models/qualification-instances-create-request-registration-number.ts)<a id="registrationnumber-qualificationinstancescreaterequestregistrationnumbermodelsqualification-instances-create-request-registration-numberts"></a>

##### issueDate: [`RFC3339DatetimeProperty9`](./models/rfc3339-datetime-property9.ts)<a id="issuedate-rfc3339datetimeproperty9modelsrfc3339-datetime-property9ts"></a>

##### expiryDate: [`RFC3339DatetimeProperty10`](./models/rfc3339-datetime-property10.ts)<a id="expirydate-rfc3339datetimeproperty10modelsrfc3339-datetime-property10ts"></a>

##### expiryNotificationQueuedAt: [`RFC3339DatetimeProperty11`](./models/rfc3339-datetime-property11.ts)<a id="expirynotificationqueuedat-rfc3339datetimeproperty11modelsrfc3339-datetime-property11ts"></a>

##### notes: [`QualificationInstancesCreateRequestNotes`](./models/qualification-instances-create-request-notes.ts)<a id="notes-qualificationinstancescreaterequestnotesmodelsqualification-instances-create-request-notests"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Qualifications](./models/qualifications.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualifications/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationLibraryItems.createNewRecord`<a id="intellihrqualificationlibraryitemscreatenewrecord"></a>

Create a new [Qualification Library Item](https://developers.intellihr.io/docs/v1/) record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewRecordResponse =
  await intellihr.qualificationLibraryItems.createNewRecord({
    name: "name_example",
    qualificationTypeId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    qualificationExpiryType: "EXPIRY_INAPPLICABLE",
    qualificationRegistrationNumberVisibilityType:
      "REGISTRATION_NUMBER_INAPPLICABLE",
    qualificationAttachmentRequirementType: "DOCUMENTS_OPTIONAL",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of this [Qualification Library Item](https://developers.intellihr.io/docs/v1/)

##### qualificationTypeId: `string`<a id="qualificationtypeid-string"></a>

The identifier string for the Qualification Type Id.

##### qualificationExpiryType: `string`<a id="qualificationexpirytype-string"></a>

The expiry type for this library item

##### qualificationRegistrationNumberVisibilityType: `string`<a id="qualificationregistrationnumbervisibilitytype-string"></a>

The expiry type for this library item

##### qualificationAttachmentRequirementType: `string`<a id="qualificationattachmentrequirementtype-string"></a>

If documents are required for this library item

##### expiryWarningPeriod: `number`<a id="expirywarningperiod-number"></a>

Period in days, that there is a warning before the expiry of the qualification. If qualificationExpiryType is set to EXPIRY_INAPPLICABLE, this value will be ignored.

##### sendExpiryWarning: `boolean`<a id="sendexpirywarning-boolean"></a>

If this [Qualification Library Item](https://developers.intellihr.io/docs/v1/) will send expiry warning/s using the periods defined. If qualificationExpiryType is set to EXPIRY_INAPPLICABLE, this value will be ignored.

#### 🔄 Return<a id="🔄-return"></a>

[QualificationLibraryItems](./models/qualification-library-items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-library-items` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationLibraryItems.deleteById`<a id="intellihrqualificationlibraryitemsdeletebyid"></a>

Deletes the [Qualification Library Items](https://developers.intellihr.io/docs/v1/) by the given ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse =
  await intellihr.qualificationLibraryItems.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-library-items/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationLibraryItems.findByID`<a id="intellihrqualificationlibraryitemsfindbyid"></a>

Returns a single [Qualification Library Item](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIDResponse = await intellihr.qualificationLibraryItems.findByID();
```

#### 🔄 Return<a id="🔄-return"></a>

[QualificationLibraryItemsList](./models/qualification-library-items-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-library-items/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationLibraryItems.getAllQualifications`<a id="intellihrqualificationlibraryitemsgetallqualifications"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllQualificationsResponse =
  await intellihr.qualificationLibraryItems.getAllQualifications();
```

#### 🔄 Return<a id="🔄-return"></a>

[QualificationLibraryItems](./models/qualification-library-items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-library-items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationLibraryItems.updateRecord`<a id="intellihrqualificationlibraryitemsupdaterecord"></a>

Patch attributes of an existing [Qualification Library Items](https://developers.intellihr.io/docs/v1/) record with the provided data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecordResponse =
  await intellihr.qualificationLibraryItems.updateRecord({
    id: "id_example",
    qualificationTypeId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    qualificationExpiryType: "EXPIRY_INAPPLICABLE",
    qualificationRegistrationNumberVisibilityType:
      "REGISTRATION_NUMBER_INAPPLICABLE",
    qualificationAttachmentRequirementType: "DOCUMENTS_OPTIONAL",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of this [Qualification Library Item](https://developers.intellihr.io/docs/v1/)

##### qualificationTypeId: `string`<a id="qualificationtypeid-string"></a>

The identifier string for the Qualification Type Id.

##### qualificationExpiryType: `string`<a id="qualificationexpirytype-string"></a>

The expiry type for this library item

##### qualificationRegistrationNumberVisibilityType: `string`<a id="qualificationregistrationnumbervisibilitytype-string"></a>

The expiry type for this library item

##### qualificationAttachmentRequirementType: `string`<a id="qualificationattachmentrequirementtype-string"></a>

If documents are required for this library item

##### expiryWarningPeriod: `number`<a id="expirywarningperiod-number"></a>

Period in days, that there is a warning before the expiry of the qualification. If qualificationExpiryType is set to EXPIRY_INAPPLICABLE, this value will be ignored.

##### sendExpiryWarning: `boolean`<a id="sendexpirywarning-boolean"></a>

If this [Qualification Library Item](https://developers.intellihr.io/docs/v1/) will send expiry warning/s using the periods defined. If qualificationExpiryType is set to EXPIRY_INAPPLICABLE, this value will be ignored.

#### 🔄 Return<a id="🔄-return"></a>

[QualificationLibraryItems](./models/qualification-library-items.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-library-items/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationStatuses.findStatusById`<a id="intellihrqualificationstatusesfindstatusbyid"></a>

Returns a single [Qualification Status](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findStatusByIdResponse =
  await intellihr.qualificationStatuses.findStatusById();
```

#### 🔄 Return<a id="🔄-return"></a>

[QualificationStatuses](./models/qualification-statuses.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-statuses/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationTypes.findById`<a id="intellihrqualificationtypesfindbyid"></a>

Returns a single [Qualification Type](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.qualificationTypes.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[QualificationTypesList](./models/qualification-types-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-types/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.qualificationTypes.listAllQualificationTypes`<a id="intellihrqualificationtypeslistallqualificationtypes"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllQualificationTypesResponse =
  await intellihr.qualificationTypes.listAllQualificationTypes();
```

#### 🔄 Return<a id="🔄-return"></a>

[QualificationTypes](./models/qualification-types.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/qualification-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.recruitmentSources.findById`<a id="intellihrrecruitmentsourcesfindbyid"></a>

Returns a single recruitment source.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.recruitmentSources.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentSources](./models/recruitment-sources.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment-sources/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.recruitmentSources.listAll`<a id="intellihrrecruitmentsourceslistall"></a>

Returns a list of all recruitment sources.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.recruitmentSources.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[RecruitmentSourcesList](./models/recruitment-sources-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/recruitment-sources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.representativeTypes.findById`<a id="intellihrrepresentativetypesfindbyid"></a>

Returns a single [Representative Type](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.representativeTypes.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[RepresentativeTypesList](./models/representative-types-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/representative-types/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.representativeTypes.listAll`<a id="intellihrrepresentativetypeslistall"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.representativeTypes.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[RepresentativeTypes](./models/representative-types.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/representative-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skillDisciplines.createNewDiscipline`<a id="intellihrskilldisciplinescreatenewdiscipline"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDisciplineResponse =
  await intellihr.skillDisciplines.createNewDiscipline({
    name: "Accounting",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of this [Skill Discipline](https://developers.intellihr.io/docs/v1/).

#### 🔄 Return<a id="🔄-return"></a>

[SkillDisciplines](./models/skill-disciplines.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skill-disciplines` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skillDisciplines.findById`<a id="intellihrskilldisciplinesfindbyid"></a>

Returns a single webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.skillDisciplines.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[SkillDisciplines](./models/skill-disciplines.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skill-disciplines/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skillDisciplines.listAll`<a id="intellihrskilldisciplineslistall"></a>

Returns a list of all [Skill Disciplines](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.skillDisciplines.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`SkillDisciplinesListAllFiltersParameter`](./models/skill-disciplines-list-all-filters-parameter.ts)<a id="filters-skilldisciplineslistallfiltersparametermodelsskill-disciplines-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Accounting`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[SkillDisciplinesList](./models/skill-disciplines-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skill-disciplines` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skillDisciplines.updateDisciplineById`<a id="intellihrskilldisciplinesupdatedisciplinebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDisciplineByIdResponse =
  await intellihr.skillDisciplines.updateDisciplineById({
    id: "id_example",
    name: "Accounting",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

The name of this [Skill Discipline](https://developers.intellihr.io/docs/v1/).

#### 🔄 Return<a id="🔄-return"></a>

[SkillDisciplines](./models/skill-disciplines.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skill-disciplines/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skills.createNewSkill`<a id="intellihrskillscreatenewskill"></a>

Create a new Skill

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewSkillResponse = await intellihr.skills.createNewSkill({
  description:
    "The planning, execution, tracking, and analysis of a marketing initiative; sometimes centered around a new product launch or an event.",
  name: "Campaign Management",
  isBusinessCritical: true,
  skillDisciplineId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

A description of the [Skill](https://developers.intellihr.io/docs/v1/).

##### name: `string`<a id="name-string"></a>

User friendly name given to this [Skill](https://developers.intellihr.io/docs/v1/).

##### isBusinessCritical: `boolean`<a id="isbusinesscritical-boolean"></a>

Whether this [Skill](https://developers.intellihr.io/docs/v1/) is business critical.

##### skillDisciplineId: `string`<a id="skilldisciplineid-string"></a>

The identifier string for the [Skill Discipline](https://developers.intellihr.io/docs/v1/) to which this [Skill](https://developers.intellihr.io/docs/v1/) belongs.

#### 🔄 Return<a id="🔄-return"></a>

[Skills](./models/skills.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skills` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skills.findSkillById`<a id="intellihrskillsfindskillbyid"></a>

Returns a single [Skill](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findSkillByIdResponse = await intellihr.skills.findSkillById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Skills](./models/skills.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skills/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skills.getAll`<a id="intellihrskillsgetall"></a>

Returns a list of all [Skills](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await intellihr.skills.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`SkillsGetAllFiltersParameter`](./models/skills-get-all-filters-parameter.ts)<a id="filters-skillsgetallfiltersparametermodelsskills-get-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[isBusinessCritical][eq]=true`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

#### 🔄 Return<a id="🔄-return"></a>

[SkillsList](./models/skills-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skills` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.skills.updateSkillById`<a id="intellihrskillsupdateskillbyid"></a>

Update a Skill

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSkillByIdResponse = await intellihr.skills.updateSkillById({
  id: "id_example",
  description:
    "The planning, execution, tracking, and analysis of a marketing initiative; sometimes centered around a new product launch or an event.",
  name: "Campaign Management",
  isBusinessCritical: true,
  skillDisciplineId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### description: `string`<a id="description-string"></a>

A description of the [Skill](https://developers.intellihr.io/docs/v1/).

##### name: `string`<a id="name-string"></a>

User friendly name given to this [Skill](https://developers.intellihr.io/docs/v1/).

##### isBusinessCritical: `boolean`<a id="isbusinesscritical-boolean"></a>

Whether this [Skill](https://developers.intellihr.io/docs/v1/) is business critical.

##### skillDisciplineId: `string`<a id="skilldisciplineid-string"></a>

The identifier string for the [Skill Discipline](https://developers.intellihr.io/docs/v1/) to which this [Skill](https://developers.intellihr.io/docs/v1/) belongs.

#### 🔄 Return<a id="🔄-return"></a>

[Skills](./models/skills.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/skills/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainingProviders.findById`<a id="intellihrtrainingprovidersfindbyid"></a>

Returns a single [Training Provider](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.trainingProviders.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[TrainingProviders](./models/training-providers.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/training-providers/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainingProviders.listAll`<a id="intellihrtrainingproviderslistall"></a>

Returns a list of all [Training Providers](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.trainingProviders.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[TrainingProvidersList](./models/training-providers-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/training-providers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainingStatuses.listAll`<a id="intellihrtrainingstatuseslistall"></a>

Returns a list of all [Training Statuses](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.trainingStatuses.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[TrainingStatusesList](./models/training-statuses-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/training-statuses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainingTypes.findById`<a id="intellihrtrainingtypesfindbyid"></a>

Returns a single [Training Type](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.trainingTypes.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[TrainingTypes](./models/training-types.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/training-types/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainingTypes.listAll`<a id="intellihrtrainingtypeslistall"></a>

Returns a list of all [Training Types](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.trainingTypes.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[TrainingTypesList](./models/training-types-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/training-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainings.createNewTraining`<a id="intellihrtrainingscreatenewtraining"></a>

Create a new Training

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTrainingResponse = await intellihr.trainings.createNewTraining({
  completionDate: "2015-03-01T22:30:00+00:00",
  cost: "600",
  currency: "AUD",
  hours: "12",
  name: "Accounting Compliance 101",
  person: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    name: "Bruce Wayne",
    primaryEmailAddress: "bruce.wayne@example.com",
    employeeNumber: "00001",
    autoIncrementIntellihrId: "1000",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

User friendly name given to this [Training](https://developers.intellihr.io/docs/v1/) to identify it in the system.

##### person: [`TrainingsCreateRequestPerson`](./models/trainings-create-request-person.ts)<a id="person-trainingscreaterequestpersonmodelstrainings-create-request-personts"></a>

##### coordinatorPerson: [`TrainingsCreateRequestCoordinatorPerson`](./models/trainings-create-request-coordinator-person.ts)<a id="coordinatorperson-trainingscreaterequestcoordinatorpersonmodelstrainings-create-request-coordinator-personts"></a>

##### completionDate: `string`<a id="completiondate-string"></a>

The timestamp the [Training](https://developers.intellihr.io/docs/v1/) was completed. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### cost: `string`<a id="cost-string"></a>

The cost of this [Training](https://developers.intellihr.io/docs/v1/).

##### currency: `string`<a id="currency-string"></a>

The currency used for this [Training](https://developers.intellihr.io/docs/v1/). Will default to the tenant default currency when not provided. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### hours: `string`<a id="hours-string"></a>

How many hours were spent on this [Training](https://developers.intellihr.io/docs/v1/)

##### job: [`TrainingsCreateRequestJob`](./models/trainings-create-request-job.ts)<a id="job-trainingscreaterequestjobmodelstrainings-create-request-jobts"></a>

##### provider: [`TrainingsCreateRequestProvider`](./models/trainings-create-request-provider.ts)<a id="provider-trainingscreaterequestprovidermodelstrainings-create-request-providerts"></a>

##### type: [`TrainingsCreateRequestType`](./models/trainings-create-request-type.ts)<a id="type-trainingscreaterequesttypemodelstrainings-create-request-typets"></a>

##### customFields: Record<string, [`TrainingsCreateRequestCustomFieldsValue`](./models/trainings-create-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this [Training](https://developers.intellihr.io/docs/v1/)

##### status: [`TrainingsCreateRequestStatus`](./models/trainings-create-request-status.ts)<a id="status-trainingscreaterequeststatusmodelstrainings-create-request-statusts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Trainings](./models/trainings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trainings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainings.deleteById`<a id="intellihrtrainingsdeletebyid"></a>

Deletes the provided [Training](https://developers.intellihr.io/docs/v1/) record.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.trainings.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trainings/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainings.findTrainingById`<a id="intellihrtrainingsfindtrainingbyid"></a>

Returns a single [Training](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findTrainingByIdResponse = await intellihr.trainings.findTrainingById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Trainings](./models/trainings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trainings/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainings.listAll`<a id="intellihrtrainingslistall"></a>

Returns a list of all [Trainings](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.trainings.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### filters: [`TrainingsListAllFiltersParameter`](./models/trainings-list-all-filters-parameter.ts)<a id="filters-trainingslistallfiltersparametermodelstrainings-list-all-filters-parameterts"></a>

Filters can be applied in the query string to limit the data returned from this endpoint. Filters are provided in the format `filters[<filter_name>][<operation_type>]=<filter_value>`.For example, a filter to get items matching a specific filter value would be `filters[name][eq]=Accounting%20Compliance%20101`  Below is a list of operation types available on filters, note that each filter may not support every type:  • Equality `[eq]`: Checks for an exact match with the given filter value  The list of supported filters is given below.

##### sort: `string`<a id="sort-string"></a>

Sorting can be applied in the query string to order the data returned from this endpoint. Sort can be prepended with a minus to return the data in descending (-) order. For example, a sort to get the most recent records first would be `-createdAt`.

#### 🔄 Return<a id="🔄-return"></a>

[TrainingsList](./models/trainings-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trainings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.trainings.updateTrainingById`<a id="intellihrtrainingsupdatetrainingbyid"></a>

Update a Training

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTrainingByIdResponse = await intellihr.trainings.updateTrainingById(
  {
    id: "id_example",
    completionDate: "2015-03-01T22:30:00+00:00",
    cost: "600",
    currency: "AUD",
    hours: "12",
    name: "Accounting Compliance 101",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### coordinatorPerson: [`TrainingsPatchRequestCoordinatorPerson`](./models/trainings-patch-request-coordinator-person.ts)<a id="coordinatorperson-trainingspatchrequestcoordinatorpersonmodelstrainings-patch-request-coordinator-personts"></a>

##### completionDate: `string`<a id="completiondate-string"></a>

The timestamp the [Training](https://developers.intellihr.io/docs/v1/) was completed. This date will follow the format defined by [RFC3339](https://tools.ietf.org/html/rfc3339#section-5.6).   YYYY-MM-DD date formatting is also supported, although by using this format the date will be stored as the start of day in UTC time, not the requesting tenants timezone.

##### cost: `string`<a id="cost-string"></a>

The cost of this [Training](https://developers.intellihr.io/docs/v1/).

##### currency: `string`<a id="currency-string"></a>

The currency used for this [Training](https://developers.intellihr.io/docs/v1/). Will default to the tenant default currency when not provided. An international currency code. Typically AUD for Australian dollar, USD for American dollar etc. See [Official list of codes](https://www.iban.com/currency-codes).

##### hours: `string`<a id="hours-string"></a>

How many hours were spent on this [Training](https://developers.intellihr.io/docs/v1/)

##### job: [`TrainingsPatchRequestJob`](./models/trainings-patch-request-job.ts)<a id="job-trainingspatchrequestjobmodelstrainings-patch-request-jobts"></a>

##### name: `string`<a id="name-string"></a>

User friendly name given to this [Training](https://developers.intellihr.io/docs/v1/) to identify it in the system.

##### person: [`TrainingsPatchRequestPerson`](./models/trainings-patch-request-person.ts)<a id="person-trainingspatchrequestpersonmodelstrainings-patch-request-personts"></a>

##### provider: [`TrainingsPatchRequestProvider`](./models/trainings-patch-request-provider.ts)<a id="provider-trainingspatchrequestprovidermodelstrainings-patch-request-providerts"></a>

##### type: [`TrainingsPatchRequestType`](./models/trainings-patch-request-type.ts)<a id="type-trainingspatchrequesttypemodelstrainings-patch-request-typets"></a>

##### customFields: Record<string, [`TrainingsPatchRequestCustomFieldsValue`](./models/trainings-patch-request-custom-fields-value.ts)><a id="customfields-record"></a>

The custom field values for this [Training](https://developers.intellihr.io/docs/v1/)

##### status: [`TrainingsPatchRequestStatus`](./models/trainings-patch-request-status.ts)<a id="status-trainingspatchrequeststatusmodelstrainings-patch-request-statusts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Trainings](./models/trainings.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/trainings/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.users.createUser`<a id="intellihruserscreateuser"></a>

Create a User for a [Person](https://developers.intellihr.io/docs/v1/) that does not already have a User.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUserResponse = await intellihr.users.createUser({
  username: "username_example",
  person: {
    id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
  },
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

The unique name of this user.

##### person: [`UsersCreatePerson`](./models/users-create-person.ts)<a id="person-userscreatepersonmodelsusers-create-personts"></a>

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether this [User](https://developers.intellihr.io/docs/v1/) account is active. When disabled, you can no longer sign in using this account. Defaults to `false`.

##### permissionGroups: [`PeopleCreateRequestUserAccountOneOfPermissionGroups`](./models/people-create-request-user-account-one-of-permission-groups.ts)<a id="permissiongroups-peoplecreaterequestuseraccountoneofpermissiongroupsmodelspeople-create-request-user-account-one-of-permission-groupsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.users.findUserById`<a id="intellihrusersfinduserbyid"></a>

Returns a single [User](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findUserByIdResponse = await intellihr.users.findUserById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.users.getAllUsers`<a id="intellihrusersgetallusers"></a>

Returns a list of all [Users](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUsersResponse = await intellihr.users.getAllUsers();
```

#### 🔄 Return<a id="🔄-return"></a>

[UsersList](./models/users-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.users.updateById`<a id="intellihrusersupdatebyid"></a>

Returns the updated [User](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await intellihr.users.updateById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether this [User](https://developers.intellihr.io/docs/v1/) account is active. When disabled, you can no longer sign in using this account.

##### username: `string`<a id="username-string"></a>

The unique name of this user.

#### 🔄 Return<a id="🔄-return"></a>

[Users](./models/users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhookEvents.findEventById`<a id="intellihrwebhookeventsfindeventbyid"></a>

Returns a single [Webhook Event](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findEventByIdResponse = await intellihr.webhookEvents.findEventById();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhookEvents](./models/webhook-events.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook-events/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhookEvents.listAllEvents`<a id="intellihrwebhookeventslistallevents"></a>

Returns a list of all [Webhook Events](https://developers.intellihr.io/docs/v1/).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllEventsResponse = await intellihr.webhookEvents.listAllEvents();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhookEventsList](./models/webhook-events-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhook-events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhooks.createWebhook`<a id="intellihrwebhookscreatewebhook"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebhookResponse = await intellihr.webhooks.createWebhook({
  url: "url_example",
  webhookEvent: "webhookEvent_example",
  isEnabled: true,
  source: "custom",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

The [Webhook](https://developers.intellihr.io/docs/v1/) endpoint which the request will be sent to when the subscribed [Webhook Event](https://developers.intellihr.io/docs/v1/) is triggered.

##### webhookEvent: `string`<a id="webhookevent-string"></a>

The slug of the [Webhook Event](https://developers.intellihr.io/docs/v1/).

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Webhook](https://developers.intellihr.io/docs/v1/). When disabled, this [Webhook](https://developers.intellihr.io/docs/v1/) will not be sent.

##### source: `string`<a id="source-string"></a>

A customizable string which can be used to identify what system created this [Webhook](https://developers.intellihr.io/docs/v1/). [Webhooks](https://developers.intellihr.io/docs/v1/) created through the intelliHR application will have source: \\\'custom\\\'.

#### 🔄 Return<a id="🔄-return"></a>

[Webhooks](./models/webhooks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhooks.deleteById`<a id="intellihrwebhooksdeletebyid"></a>

Deletes the provided webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await intellihr.webhooks.deleteById();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhooks.findById`<a id="intellihrwebhooksfindbyid"></a>

Returns a single webhook.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.webhooks.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[Webhooks](./models/webhooks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhooks.listAll`<a id="intellihrwebhookslistall"></a>

Returns a list of all webhooks.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.webhooks.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[WebhooksList](./models/webhooks-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.webhooks.updateWebhook`<a id="intellihrwebhooksupdatewebhook"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookResponse = await intellihr.webhooks.updateWebhook({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

The [Webhook](https://developers.intellihr.io/docs/v1/) endpoint which the request will be sent to when the subscribed [Webhook Event](https://developers.intellihr.io/docs/v1/) is triggered.

##### webhookEvent: `string`<a id="webhookevent-string"></a>

The slug of the [Webhook Event](https://developers.intellihr.io/docs/v1/).

##### isEnabled: `boolean`<a id="isenabled-boolean"></a>

Specifies whether users can select this [Webhook](https://developers.intellihr.io/docs/v1/). When disabled, this [Webhook](https://developers.intellihr.io/docs/v1/) will not be sent.

##### source: `string`<a id="source-string"></a>

A customizable string which can be used to identify what system created this [Webhook](https://developers.intellihr.io/docs/v1/). [Webhooks](https://developers.intellihr.io/docs/v1/) created through the intelliHR application will have source: \\\'custom\\\'.

#### 🔄 Return<a id="🔄-return"></a>

[Webhooks](./models/webhooks.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/webhooks/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workClasses.findById`<a id="intellihrworkclassesfindbyid"></a>

Returns a single work class.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.workClasses.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkClasses](./models/work-classes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-classes/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workClasses.listAll`<a id="intellihrworkclasseslistall"></a>

Returns a list of all [Work Classes](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.workClasses.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkClassesList](./models/work-classes-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-classes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workRights.findWorkRightById`<a id="intellihrworkrightsfindworkrightbyid"></a>

Returns a single work right.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findWorkRightByIdResponse =
  await intellihr.workRights.findWorkRightById();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkRights](./models/work-rights.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-rights/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workRights.listAll`<a id="intellihrworkrightslistall"></a>

Returns a list of all [Work Rights](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.workRights.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkRightsList](./models/work-rights-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-rights` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workTypes.findById`<a id="intellihrworktypesfindbyid"></a>

Returns a single work type.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.workTypes.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkTypes](./models/work-types.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-types/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workTypes.listAll`<a id="intellihrworktypeslistall"></a>

Returns a list of all [Work Types](https://developers.intellihr.io/docs/v1/) recorded in the system.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await intellihr.workTypes.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkTypesList](./models/work-types-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/work-types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workflowEvents.findById`<a id="intellihrworkfloweventsfindbyid"></a>

Returns a single [Workflow Event](https://developers.intellihr.io/docs/v1/) by its identifier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findByIdResponse = await intellihr.workflowEvents.findById();
```

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowEvents](./models/workflow-events.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflow-events/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `intellihr.workflows.triggerById`<a id="intellihrworkflowstriggerbyid"></a>

Trigger a Workflow and related Workflow Form Designs. 

This endpoint supports Workflows that are linked to Job onboarding, offboarding, role change and extended leave.

Currently the recipient and email address type for the individual forms will be automatically set based on the Respondent Type on the Form Design.  Form Designs with a Respondent Type of `Supervisor` for a job with no supervisor currently are not supported as no default option can be selected.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerByIdResponse = await intellihr.workflows.triggerById({
  id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
  jobId: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
  workflowFormDesigns: [
    {
      id: "8a5f3ea6-ea6b-4425-8a87-3c256bb7b6f9",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### jobId: `string`<a id="jobid-string"></a>

The identifier string for the [Job](https://developers.intellihr.io/docs/v1/) to trigger this Workflow for.

##### workflowFormDesigns: [`WorkflowsPatchRequestWorkflowFormDesignsInner`](./models/workflows-patch-request-workflow-form-designs-inner.ts)[]<a id="workflowformdesigns-workflowspatchrequestworkflowformdesignsinnermodelsworkflows-patch-request-workflow-form-designs-innerts"></a>

Information about the Workflow Form Designs within this [Workflow](https://developers.intellihr.io/docs/v1/).

##### id: `string`<a id="id-string"></a>

The id of the Workflow to trigger.

#### 🔄 Return<a id="🔄-return"></a>

[WorkflowsPatchResponse](./models/workflows-patch-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workflows/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
