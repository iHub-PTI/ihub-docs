---
section: 'Core REST API'
title: 'Appointment Resource'
date: '2020-10-29T05:35:07.322Z'
priority: 8997
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Appointment

A Patient is a single, planned meeting in the future or the past. Examples include a scheduled surgery or a follow-up for a clinical visit.

## Data Model

Overview of Data Model for an Appointment. The Appointment Resource implements the [FHIR Appointment Resource](https://www.hl7.org/fhir/appointment.html).

| Key | Type   | Required | Public | Description           | FHIR ENTITY                                    |
| --- | ------ | -------- | ------ | --------------------- | ---------------------------------------------- |
| id  | String |          | \*     | Identifier            |                                                |
|     | Number | \*       |        | Type of Appointment   | APPOINTMENT -> appointmentType                 |
|     | Number | \*       | \*     | Length of appointment | APPOINTMENT -> minutesDuration                 |
|     | Date   | \*       | \*     | Start Date            | APPOINTMENT -> start                           |
|     | Date   | \*       | \*     | End Date              | APPOINTMENT -> end                             |
|     | Key    |          |        | Reference to Patient  | APPOINTMENT -> Participant -> Patient          |
|     | Key    | \*       | \*     | Reference to Doctor   | APPOINTMENT -> Participant -> PractitionerRole |
|     | String |          |        | Description           | APPOINTMENT -> appointmentType                 |

**Notes:**

- Public access will only return future events
- Appointment queries can be limited by providing start and end date (optionally month for convenience)

## Endpoints

The Appointment Resource has the following endpoints available:

- **GET /apointments**
- **GET /profile/doctor/appointments**
- **POST /profile/doctor/appointments**
- **GET /profile/patient/appointments**
- **POST /profile/patient/appointments**

---

### List Appointments

Search for Appointments for some doctors

```
GET /apointments?doctors=id1,id2,id3,...
```

**Access Level:** `Public`

**Parameters (Query String):**

- doctors: Comma seperated list of doctor IDs

**Return Value:** List of Appointments (only public keys)

---

### List Appointments of Doctor

List Appointments of a Doctor

```
GET /profile/doctor/appointments
```

**Access Level:** `Authorized`

**Parameters (Query String):** None

**Return Value:** List of Appointments

**Notes:** Ordered by date (newest first)

---

### Create Appointments

Create Appointment as a Doctor

```
POST /profile/doctor/appointments
```

**Access Level:** `Authorized`

**Parameters (Query String):** Appointment

**Return Value:** Appointment (including id)

---

### List Appointments of Patient

List Appointments of a Patient

```
GET /profile/patient/appointments
```

**Access Level:** `Authorized`

**Parameters (Query String):** None

**Return Value:** List of Appointments

**Notes:** Ordered by date (newest first)

---

### Create Appointments

Create Appointment as a Patient

```
POST /profile/patient/appointments
```

**Access Level:** `Authorized`

**Parameters (Query String):** Appointment

**Return Value:** Appointment (including id)
