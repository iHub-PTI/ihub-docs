---
section: 'Core REST API'
title: 'Overview'
date: '2020-10-29T05:35:07.322Z'
priority: 10000
ogImage:
  url: '/img/posts/ihub-cover.png'
---

# API Endpoints

The Core REST API provides you convenient, easy and secure access to resources such as doctors, patients, appointments.

Under the hood, this API is a wraper around Fast Healthcare Interoperability Resources (FHIR) a often-used standard that describes the architecture of electronic health records.

## Working with the Core REST API

This article shows you how to invoke the API methods using HTTP requests.

To use the Core REST API, it is important that you understand the basics of [RESTful web services](http://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_web_services) and [JSON representations](http://en.wikipedia.org/wiki/JSON).

### Request Payloads

**For GET Requests:**  
Add parameters as Query String parameters.

**For POST Requests:**  
Add paramters as JSON in the request body and set a header:  
`Content-Type: application/json`

### Authentication

HTTP request to the REST API are protected with [JWT](http://jwt.io/) based authentication. We provide a standard [OAuth 2.0/OpenID Connect (OIDC)](https://openid.net/connect/) interface.

The OIDC Discovery endpoint is:

```
GET https://sso-test.pti.org.py/auth/realms/iHub/.well-known/openid-configuration
```

To pass authenticated requests to the API, obtain a Access Token for your current user and pass it in the header whe making requests:  
`Authorization: Bearer <ACCESS_TOKEN>`

More details how to obtain access token are available here.

### Errors

For simplicity, expect the following error codes:

- 200 (OK)
- 400 (Client Error). There should be a `{messsages: string[]}` that includes a description of what went wrong.
- 401 (Not Authenticated). The access_token is not present, expired or valid.
- 500 (Server Error). General error without description of what went wrong.

### Levels of access

We generally devide between three levels of access:

1. **Authorized**:  
   User with specific permission can access resource.  
   _[access token AND permission required]_
2. **Authenticated**:  
   ALL logged in users can access resource.  
   _[access token required]_
3. **Public**:  
   All users can access resource.  
   _[access token NOT required]_
