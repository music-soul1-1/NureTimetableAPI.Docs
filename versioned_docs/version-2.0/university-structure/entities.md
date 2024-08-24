---
description: Read more about the combined entities controller.
---


# Entities

The `Entities` controller provides the following endpoints:

* `/api/v2/Entities/GetAll`

## `GetAll`

Gets all combined entities. By default, returns a `CombinedEntities` object, 
which contains a list of groups, teachers, and auditories as separate properties.
If `useMinimalModels` parameter is set to `true`, returns a `MinimalCombinedEntities` object.

Parameters:

| Name              | Type    | Description   |
|-------------------|---------|---------------|
| useMinimalModels  | boolean | **Optional.** Indicates whether to return `CombinedEntities` or `MinimalCombinedEntities`. Default value - `false` |


#### CombinedEntities object:
```json
{
  "groups": [
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
  ],
  "teachers": [
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
  ],
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
      ],
      "building": {
        "id": "string",
        "shortName": "string",
        "fullName": "string"
      }
    }
  ]
}
```

#### MinimalCombinedEntities object:
```json
{
  "groups": [
    {
      "id": integer,
      "name": "string"
    }
  ],
  "teachers": [
    {
      "id": integer,
      "shortName": "string",
      "fullName": "string"
    }
  ],
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

Call examples:

- **GET** [https://nure-time.runasp.net/api/v2/Entities/GetAll](https://nure-time.runasp.net/api/v2/Entities/GetAll)
- **GET** [https://nure-time.runasp.net/api/v2/Entities/GetAll?useMinimalModels=true](https://nure-time.runasp.net/api/v2/Entities/GetAll?useMinimalModels=true)
