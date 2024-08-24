---
description: Read more about the groups controller.
---


# Groups

The `Groups` controller provides the following endpoints:

* `/api/v2/Groups/GetAll`
* `/api/v2/Groups/Get/{id}`
* `/api/v2/Groups/GetByName?name={name}`
* `/api/v2/Groups/Faculties/GetAll`
* `/api/v2/Groups/Faculties/Get/{id}`
* `/api/v2/Groups/Faculties/GetByName?name={name}`

## `GetAll`
Gets all groups. Returns a **list** of `Group` objects.

#### Group object:
```json
{
    "id": integer,
    "name": "string",
    "direction": {
        "id": integer,
        "shortName": "string",
        "fullName": "string"
    },
    "faculty": {
        "id": integer,
        "shortName": "string",
        "fullName": "string"
    }
}
```

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/GetAll](https://nure-time.runasp.net/api/v2/Groups/GetAll)


## `Get/{id}`
Gets a group by its ID. Returns a `Group` object.

Parameters:

| Name      | Type    | Description   |
|-----------|---------|---------------|
| id        | integer | Group ID      |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Get/10307432](https://nure-time.runasp.net/api/v2/Groups/Get/10307432)

## `GetByName`
Gets the group by its name. Returns a **list** of `Group` objects whose names contain the specified name.

Parameters:

| Name      | Type   | Description      |
|-----------|--------|------------------|
| name      | string | Group name.      |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/GetByName?name=іст-2](https://nure-time.runasp.net/api/v2/Groups/GetByName?name=іст-2)

## `Faculties/GetAll`
Gets all faculties. Returns a **list** of `GroupsFaculty` objects.

#### GroupsFaculty object:
```json
{
    "id": integer,
    "shortName": "string",
    "fullName": "string",
    "directions": [
        {
        "id": integer,
        "shortName": "string",
        "fullName": "string",
        "groups": [
            {
                "id": integer,
                "name": "string"
            }
        ]
        }
    ]
}
```

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Faculties/GetAll](https://nure-time.runasp.net/api/v2/Groups/Faculties/GetAll)

## `Faculties/Get/{id}`
Gets the faculty by its ID. Returns a `GroupsFaculty` object.

Parameters:

| Name      | Type    | Description        |
|-----------|---------|--------------------|
| id        | integer | Group faculty ID   |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Faculties/Get/192](https://nure-time.runasp.net/api/v2/Groups/Faculties/Get/192)

## `Faculties/GetByName`
Gets the faculty by its name. Returns a **list** of `GroupsFaculty` objects whose names contain the specified name.

Parameters:

| Name      | Type   | Description           |
|-----------|--------|-----------------------|
| name      | string | Group faculty name.   |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Faculties/GetByName?name=ІК](https://nure-time.runasp.net/api/v2/Groups/Faculties/GetByName?name=ІК)
