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

| Key         | Type     | Required | Public | Description          | FHIR Resource                                  |
| ----------- | -------- | -------- | ------ | -------------------- | ---------------------------------------------- |
| id          | String   |          | \*     | Identifier           |                                                |
| start       | DateTime | \*       | \*     | Start Date           | APPOINTMENT -> start                           |
| end         | Date     | \*       | \*     | End Date             | APPOINTMENT -> end                             |
| patientId   | String   |          |        | Reference to Patient | APPOINTMENT -> Participant -> Patient          |
| doctorId    | String   | \*       | \*     | Reference to Doctor  | APPOINTMENT -> Participant -> PractitionerRole |
| description | String   |          |        | Description          | APPOINTMENT -> Description                     |

**Notes:**

- Public access will only return future events
- Appointment queries can be limited by providing start and end date (optionally month for convenience)
- End Date needs to be after Start Date

## Endpoints

The Appointment Resource has the following endpoints available:

- **GET /appointments**
- **GET /profile/doctor/appointments**
- **POST /profile/doctor/appointments**
- **GET /profile/patient/appointments**
- **POST /profile/patient/appointments**

---

### List Appointments

Search for Appointments for some doctors

```
GET /appointments?doctors=id1,id2,id3,...&start=2020-11-30T13:22:26.597Z&end=2020-12-30T13:22:26.597Z
```

**Access Level:** `Public`

**Parameters (Query String):**

- doctors: Comma seperated list of doctor IDs, required
- start: Present or future ISO8601 Date String in the future, required
- end: ISO8601 Date String, required

**Return Value:** List of Appointments (only public keys)

---

### List Appointments of Doctor

List Appointments of a Doctor

```
GET /profile/doctor/appointments?start=2020-11-30T13:22:26.597Z&end=2020-12-30T13:22:26.597Z&include=patient
```

**Access Level:** `Authorized`

**Parameters (Query String):**

- start: Present or future ISO8601 Date String in the future, required
- end: ISO8601 Date String, required
- include: `doctor` and/or `patient` which will include the full public keys of the patient or doctor

**Return Value:** List of Appointments

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
GET /profile/patient/appointments?start=2020-11-30T13:22:26.597Z&end=2020-12-30T13:22:26.597Z&include=doctor
```

**Access Level:** `Authorized`

**Parameters (Query String):**

- start: Present or future ISO8601 Date String in the future, required
- end: ISO8601 Date String, required
- include: `doctor` and/or `patient` which will include the full public keys of the patient or doctor

**Return Value:** List of Appointments

---

### Create Appointments

Create Appointment as a Patient

```
POST /profile/patient/appointments
```

**Access Level:** `Authorized`

**Parameters (Query String):** Appointment

**Return Value:** Appointment (including id)
