---
description: Дізнайтесь більше про контролер розкладу.
---

# Розклад

Контролер `Lessons` надає наступні ендпоінти:
* `/api/v2/Lessons/GetById?id={id}&type={type}&startTime={startTime}&endTime={endTime}`
* `/api/v2/Lessons/GetByName?name={name}&type={type}&startTime={startTime}&endTime={endTime}`

Де `startTime` та `endTime` є необов'язковими параметрами. Якщо вони не вказані, ви отримаєте всі доступні заняття для сутності.


## `GetById`
Отримує заняття за їх ID та типом. Повертає список об'єктів `Lesson`.

#### Об'єкт Lesson
```json
  {
    "id": integer,
    "brief": "string",
    "title": "string",
    "startTime": integer,
    "endTime": integer,
    "type": {
      "id": integer,
      "shortName": "string",
      "fullName": "string",
      "idBase": integer,
      "type": "string"
    },
    "numberPair": integer,
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
    "auditory": {
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
    ]
  }
```

Параметри:

| Назва     | Тип    | Опис                                                                                   |
|-----------|--------|----------------------------------------------------------------------------------------|
| id        | integer| Ідентифікатор сутності                                                                 |
| type      | integer| Тип сутності. `0` для групи, `1` для викладача, `2` для аудиторії. За замовчуванням 0. |
| startTime | integer| **Необов'язково.** Час початку занять. Формат: UNIX секунди                            |
| endTime   | integer| **Необов'язково.** Час закінчення занять. Формат: UNIX секунди                         |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Lessons/GetById?id=10307432&type=0](https://nure-time.runasp.net/api/v2/Lessons/GetById?id=10307432&type=0)

## `GetByName`

Отримує заняття за назвою сутності та типом. Повертає список об'єктів `Lesson`.

Параметри:

| Назва     | Тип    | Опис                                                                                     |
|-----------|--------|------------------------------------------------------------------------------------------|
| name      | string | Ім'я сутності. Для викладачів використовуйте їх скорочене ім'я у форматі `Прізвище І.Б.` |
| type      | integer| Тип сутності. `0` для групи, `1` для викладача, `2` для аудиторії. За замовчуванням 0.   |
| startTime | integer| **Необов'язково.** Час початку занять. Формат: UNIX секунди                              |
| endTime   | integer| **Необов'язково.** Час закінчення занять. Формат: UNIX секунди                           |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Lessons/GetByName?name=іст-22-1&type=0](https://nure-time.runasp.net/api/v2/Lessons/GetByName?name=іст-22-1&type=0)
