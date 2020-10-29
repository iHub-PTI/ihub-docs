---
section: 'Core REST API'
title: 'Profile Scope'
date: '2020-10-29T05:35:07.322Z'
priority: 9999
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# Profile Scope

Some endpoints are prefixed with `/profile`. These endpoints give special access to resources to which the currently authenticated user has special permissions.

This is useful to e.g. update the profile of a doctor or read private details of appointments.

You will find the documentation of this endpoint in the respecive resource.

**Example:**

- `/profile/doctor` will be documented in the Doctor Resource.
- `/profile/doctor/appointment` will be documented in the Appointment Resource.
