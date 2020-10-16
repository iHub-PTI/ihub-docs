---
title: 'API Docs'
date: '2020-10-16T05:35:07.322Z'
priority: 90
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# API Endpoints

The iHub Health API allows you to access all queries related to manipulating the FHIR Resources doctors, patients, appointments

## Working with the PTI Health API

### Request Payloads

**For POST Requests:** Add paramters as JSON in the request body and set a `'Content-Type: application/json'` header.

**For GET Requests:** Add parameters as Query String parameters.

### Errors

For simplicity, expect the following error codes:

- 200 (OK)
- 400 (Client Error). There should be a `{messsage: string}` that includes a description of what went wrong.
- 500 (Server Error). Something went wrong. It was probably you - but maybe it was us. 🤓 If you can't figure it out, open an issue!

### Authentication

HTTP request to the REST API are protected with jwt based authentication handeled by KeyCloak.

Expect the following error codes when facing authentication troubles:

- 401 (Not Authenticated). The access_token is not present, expired or valid.

## Doctors - Available Endpoints

### [GET] /profile/doctors/:id

_[Authorized User]_

Read a Doctor and Doctors Appointment Settings Details

**Parameters:** none

**Return Value:** Doctor Profile and Appointment Settings

---

### [POST] /profile/doctors

_[Authorized User]_

Create a new doctor

**Parameters:** Doctor

**Return Value:** Doctor (new, including new ID)

---

### [POST] /profile/doctors/:id

_[Authorized User]_

Update an existing doctor

**Parameters:** Doctor (any partial)

**Return Value:** Doctor (updated)

---

### [GET] /doctors/:id

_[Public]_

Read a Doctor's public details

**Parameters:** none

**Return Value:** Doctor (Public Information)

---

### [GET] /doctors

_[Public]_

Searcj for Doctors and List Results

**Parameters (Query String):**

- text: String
- languages: String[]
- specialities: String[]

**Return Value:** List of Doctors with next availabilities (date)

---

### [GET] /doctors/:id/appointments

_[Public]_

Read a Doctor's availabilities

**Parameters (Query String):**

- date: String

**Return Value:**

```
{
    availabilities: {
        start: number,
        length: number
    }[]
}
```

---

### [POST] /doctors/:id/appointments

_[Public]_

Create an Appointment as a patient

**Parameters:** Appointment

**Return Value:** Appointments (including new ID)

> Doctor can not have multiple bookings at the same time, double bookings should be rejected.

> Start time and length has to be a valid timeslot.

> type will be stored as "Teleconsultation"

---

### [POST] /profile/doctors/:id/appointments

_[Authorized User]_

Create an Appointment as a doctor

**Parameters:** Appointment

**Return Value:** Appointments (including new ID)

> No restrictions for time and length of appointment.

> type will be stored as "DoctorEvent"

## Patients - Available Endpoints

### [GET] /profile/patients/:id

_[Authorized User]_

Read a Patient Profile

**Parameters:** none

**Return Value:** Patient

---

### [POST] /profile/patients

_[Authorized User]_

Create a Patient Profile

**Parameters:** Patient

**Return Value:** Appointments (new, including new ID)

---

### [POST] /profile/patients/:id

_[Authorized User]_

Update a Patient Profile

**Parameters:** Patient (any partial)

**Return Value:** Appointments (updated)
