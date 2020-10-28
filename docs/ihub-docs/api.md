---
section: 'Core'
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
- 400 (Client Error). There should be a `{messsages: string[]}` that includes a description of what went wrong.
- 500 (Server Error). Something went wrong. It was probably you - but maybe it was us. 🤓 If you can't figure it out, open an issue!

### Authentication

HTTP request to the REST API are protected with jwt based authentication handeled by KeyCloak.

Expect the following error codes when facing authentication troubles:

- 401 (Not Authenticated). The access_token is not present, expired or valid.

# Currently authenticated User

## Doctors

### [GET] /profile/doctor/

_[Authorized User]_

Read a Doctor and Doctors

**Parameters:** none

**Return Value:** Doctor Profile

---

### [PUT] /profile/doctor/

_[Authorized User]_

Update an existing doctor

**Parameters:** Doctor (any partial)

**Return Value:** Doctor (updated)

## Patients

### [GET] /profile/patient/

_[Authorized User]_

Read a Patient Profile

**Parameters:** none

**Return Value:** Patient

### [PUT] /profile/patient/

_[Authorized User]_

Update a Patient Profile

**Parameters:** Patient (any partial)

**Return Value:** Appointments (updated)

# Doctors - Available Endpoints

### [GET] /doctors/:id

_[Public]_

Read a Doctor's public details

**Parameters:** none

**Return Value:** Doctor (Public Information)

---

### [GET] /doctors

_[Public]_

Search for Doctors and List Results

**Parameters (Query String):**

- text: String
- languages: String[]
- specialties: String[]

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

### [GET] /specialities

_[Public]_

Get the list of Specialities provided by Minister

**Return Value:** List of Specialities (id and description)

```
[
    {
        id: number,
        description: String
    }
]
```

### [GET] /validation

_[Public]_

Generate code to validate user using the username from token (For now the code last 30 seconds)

**Parameters:** none

**Return Value:** code (Integer of 6 digits)

### [GET] /validation/:code

_[Public]_

Validate the code using the username from token

**Parameters:** none

**Return Value:** true o false, depending if the code match with the one generate for the user and if it is still valid
