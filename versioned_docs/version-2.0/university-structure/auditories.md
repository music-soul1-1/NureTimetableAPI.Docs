---
description: Read more about the auditories controller.
---

# Auditories

The `Auditories` controller provides the following endpoints:

* `/api/v2/Auditories/GetAll`
* `/api/v2/Auditories/Get/{id}`
* `/api/v2/Auditories/GetByName?name={name}`
* `/api/v2/Auditories/Buildings/GetAll`
* `/api/v2/Auditories/Buildings/Get/{id}`
* `/api/v2/Auditories/Buildings/GetByName?name={name}`


## `GetAll`
Gets all auditories. Returns a **list** of `Auditory` objects.

#### Auditory object:
```json
  {
    "id": integer,
    "name": "string",
    "floor": integer,
    "hasPower": boolean,
    "auditoryTypes": [
      {
        "id": integer,
        "name": "string"
      }
    ],
    "building": {
      "id": "string",
      "shortName": "string",
      "fullName": "string"
    }
  },
```

:::info[Note]

Because `floor` field is nullable in cist.nure.ua, NureTimetableAPI sets `floor` to 0 if it's null there.

:::

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/GetAll](https://nure-time.runasp.net/api/v2/Auditories/GetAll)

## `Get/{id}`
Gets the auditory by its ID. Returns an `Auditory` object.

Parameters:

| Name      | Type   | Description   |
|-----------|--------|---------------|
| id        | integer| Auditory ID   |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Get/86](https://nure-time.runasp.net/api/v2/Auditories/Get/86)

## `GetByName`
Gets the auditory by its name. Returns a **list** of `Auditory` objects whose names contain the specified name.

Parameters:

| Name      | Type   | Description      |
|-----------|--------|------------------|
| name      | string | Auditory name.   |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/GetByName?name=20](https://nure-time.runasp.net/api/v2/Auditories/GetByName?name=20)


## `Buildings/GetAll`
Gets all buildings. Returns a **list** of `Building` objects.

#### Building object:
```json
{
    "id": "string",
    "shortName": "string",
    "fullName": "string",
    "auditories": [
        {
            "id": integer,
            "name": "string",
            "floor": integer,
            "hasPower": boolean,
            "auditoryTypes": [
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

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetAll](https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetAll)

## `Buildings/Get/{id}`
Gets the building by its ID. Returns a `Building` object.

Parameters:

| Name      | Type   | Description   |
|-----------|--------|---------------|
| id        | string | Building ID   |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Buildings/Get/д](https://nure-time.runasp.net/api/v2/Auditories/Buildings/Get/д)

## `Buildings/GetByName`
Gets the building by its name. Returns a **list** of `Building` objects whose names contain the specified name.

Parameters:

| Name      | Type   | Description      |
|-----------|--------|------------------|
| name      | string | Building name.   |

Call example:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetByName?name=І](https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetByName?name=І)
