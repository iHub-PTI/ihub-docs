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

Overview of Data Model for a Medication. The Medication Resource is implementing the [FHIR Medication Resource](https://www.hl7.org/fhir/medication.html).

| Key          | Type     | Required | Description                                       |
| ------------ | -------- | -------- | ------------------------------------------------- |
| id           | String   | \*       | Medication ID                                     |
| code         | String   | \*       | CODE of medication                                |
| form         | String   | \*       | Form of medication (e.g. Tabletas)                |
| ingredients  | String[] | \*       | Active ingredient of medication                   |
| manufacturer | String   | \*       | Name of manufacturer                              |
| name         | String   | \*       | Name of medication                                |
| presentation | String   | \*       | Description of package and content                |
| status       | String   | \*       | Status of the medication ('Active' or 'Inactive') |

```
TODO
Figure out if that's the right resource and make sure we have described the fields for:
- Presentation (e.g. box containing 10 pills)
```

## Endpoints

Medication provides the following endpoints:

- **GET /medications**
- **GET /medications/:id**

---

### Get Medications

List all Medications

```
GET /medications
```

**Access Level:** `Public`

**Parameters (Query String):**

- content:

  ```
  Consider the following query string:
  ?content=ibuprofeno suspension 100

  This will search for a medication that:
  matches ibuprofeno AND
  suspension AND
  100
  ```

- count: Number - Number of items to return - `defaults to 20`
- offset: Number - Number of items that are skipped - `defaults to 0`

**Return Value:**

```
{
  total: Number // total amount of matched medications
  items: List of Medications
}

```

---

### Get Medication

Read a single Medication

```
GET /medications/:id
```

**Access Level:** `Public`

**Parameters:** none

**Return Value:** Medication
