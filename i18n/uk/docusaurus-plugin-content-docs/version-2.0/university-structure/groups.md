---
description: Дізнайтесь більше про контролер груп.
---

# Групи

Контролер `Groups` надає наступні ендпоінти:

* `/api/v2/Groups/GetAll`
* `/api/v2/Groups/Get/{id}`
* `/api/v2/Groups/GetByName?name={name}`
* `/api/v2/Groups/Faculties/GetAll`
* `/api/v2/Groups/Faculties/Get/{id}`
* `/api/v2/Groups/Faculties/GetByName?name={name}`

## `GetAll`
Отримує всі групи. Повертає **список** об'єктів `Group`.

#### Об'єкт Group:
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

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/GetAll](https://nure-time.runasp.net/api/v2/Groups/GetAll)


## `Get/{id}`
Отримує групу за її ID. Повертає об'єкт `Group`.

Параметри:

| Назва     | Тип     | Опис          |
|-----------|---------|---------------|
| id        | integer | Ідентифікатор групи   |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Get/10307432](https://nure-time.runasp.net/api/v2/Groups/Get/10307432)

## `GetByName`
Отримує групу за її назвою. Повертає **список** об'єктів `Group`, назви яких містять вказану назву.

Параметри:

| Назва     | Тип     | Опис           |
|-----------|---------|----------------|
| name      | string  | Назва групи    |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/GetByName?name=іст-2](https://nure-time.runasp.net/api/v2/Groups/GetByName?name=іст-2)

## `Faculties/GetAll`
Отримує всі факультети. Повертає **список** об'єктів `GroupsFaculty`.

#### Об'єкт GroupsFaculty:
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

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Faculties/GetAll](https://nure-time.runasp.net/api/v2/Groups/Faculties/GetAll)

## `Faculties/Get/{id}`
Отримує факультет за його ID. Повертає об'єкт `GroupsFaculty`.

Параметри:

| Назва     | Тип     | Опис               |
|-----------|---------|--------------------|
| id        | integer | Ідентифікатор факультету  |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Faculties/Get/192](https://nure-time.runasp.net/api/v2/Groups/Faculties/Get/192)

## `Faculties/GetByName`
Отримує факультет за його назвою. Повертає **список** об'єктів `GroupsFaculty`, назви яких містять вказану назву.

Параметри:

| Назва     | Тип     | Опис           |
|-----------|---------|----------------|
| name      | string  | Назва факультету   |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Groups/Faculties/GetByName?name=ІК](https://nure-time.runasp.net/api/v2/Groups/Faculties/GetByName?name=ІК)
