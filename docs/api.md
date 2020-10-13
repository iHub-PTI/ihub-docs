# PTI Health Entities and API Specs

## Data Model

Overview of Data Models for PTI Health Ecosystem

### Entities

A data entity is an object in a data model.

#### Doctors

| Key           | Description                              | Type   | Required | FHIR ENTITY       | FHIR FIELD                      |
| ------------- | ---------------------------------------- | ------ | -------- | ----------------- | ------------------------------- |
| photo         | Picture                                  | String |          | PERSON            | Photo                           |
| givenName     | First Name                               | String | \*       | PERSON            | Name (HumanName -> Family Name) |
| familyName    | Last Name                                | String | \*       | PERSON            | Name (HumanName -> Given Name)  |
| language      | Languages                                | String | \*       | PERSON            | Communication (CommonLanguage)  |
| biography     | Biography                                | String |          | PERSON            |                                 |
| bithdate      | Date of Birth                            | String | \*       | PERSON            | Bithdate                        |
| gender        | Gender                                   | String | \*       | PERSON            | Gender                          |
| email         | Email                                    | String | \*       | PERSON            | Telecom (ContactPoint)          |
| phone         | Phone                                    | String | \*       | PERSON            | Telecom (ContactPoint)          |
| street        | Street Address                           | String | \*       | PERSON            | Address -> line                 |
| city          | City                                     | String | \*       | PERSON            | Address -> city                 |
| neighborhood  | Locality (Neighbourhood)                 | String | \*       | PERSON            | Address -> district             |
| reference     | Address Reference (Description)          | String |          | PERSON            | Address -> text                 |
| specialty     | Medical Speciality                       | String | \*       | PRACTITIONER ROLE | Specialty (Code + Description)  |
| licenseId     | Medical License ID (Registro Profesional)| String | \*       | PRACTITIONER ROLE | Identifier                      |

**Notes:**

- Languages is a list of languages and would probably be in an extra table

#### Doctors Appointment Settings

| Key | Description                        | Type   | Required |
| --- | ---------------------------------- | ------ | -------- |
|     | Default Duration of an appointment | Number | \*       |
|     | Reference to Doctor                | Key    | \*       |

#### Patients

| Key             | Description                     | Type   | Required | FHIR ENTITY | FHIR FIELD                      |
| --------------- | ------------------------------- | ------ | -------- | ----------- | ------------------------------- |
|                 | Picture                         | String |          | PERSON      | Photo                           |
| givenName       | First Name                      | String | \*       | PERSON      | Name (HumanName -> Family Name) |
| familyName      | Last Name                       | String | \*       | PERSON      | Name (HumanName -> Given Name)  |
|                 | Date of Birth                   | String | \*       | PERSON      | Bithdate                        |
|                 | Occupation                      | String |          |             |                                 |
| gender          | Gender                          | String | \*       | PERSON      | Gender                          |
| email           | Email                           | String | \*       | PERSON      | Telecom (ContactPoint)          |
| phone           | Phone                           | String | \*       | PERSON      | Telecom (ContactPoint)          |
| street          | Street Address                  | String | \*       | PERSON      | Address -> line                 |
| city            | City                            | String | \*       | PERSON      | Address -> city                 |
| neighborhood    | Locality (Neighbourhood)        | String | \*       | PERSON      | Address -> district             |
| reference       | Address Reference (Description) | String |          | PERSON      | Address -> text                 |

#### Appointments (Events)

| Key | Public Readable | Description           | Type   | Required | FHIR ENTITY | FHIR FIELD                      |
| --- | --------------- | --------------------- | ------ | -------- | ----------- | ------------------------------- |
|     |                 | Type of Appointment   | Number | \*       | APPOINTMENT | appointmentType                 |
|     | \*              | Length of appointment | Number | \*       | APPOINTMENT | minutesDuration                 |
|     | \*              | Start Date            | Date   | \*       | APPOINTMENT | start                           |
|     | \*              | End Date              | Date   | \*       | APPOINTMENT | end                             |
|     |                 | Reference to Patient  | Key    |          | APPOINTMENT | Participant -> Patient          |
|     |                 | Reference to Doctor   | Key    | \*       | APPOINTMENT | Participant -> PractitionerRole |
|     |                 | Description           | String |          | APPOINTMENT | appointmentType                 |

**Notes:**

- Type of Appointment is enum: "Teleconsultation" | "DoctorEvent"

### Types

Types are models that are normally embedded into entities.

#### Opening Hours

| Key | Description                              | Type   | Required | FHIR ENTITY       | FHIR FIELD                          |
| --- | ---------------------------------------- | ------ | -------- | ----------------- | ----------------------------------- |
|     | Day of the Week                          | Number | \*       | PRACTITIONER ROLE | AvailableTime -> daysOfWeek         |
|     | Start Time                               | Number | \*       | PRACTITIONER ROLE | AvailableTime -> availableStartTime |
|     | End Time                                 | Number | \*       | PRACTITIONER ROLE | AvailableTime -> availableEndTime   |
|     | Reference to Doctor                      | Key    | \*       |                   |                                     |
|     | Reference to Doctor Appointment Settings | Key    | \*       |                   |                                     |

**Notes:**

- Start and End Time could be seconds from midnight

## Actions

Overview of typical actions, performed by the PTI Health Ecosystem.

### Doctors and Doctors Appointment Settings

**Authorized User**

- Read a Doctor Profile and Doctors Appointment Settings
- Create a Doctor Profile and Doctors Appointment Settings
- Update a Doctor Profile and Doctors Appointment Settings

**Public**

- Read Details of a doctor
- Search
  - Parameters for search: name, speciality, location
  - Parameters for filter: language, speciality
  - Read a list of all doctors (pagination)

> Search Return Data has to include a field about next availability of doctor (as Date)

### Patients

**Authorized User**

- Read a Patient Profile
- Create a Patient Profile
- Update a Patient Profile

### Appointments

**Authorized User**

- Create an Appointment

**Public**

- List availabilities (negative appointments, calcualted using Doctors Appointment Settings and Appointments)

## REST API Endpoints

The PTI Health API allows you to access all queries related to manipulating the FHIR Resources doctors, patients, appointments

### Working with the PTI Health API

#### Request Payloads

**For POST Requests:** Add paramters as JSON in the request body and set a `'Content-Type: application/json'` header.

**For GET Requests:** Add parameters as Query String parameters.

#### Errors

For simplicity, expect the following error codes:

- 200 (OK)
- 400 (Client Error). There should be a `{messsage: string}` that includes a description of what went wrong.
- 500 (Server Error). Something went wrong. It was probably you - but maybe it was us. 🤓 If you can't figure it out, open an issue!

#### Authentication

HTTP request to the REST API are protected with jwt based authentication handeled by KeyCloak.

Expect the following error codes when facing authentication troubles:

- 401 (Not Authenticated). The access_token is not present, expired or valid.

### Doctors - Available Endpoints

#### [GET] /profile/doctors/:id

_[Authorized User]_

Read a Doctor and Doctors Appointment Settings Details

**Parameters:** none

**Return Value:** Doctor Profile and Appointment Settings

---

#### [POST] /profile/doctors

_[Authorized User]_

Create a new doctor

**Parameters:** Doctor

**Return Value:** Doctor (new, including new ID)

---

#### [POST] /profile/doctors/:id

_[Authorized User]_

Update an existing doctor

**Parameters:** Doctor (any partial)

**Return Value:** Doctor (updated)

---

#### [GET] /doctors/:id

_[Public]_

Read a Doctor's public details

**Parameters:** none

**Return Value:** Doctor (Public Information)

---

#### [GET] /doctors

_[Public]_

Searcj for Doctors and List Results

**Parameters (Query String):**

- text: String
- languages: String[]
- specialities: String[]

**Return Value:** List of Doctors with next availabilities (date)

---

#### [GET] /doctors/:id/appointments

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

#### [POST] /doctors/:id/appointments

_[Public]_

Create an Appointment as a patient

**Parameters:** Appointment

**Return Value:** Appointments (including new ID)

> Doctor can not have multiple bookings at the same time, double bookings should be rejected.

> Start time and length has to be a valid timeslot.

> type will be stored as "Teleconsultation"

---

#### [POST] /profile/doctors/:id/appointments

_[Authorized User]_

Create an Appointment as a doctor

**Parameters:** Appointment

**Return Value:** Appointments (including new ID)

> No restrictions for time and length of appointment.

> type will be stored as "DoctorEvent"

### Patients - Available Endpoints

#### [GET] /profile/patients/:id

_[Authorized User]_

Read a Patient Profile

**Parameters:** none

**Return Value:** Patient

---

#### [POST] /profile/patients

_[Authorized User]_

Create a Patient Profile

**Parameters:** Patient

**Return Value:** Appointments (new, including new ID)

---

#### [POST] /profile/patients/:id

_[Authorized User]_

Update a Patient Profile

**Parameters:** Patient (any partial)

**Return Value:** Appointments (updated)
