---
section: 'Core REST API'
title: 'Encounter Resource'
date: '2021-04-22T05:35:07.322Z'
priority: 8990
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Encounter

## Data Model

Overview of Data Model for an Encounter. The Encounter Resource implements the [ FHIR Encounter Resource](http://hl7.org/fhir/encounter.html).

| Key                        | Type   | Required | Description                                                                                                     | FHIR Resource |
| -------------------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------- | ------------- |
| id                         | String | \*       | Prescription ID                                                                                                 |               |
| diagnosis                  | String |          | Diagnosis of the Patient                                                                                        |               |
| instructions               | String |          | Instructions for the Patient                                                                                    |               |
| prescriptions              | List   |          | List of prescriptions                                                                                           |               |
| prescriptions.dosage       | String | \*       | How much to take of the medication                                                                              |               |
| prescriptions.instructions | String | \*       | How often to take the medication in hours, How long to take the medication, Unit of duration (e.g. days, weeks) |               |
| prescriptions.medicationId | String | \*       | Reference to Medication                                                                                         |               |
| prescriptions.note         | String |          | Notes regarding how to take the medcation                                                                       |               |

## Endpoints

Prescription provides the following endpoints:

- **PUT /profile/doctor/appointments/:id/encounter**
- **GET /profile/doctor/appointments/:id/encounter**

---

### PUT Encounter

List all Encounters

```
PUT /profile/doctor/appointments/:id/encounter
```

**Access Level:** `Authorized`

**Parameters:** Encounter

**Return Value:** Encounter (updated)

---

### Get Encounter

List all Encounters

```
GET /profile/doctor/appointments/:id/encounter
```

**Access Level:** `Authorized`

**Parameters:** none

**Return Value:** Details of an Encounter
