---
section: 'Core REST API'
title: 'Resource Summary'
date: '2020-10-16T05:35:07.322Z'
priority: 9000
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Resources Summary

Overview of resources provided by the Core REST API.

## Doctors and Doctors Appointment Settings

| Authorized Users        | Endpoint              |
| ----------------------- | --------------------- |
| Read a Doctor Profile   | GET `/profile/doctor` |
| Update a Doctor Profile | PUT `/profile/doctor` |

| Public Users                     | Endpoint           |
| -------------------------------- | ------------------ |
| Read Details of a Doctor         | GET `/doctors/:id` |
| List (Search and Filter) Doctors | GET `/doctors`     |

## Patients

| Authorized Users         | Endpoint               |
| ------------------------ | ---------------------- |
| Read a Patient Profile   | GET `/profile/patient` |
| Update a Patient Profile | PUT `/profile/patient` |

## Appointments

| Authorized Users                   | Endpoint                             |
| ---------------------------------- | ------------------------------------ |
| List Appointments of a Doctor      | GET `/profile/doctor/appointments`   |
| Create an Appointment as a Doctor  | POST `/profile/doctor/appointments`  |
| List Appointments of a Patient     | GET `/profile/patient/appointments`  |
| Create an Appointment as a Patient | POST `/profile/patient/appointments` |

| Public Users                 | Endpoint            |
| ---------------------------- | ------------------- |
| List Appointments of Doctors | GET `/appointments` |

## Specializations

| Public Users                  | Endpoint               |
| ----------------------------- | ---------------------- |
| List Official Specializations | GET `/specializations` |
