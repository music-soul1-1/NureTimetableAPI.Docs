# Auditories

The `Auditories` controller provides the following endpoints:

* `/Auditories/All`
* `/Auditories/{id}`
* `/Buildings`

## `/Auditories/All`
Gets all auditories. Returns a list of `Auditory` objects.

Auditory object:
```json
  {
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
```

> [!Note]
> Because `floor` field is nullable in cist.nure.ua, this API sets `floor` to 0 if it's null there.

Call example:

- **GET** [https://nure-time.runasp.net/api/Auditories/All](https://nure-time.runasp.net/api/Auditories/All)

## `/Auditories/{id}`
Gets an auditory by its ID. Returns an `Auditory` object.

Call example:

- **GET** [https://nure-time.runasp.net/api/Auditories/-185](https://nure-time.runasp.net/api/Auditories/-185)

## `/Buildings`
Gets all buildings. Returns a list of `BuildingDto` objects.

BuildingDto object:
```json
{
    "id": string,
    "shortName": string,
    "fullName": string,
    "auditories": [
        {
            "id": integer,
            "name": string,
            "floor": integer,
            "hasPower": boolean,
            "auditoryTypes": [
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

- **GET** [https://nure-time.runasp.net/api/Auditories/Buildings](https://nure-time.runasp.net/api/Auditories/Buildings)
