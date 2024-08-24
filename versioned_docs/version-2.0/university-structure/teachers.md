---
description: Read more about the teachers controller.
---

# Teachers

The `Teachers` controller provides the following endpoints:

* `/api/v2/Teachers/GetAll`
* `/api/v2/Teachers/Get/{id}`
* `/api/v2/Teachers/GetByName?name={name}`
* `/api/v2/Teachers/Faculties/GetAll`
* `/api/v2/Teachers/Faculties/Get/{id}`
* `/api/v2/Teachers/Faculties/GetByName?name={name}`

## `GetAll`
Gets all teachers. Returns a **list** of `Teacher` objects.

#### Teacher object:
```json
{
    "id": integer,
    "shortName": "string",
    "fullName": "string",
    "department": {
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

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/GetAll](https://nure-time.runasp.net/api/v2/Teachers/GetAll)

## `Get/{id}`
Gets a teacher by its ID. Returns a `Teacher` object.

Parameters:

| Name      | Type    | Description        |
|-----------|---------|--------------------|
| id        | integer | Teacher ID         |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Get/4070](https://nure-time.runasp.net/api/v2/Teachers/Get/4070)

## `GetByName`
Gets a teacher by its name. Returns a **list** of `Teacher` objects whose names contain the specified name.

Parameters:

| Name      | Type   | Description        |
|-----------|--------|--------------------|
| name      | string | Teacher name       |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/GetByName?name=лемешко](https://nure-time.runasp.net/api/v2/Teachers/GetByName?name=лемешко)

## `Faculties/GetAll`
Gets all faculties. Returns a **list** of `TeachersFaculty` objects.

#### TeachersFaculty object:
```json
{
    "id": integer,
    "shortName": "string",
    "fullName": "string",
    "departments": [
        {
            "id": integer,
            "shortName": "string",
            "fullName": "string",
            "teachers": [
                {
                    "id": integer,
                    "shortName": "string",
                    "fullName": "string"
                }
            ]
        }
    ]
}
```

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetAll](https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetAll)

## `Faculties/Get/{id}`
Gets a faculty by its ID. Returns a `TeachersFaculty` object.

Parameters:

| Name      | Type    | Description        |
|-----------|---------|--------------------|
| id        | integer | Faculty ID         |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Faculties/Get/237](https://nure-time.runasp.net/api/v2/Teachers/Faculties/Get/237)

## `Faculties/GetByName`
Gets a faculty by its name. Returns a **list** of `TeachersFaculty` objects whose names contain the specified name.

Parameters:

| Name      | Type   | Description           |
|-----------|--------|-----------------------|
| name      | string | Teacher faculty name. |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetByName?name=інформації](https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetByName?name=інформації)
