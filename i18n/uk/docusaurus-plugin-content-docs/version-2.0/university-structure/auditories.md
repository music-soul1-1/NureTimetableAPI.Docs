---
description: Дізнайтесь більше про контролер аудиторій.
---

# Аудиторії

Контролер `Auditories` надає наступні ендпоінти:

* `/api/v2/Auditories/GetAll`
* `/api/v2/Auditories/Get/{id}`
* `/api/v2/Auditories/GetByName?name={name}`
* `/api/v2/Auditories/Buildings/GetAll`
* `/api/v2/Auditories/Buildings/Get/{id}`
* `/api/v2/Auditories/Buildings/GetByName?name={name}`


## `GetAll`
Отримує всі аудиторії. Повертає **список** об'єктів `Auditory`.

#### Об'єкт Auditory:
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

:::info[Примітка]

Оскільки поле `floor` у cist.nure.ua може мати нульове значення, NureTimetableAPI встановлює `floor` на 0, якщо воно там нульове.

:::

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/GetAll](https://nure-time.runasp.net/api/v2/Auditories/GetAll)

## `Get/{id}`
Отримує аудиторію за її ID. Повертає об'єкт `Auditory`.

Параметри:

| Назва     | Тип    | Опис          |
|-----------|--------|---------------|
| id        | integer| Ідентифікатор аудиторії   |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Get/86](https://nure-time.runasp.net/api/v2/Auditories/Get/86)

## `GetByName`
Отримує аудиторію за її назвою. Повертає **список** об'єктів `Auditory`, назви яких містять вказану назву.

Параметри:

| Назва     | Тип    | Опис             |
|-----------|--------|------------------|
| name      | string | Назва аудиторії   |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/GetByName?name=20](https://nure-time.runasp.net/api/v2/Auditories/GetByName?name=20)


## `Buildings/GetAll`
Отримує всі корпуси. Повертає **список** об'єктів `Building`.

#### Об'єкт Building:
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

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetAll](https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetAll)

## `Buildings/Get/{id}`
Отримує корпус за його ID. Повертає об'єкт `Building`.

Параметри:

| Назва     | Тип    | Опис                   |
|-----------|--------|------------------------|
| id        | string | Ідентифікатор корпуса  |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Buildings/Get/д](https://nure-time.runasp.net/api/v2/Auditories/Buildings/Get/д)

## `Buildings/GetByName`
Отримує корпус за його назвою. Повертає **список** об'єктів `Building`, назви яких містять вказану назву.

Параметри:

| Назва     | Тип    | Опис              |
|-----------|--------|-------------------|
| name      | string | Назва корпуса     |

Приклад виклику:

- **GET** [https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetByName?name=І](https://nure-time.runasp.net/api/v2/Auditories/Buildings/GetByName?name=І)
