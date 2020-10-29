---
section: 'Core REST API'
title: 'Patient Resource'
date: '2020-10-29T05:35:07.322Z'
priority: 8998
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Patient

A Patient is a natural person. All patients are guaranteed to hold a unique valid national ID (Cedula) of Paraguay which is checked by the [National Police](https://www.policianacional.gov.py/).

Please note: Currently the identiy of a patient is not verified!

## Data Model

Overview of Data Model for a Patient. The Patient Resource implements the [FHIR Patient Resource](https://www.hl7.org/fhir/patient.html).

| Key                | Type   | Required | Description                                                                                   | FHIR ENTITY                                |
| ------------------ | ------ | -------- | --------------------------------------------------------------------------------------------- | ------------------------------------------ |
| id                 | String |          | Identifier                                                                                    |                                            |
| photoUrl           | String |          | Picture                                                                                       | PATIENT -> Photo                           |
| givenName          | String | \*       | First Name                                                                                    | PATIENT -> Name (HumanName -> Family Name) |
| familyName         | String | \*       | Last Name                                                                                     | PATIENT -> Name (HumanName -> Given Name)  |
| job                | String |          | Occupation                                                                                    | PATIENT -> Extension                       |
| birthDate          | String | \*       | Date of Birth <br> _Acceptable Format:_ `YYYY-MM-DD`                                          | PATIENT -> Birthdate                       |
| gender             | String | \*       | Gender <br> _Acceptable Values:_ <br>- `male` <br> - `female` <br> - `other` <br> - `unknown` | PATIENT -> Gender                          |
| email              | String | \*       | Email                                                                                         | PATIENT -> Telecom (ContactPoint)          |
| phone              | String |          | Phone                                                                                         | PATIENT -> Telecom (ContactPoint)          |
| street             | String |          | Street Address and Number                                                                     | PATIENT -> Address -> line0                |
| city               | String |          | City                                                                                          | PATIENT -> Address -> city                 |
| neighborhood       | String |          | Locality (Neighbourhood)                                                                      | PATIENT -> Address -> line1                |
| addressDescription | String |          | Address Reference (Description)                                                               | PATIENT -> Address -> text                 |

## Endpoints

The Patient Resource provides the following endpoints:

- **GET /profile/patient**
- **PUT /profile/patient**

---

### Get Patient

Read the currently authenticated Patient

```
GET /profile/patient
```

**Access Level:** `Authorized`

**Parameters:** none

**Return Value:** Patient

---

### Update Patient

Update the currently authenticated Patient

```
PUT /profile/patient
```

**Access Level:** `Authorized`

**Parameters:** Patient

**Return Value:** Patient (updated)
