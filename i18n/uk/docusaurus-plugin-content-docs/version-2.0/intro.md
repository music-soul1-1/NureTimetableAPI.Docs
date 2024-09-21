---
sidebar_position: 1
---

# Вступ

Тут ви знайдете документацію до ендпоінтів API. Нижче ви знайдете список всіх ендпоінтів та їх описи.

Також ви можете пограти з API використовуючи [Swagger UI](https://nure-time.runasp.net/swagger/index.html).

Перегляньте [Кросплатформний застосунок](https://github.com/music-soul1-1/nure-timetable) та [.NET бібліотеку](https://github.com/music-soul1-1/NureTimetableAPI.DotNetLib).


## Початок

Перш за все, домен API: https://nure-time.runasp.net

**Версія 2** API має наступні ендпоінти:

### Контролер аудиторій

* `/api/v2/Auditories/GetAll`
* `/api/v2/Auditories/Get/{id}`
* `/api/v2/Auditories/GetByName`
* `/api/v2/Auditories/Buildings/GetAll`
* `/api/v2/Auditories/Buildings/Get/{id}`
* `/api/v2/Auditories/Buildings/GetByName`

### Контролер груп

* `/api/v2/Groups/GetAll`
* `/api/v2/Groups/Get/{id}`
* `/api/v2/Groups/GetByName`
* `/api/v2/Groups/Faculties/GetAll`
* `/api/v2/Groups/Faculties/Get/{id}`
* `/api/v2/Groups/Faculties/GetByName`

### Контролер викладачів

* `/api/v2/Teachers/GetAll`
* `/api/v2/Teachers/Get/{id}`
* `/api/v2/Teachers/GetByName`
* `/api/v2/Teachers/Faculties/GetAll`
* `/api/v2/Teachers/Faculties/Get/{id}`
* `/api/v2/Teachers/Faculties/GetByName`

### Контролер сутностей

* `/api/v2/Entities/GetAll`

### Контролер занять

* `/api/v2/Lessons/GetById`
* `/api/v2/Lessons/GetByName`

:::info[Примітка]

* Ендпоінти версії 2 використовують `PascalCase`. При роботі з API вам не потрібно використовувати його. 
(наприклад, `/api/v2/Groups/GetAll` -> `/api/v2/groups/getall`).

* Також, ендпоінти в цьому списку представлені без параметрів.
Повний список параметрів можна знайти в відповідному описі ендпоінта.
Клацніть `Наступна сторінка` нижче, щоб дізнатися більше 👇.


:::

Цей список буде розширюватися в міру розвитку проекту.
