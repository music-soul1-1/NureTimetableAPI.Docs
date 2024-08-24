---
description: Дізнайтесь більше про контролер об'єднаних сутностей.
---


# Сутності

Контролер `Entities` надає наступні ендпоінти:

* `/api/v2/Entities/GetAll`

## `GetAll`

Отримує всі об'єднані сутності. За замовчуванням повертає об'єкт `CombinedEntities`,
який містить список груп, викладачів та аудиторій як окремі властивості.
Якщо параметр `useMinimalModels` встановлено на `true`, повертає об'єкт `MinimalCombinedEntities`.

Параметри:

| Назва     | Тип     | Опис          |
|-----------|---------|---------------|
| useMinimalModels | boolean | **Необов'язково.** Вказує, чи повертати `CombinedEntities` або `MinimalCombinedEntities`. Значення за замовчуванням - `false` |


#### Об'єкт CombinedEntities:
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

#### Об'єкт MinimalCombinedEntities:
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

Приклади викликів:

- **GET** [https://nure-time.runasp.net/api/v2/Entities/GetAll](https://nure-time.runasp.net/api/v2/Entities/GetAll)
- **GET** [https://nure-time.runasp.net/api/v2/Entities/GetAll?useMinimalModels=true](https://nure-time.runasp.net/api/v2/Entities/GetAll?useMinimalModels=true)
