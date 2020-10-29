---
section: 'Core REST API'
title: 'Specialization Resource'
date: '2020-10-29T05:35:07.322Z'
priority: 8995
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Specialization

A Specialization (medical speciality) is a branch of medical practice. Examples include children (paediatrics), Eyes (Ophthalmology), skin (Dermatology).

The Specialization Resource exposes the official medical specialities managed by the [Ministry of Health (MSPBS)](https://www.mspbs.gov.py/index.php).

## Data Model

Overview of Data Model for a Specialization. The Specialization Resource implements the `Qualification` of the [ FHIR Practitioner Resource](https://www.hl7.org/fhir/practitioner.html).

| Key         | Type   | Required | Public | Readonly | Description                | FHIR Resource                        |
| ----------- | ------ | -------- | ------ | -------- | -------------------------- | ------------------------------------ |
| id          | String | \*       | \*     |          | Medical Specialization ID  | Practitioner -> Qualification (Code) |
| description | String | \*       | \*     | \*       | Name of the Specialization |                                      |

## Endpoints

Profile provides the following endpoints:

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
