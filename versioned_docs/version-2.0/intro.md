---
sidebar_position: 1
---

# Introduction

Here you will find the documentation of the API endpoints. Below you can find the list of all the endpoints and their descriptions.

Also, you can play around with the API using [Swagger UI](https://nure-time.runasp.net/swagger/index.html).

Check out the [.NET library](https://github.com/music-soul1-1/NureTimetableAPI.DotNetLib).

## Getting Started

First things first, the domain of the API is: https://nure-time.runasp.net

:::warning[Note]

API currently has two versions: 1 and 2. Version 1 is no longer supported and will be removed soon.

:::

**Version 2** of the API has the following endpoints:

### Auditories controller

* `/api/v2/Auditories/GetAll`
* `/api/v2/Auditories/Get/{id}`
* `/api/v2/Auditories/GetByName`
* `/api/v2/Auditories/Buildings/GetAll`
* `/api/v2/Auditories/Buildings/Get/{id}`
* `/api/v2/Auditories/Buildings/GetByName`

### Groups controller

* `/api/v2/Groups/GetAll`
* `/api/v2/Groups/Get/{id}`
* `/api/v2/Groups/GetByName`
* `/api/v2/Groups/Faculties/GetAll`
* `/api/v2/Groups/Faculties/Get/{id}`
* `/api/v2/Groups/Faculties/GetByName`

### Teachers controller

* `/api/v2/Teachers/GetAll`
* `/api/v2/Teachers/Get/{id}`
* `/api/v2/Teachers/GetByName`
* `/api/v2/Teachers/Faculties/GetAll`
* `/api/v2/Teachers/Faculties/Get/{id}`
* `/api/v2/Teachers/Faculties/GetByName`

### Entities controller

* `/api/v2/Entities/GetAll`


### Lessons controller

* `/api/v2/Lessons/GetById`
* `/api/v2/Lessons/GetByName`

:::info[Note]

* Endpoints of Version 2 use `PascalCase`. When making a request to the API, you don't have to use it too. 
(e.g. `/api/v2/Groups/GetAll` -> `/api/v2/groups/getall`).

* Also, the endpoints in this list are presented here without parameters. 
You can find the full list of parameters in the corresponding endpoint description. 
Click `Next` below to read more 👇.

:::

This list will be expanded as the project develops.
