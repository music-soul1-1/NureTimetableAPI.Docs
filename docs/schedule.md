# Schedule

The `Lessons` controller provides the following endpoints:
* `/Lessons/Get?id={id}&type={type}&startTime={startTime}&endTime={endTime}`
* `/Lessons/GetByName?name={name}&type={type}&startTime={startTime}&endTime={endTime}`

Where `startTime` and `endTime` are optional parameters. If they are not specified, you will get all lessons available for the entity.

## `/Lessons/Get?id={id}&type={type}`
Gets lessons by the entity ID and type. Returns a list of `Lesson` objects.

parameters:

| Name      | Type   | Description                                                            |
|-----------|--------|------------------------------------------------------------------------|
| id        | integer| Entity ID                                                              |
| type      | [EntityType](https://github.com/music-soul1-1/NureTimetableAPI/blob/master/NureTimetableAPI/Types/EntityType.cs) | Entity type. `0` for group, `1` for teacher, `2` for auditory |
| startTime | integer| **Optional.** Start time of the lesson. Format: UNIX seconds timestamp               |
| endTime   | integer| **Optional.** End time of the lesson. Format: UNIX seconds timestamp                 |


Lesson object:
```json
  {
    "id": integer,
    "brief": string,
    "title": string,
    "startTime": integer,
    "endTime": integer,
    "type": {
      "id": integer,
      "shortName": string,
      "fullName": string,
      "idBase": integer,
      "type": string
    },
    "numberPair": integer,
    "teachers": [
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
    ],
    "auditory": {
      "id": integer,
      "name": string,
      "floor": integer,
      "hasPower": boolean,
      "auditoryTypes": [
        {
            "id": integer,
            "name": string
        }
      ],
      "building": {
        "id": string,
        "shortName": string,
        "fullName": string
      }
    },
    "groups": [
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
    ]
  }
```

Call example:

- **GET** [https://nure-time.runasp.net/api/Lessons/Get?id=10307432&type=0](https://nure-time.runasp.net/api/Lessons/Get?id=10307432&type=0)

## `/Lessons/GetByName?name={name}&type={type}`

Gets lessons by the entity name and type. Returns a list of `Lesson` objects.

parameters:

| Name      | Type   | Description                                                            |
|-----------|--------|------------------------------------------------------------------------|
| name      | string | Entity name. For teachers use their short name in a format of: `Second name FN. MN.` |
| type      | [EntityType](https://github.com/music-soul1-1/NureTimetableAPI/blob/master/NureTimetableAPI/Types/EntityType.cs) | Entity type. `0` for group, `1` for teacher, `2` for auditory |
| startTime | integer| Start time of the lesson. Format: UNIX seconds timestamp               |
| endTime   | integer| End time of the lesson. Format: UNIX seconds timestamp                 |


Call example:

- **GET** [https://nure-time.runasp.net/api/Lessons/GetByName?name=іст-22-1&type=0](https://nure-time.runasp.net/api/Lessons/GetByName?name=іст-22-1&type=0)
