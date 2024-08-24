---
description: Дізнайтесь більше про контролер викладачів.
---

# Викладачі

Контролер `Teachers` надає наступні ендпоінти:

* `/api/v2/Teachers/GetAll`
* `/api/v2/Teachers/Get/{id}`
* `/api/v2/Teachers/GetByName?name={name}`
* `/api/v2/Teachers/Faculties/GetAll`
* `/api/v2/Teachers/Faculties/Get/{id}`
* `/api/v2/Teachers/Faculties/GetByName?name={name}`

## `GetAll`
Отримує всіх викладачів. Повертає **список** об'єктів `Teacher`.

#### Об'єкт Teacher:
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

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/GetAll](https://nure-time.runasp.net/api/v2/Teachers/GetAll)

## `Get/{id}`
Отримує викладача за його ID. Повертає об'єкт `Teacher`.

Параметри:

| Назва     | Тип     | Опис           |
|-----------|---------|----------------|
| id        | integer | Ідентифікатор викладача  |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Get/4070](https://nure-time.runasp.net/api/v2/Teachers/Get/4070)

## `GetByName`
Отримує викладача за його ім'ям. Повертає **список** об'єктів `Teacher`, імена яких містять вказане ім'я.

Параметри:

| Назва     | Тип     | Опис           |
|-----------|---------|----------------|
| name      | string  | Ім'я викладача   |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/GetByName?name=лемешко](https://nure-time.runasp.net/api/v2/Teachers/GetByName?name=лемешко)

## `Faculties/GetAll`
Отримує всі факультети. Повертає **список** об'єктів `TeachersFaculty`.

#### Об'єкт TeachersFaculty:
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

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetAll](https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetAll)

## `Faculties/Get/{id}`
Отримує факультет за його ID. Повертає об'єкт `TeachersFaculty`.

Параметри:

| Назва     | Тип     | Опис           |
|-----------|---------|----------------|
| id        | integer | Ідентифікатор факультету  |

Параметри:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Faculties/Get/237](https://nure-time.runasp.net/api/v2/Teachers/Faculties/Get/237)

## `Faculties/GetByName`
Отримує факультет за його назвою. Повертає **список** об'єктів `TeachersFaculty`, назви яких містять вказану назву.

Параметри:

| Назва     | Тип     | Опис           |
|-----------|---------|----------------|
| name      | string  | Назва факультету |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetByName?name=інформації](https://nure-time.runasp.net/api/v2/Teachers/Faculties/GetByName?name=інформації)
