---
section: 'Core REST API'
title: 'Doctor Resource'
date: '2020-10-29T05:35:07.322Z'
priority: 8999
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Doctor

A Doctor is a natural person who is licensed to practice medicine. All Doctors in this Resource have a validated identity and and have a currently valid medical license in Paraguay provided by the [Ministry of Health (MSPBS)](https://www.mspbs.gov.py/index.php).

## Data Model

Overview of Data Model for a Doctor. The Doctor Resource implements the [FHIR Practitioner Resource](https://www.hl7.org/fhir/practitioner.html).

| Key                | Type                                                               | Required | Public | Readonly | Description                                                                                                                 | FHIR Resource                                   |
| ------------------ | ------------------------------------------------------------------ | -------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| id                 | String                                                             |          | \*     | \*       | Identifier                                                                                                                  |                                                 |
| photoUrl           | String                                                             |          | \*     |          | Picture                                                                                                                     | Practitioner -> Photo                           |
| givenName          | String                                                             | \*       | \*     |          | First Name                                                                                                                  | Practitioner -> Name (HumanName -> Family Name) |
| familyName         | String                                                             | \*       | \*     |          | Last Name                                                                                                                   | Practitioner -> Name (HumanName -> Given Name)  |
| languages          | **GET:** {id: String, description: String} <br> **PUT:** String [] | \*       | \*     |          | Languages <br> _Acceptable Format:_ ISO 639-1 <br> [Download JSON file with spanish language names](/data/ISO639-1-es.json) | Practitioner -> Communication (CommonLanguage)  |
| biography          | String                                                             |          | \*     |          | Biography                                                                                                                   | Practitioner -> Extension                       |
| birthDate          | String                                                             | \*       |        |          | Date of Birth <br> _Acceptable Format:_ `YYYY-MM-DD`                                                                        | Practitioner -> Bithdate                        |
| gender             | String                                                             | \*       | \*     |          | Gender <br> _Acceptable Values:_ <br>- `male` <br> - `female` <br> - `other` <br> - `unknown`                               | Practitioner -> Gender                          |
| email              | String                                                             | \*       |        |          | Email                                                                                                                       | Practitioner -> Telecom (ContactPoint)          |
| phone              | String                                                             |          |        |          | Phone                                                                                                                       | Practitioner -> Telecom (ContactPoint)          |
| street             | String                                                             |          | \*     |          | Street Address and Number                                                                                                   | Practitioner -> Address -> line0                |
| city               | String                                                             |          | \*     |          | City                                                                                                                        | Practitioner -> Address -> city                 |
| neighborhood       | String                                                             |          | \*     |          | Locality (Neighbourhood)                                                                                                    | Practitioner -> Address -> line1                |
| addressDescription | String                                                             |          | \*     |          | Address Reference (Description)                                                                                             | Practitioner -> Address -> text                 |
| specializations    | **GET:** {id: String, description: String} <br> **PUT:** String [] | \*       | \*     |          | Medical Specializations <br> _Acceptable Values:_ IDs obtained by Specialization Endpoint                                   | Practitioner -> Qualification (Code)            |
| license            | String                                                             | \*       | \*     | \*       | Medical License ID (Registro Profesional)                                                                                   | Practitioner -> Qualification Identifier        |

## Endpoints

The Doctor Resource provides the following endpoints:

- **GET /doctors**
- **GET /doctors/:id**
- **Get /profile/doctor**
- **PUT /profile/doctor**

---

### List Doctors

Search for Doctors and List Results.

```
GET /doctors
```

**Access Level:** `Public`

**Parameters (Query String):**

- content:

  ```
  Consider the following query string:
  ?content=Guarani,Spanish&content=ALERGIA E INMUNOLOGIA CLINICA&content=Maria

  This will search for a doctor that:
  speaks either Guarani OR Spanish AND
  has a speciality "ALERGIA E INMUNOLOGIA CLINICA" AND
  is called "Maria"
  ```

- count: Number - Number of items to return - `defaults to 20`
- offset: Number - Number of items that are skipped - `defaults to 0`

**Return Value:**

```
{
  total: Number // total amount of matched doctors
  items: List of Doctors (only public keys)
}

```

---

### Get Doctor

Read a Doctor's public details

```
GET /doctors/:id
```

**Access Level:** `Public`

**Parameters:** none

**Return Value:** Doctor (only public keys)

---

### Get Doctor

Read the currently authenticated Doctor

```
GET /profile/doctor
```

**Access Level:** `Authorized`

**Parameters:** none

**Return Value:** Doctor

---

### Update Doctor

Update the currently authenticated Doctor

```
PUT /profile/doctor
```

**Access Level:** `Authorized`

**Parameters:** Doctor

**Return Value:** Doctor (updated)
