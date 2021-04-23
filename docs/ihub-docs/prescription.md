---
section: 'Core REST API'
title: 'Medication Resource'
date: '2021-04-22T05:35:07.322Z'
priority: 8985
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Medication

## Data Model

Overview of Data Model for a Medication. The Medication Resource will probably implement the [ FHIR MedicinalProductPharmaceutical Resource](http://hl7.org/fhir/medicinalproductpharmaceutical.html).

| Key        | Type   | Required | Description                     | FHIR Resource |
| ---------- | ------ | -------- | ------------------------------- | ------------- |
| id         | String | \*       | Medication ID                   |               |
| name       | String | \*       | Name of medication              |               |
| ingredient | String | \*       | Active ingredient of medication |               |

```
TODO
Figure out if that's the right resource and make sure we have described the fields for:
- commercial name
- active ingredient
- Presentation (e.g. box containing 10 pills)
- Form (e.g. oral suspension)
```

## Endpoints

Medication provides the following endpoints:

None, yet.
