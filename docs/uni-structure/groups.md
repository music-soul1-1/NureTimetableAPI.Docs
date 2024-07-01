# Groups

The `Groups` controller provides the following endpoints:
* `/Groups/All`
* `/Groups/{id}`
* `/Faculties`

## `/Groups/All`
Gets all groups. Returns a list of `Group` objects.

Group object:
```json
{
    "id": integer,
    "name": string,
    "direction": {
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

- **GET** [https://nure-time.runasp.net/api/Groups/All](https://nure-time.runasp.net/api/Groups/All)


## `/Groups/{id}`
Gets a group by its ID. Returns a `Group` object.

Call example:

- **GET** [https://nure-time.runasp.net/api/Groups/10307432](https://nure-time.runasp.net/api/Groups/10307432)

## `/Faculties`
Gets all faculties. Returns a list of `GroupsFaculty` objects.

GroupsFaculty object:
```json
{
    "id": integer,
    "shortName": string,
    "fullName": string,
    "directions": [
        {
        "id": integer,
        "shortName": string,
        "fullName": string,
        "groups": [
            {
                "id": integer,
                "name": string
            }
        ]
        }
    ]
}
```

Call example:

- **GET** [https://nure-time.runasp.net/api/Groups/Faculties](https://nure-time.runasp.net/api/Groups/Faculties)
