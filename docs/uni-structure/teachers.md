# Teachers, v1

The `Teachers` controller provides the following endpoints:
* `/api/v1/Teachers/All`
* `/api/v1/Teachers/{id}`
* `/api/v1/Faculties`

## `/Teachers/All`
Gets all teachers. Returns a list of `Teacher` objects.

Teacher object:
```json
{
    "id": integer,
    "shortName": string,
    "fullName": string,
    "department": {
        "id": integer,
        "shortName": string,
        "fullName": string
    },
    "faculty": {
        "id": integer,
        "shortName": string,
        "fullName": string
    }
}
```

Call example:

- **GET** [https://nure-time.runasp.net/api/v1/Teachers/All](https://nure-time.runasp.net/api/v1/Teachers/All)

## `/Teachers/{id}`
Gets a teacher by its ID. Returns a `Teacher` object.

Call example:

- **GET** [https://nure-time.runasp.net/api/v1/Teachers/4070](https://nure-time.runasp.net/api/v1/Teachers/4070)

## `/Faculties`
Gets all faculties. Returns a list of `TeachersFaculty` objects.

TeachersFaculty object:
```json
{
    "id": integer,
    "shortName": string,
    "fullName": string,
    "departments": [
        {
            "id": integer,
            "shortName": string,
            "fullName": string,
            "teachers": [
                {
                    "id": integer,
                    "shortName": string,
                    "fullName": string
                }
            ]
        }
    ]
}
```

Call example:

- **GET** [https://nure-time.runasp.net/api/v1/Teachers/Faculties](https://nure-time.runasp.net/api/v1/Teachers/Faculties)
