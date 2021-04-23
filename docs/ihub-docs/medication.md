---
section: 'Core REST API'
title: 'Prescription Resource'
date: '2021-04-22T05:35:07.322Z'
priority: 8990
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Prescription

## Data Model

Overview of Data Model for a Prescription. The Prescription Resource implements the [ FHIR MedicationReqest Resource](http://hl7.org/fhir/medicationrequest.html).

| Key                      | Type   | Required | Description                               | FHIR Resource |
| ------------------------ | ------ | -------- | ----------------------------------------- | ------------- |
| id                       | String | \*       | Prescription ID                           |               |
| medications              | List   | \*       | List of drugs                             |               |
| medications.medicationId | String | \*       | Reference to Medication ID                |               |
| medications.dose         | String | \*       | How much to take of the medication        |               |
| medications.rate         | String | \*       | How often to take the medication in hours |               |
| medications.duration     | String | \*       | How long to take the medication           |               |
| medications.durationUnit | String | \*       | Unit of duration (e.g. days, weeks)       |               |

```
TODO:
Find the right location for
- Diagnosis
- Indications (Instructions)

Which seem to be more related to an appointment

What duration units would be there?
Is rate always in hours?
Is Diagnosis and Indications related to Prescription or rather to Appointment or even to something completely different?
```

## Endpoints

Prescription provides the following endpoints:

- **GET /specializations**

---

### Get Specializations

List all Specializations

```
GET /specializations
```

**Access Level:** `Public`

**Parameters:** none

**Return Value:** List of Specializations
