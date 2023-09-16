# Архитектура - API

[<- Назад](/README.md)

## Все персонажи

Возвращает список всех персонажей, разбитый на страницы.

**Метод:** fetchPeople

**GET:** https://swapi.dev/api/people

**Параметры:**

- `page` - номер страницы

**Ответ:**

```json
{
    "count": 82, 
    "next": "https://swapi.dev/api/people/?page=2", 
    "previous": null, 
    "results": [
        {
            "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY", 
            "gender": "male", 
            "homeworld": "https://swapi.dev/api/planets/1/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
                ...
            ], 
            "species": [], 
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/", 
                ...
            ], 
            "starships": [
                "https://swapi.dev/api/starships/12/", 
                ...
            ], 
            "created": "2014-12-09T13:50:51.644000Z", 
            "edited": "2014-12-20T21:17:56.891000Z", 
            "url": "https://swapi.dev/api/people/1/"
        }, 
        ...
    ]
}
```

## Персонаж

Возвращает одного персонажа по id.

**Метод:** fetchPeopleById

**GET:** https://swapi.dev/api/people

**Параметры:**

- `id` - id персонажа (парсится из поля url). Передается через слеш: например `https://swapi.dev/api/people/1`.

**Ответ:**

```json
{
    "name": "Luke Skywalker", 
    "height": "172", 
    "mass": "77", 
    "hair_color": "blond", 
    "skin_color": "fair", 
    "eye_color": "blue", 
    "birth_year": "19BBY", 
    "gender": "male", 
    "homeworld": "https://swapi.dev/api/planets/1/", 
    "films": [
        "https://swapi.dev/api/films/1/", 
        "https://swapi.dev/api/films/2/", 
        "https://swapi.dev/api/films/3/", 
        "https://swapi.dev/api/films/6/"
    ], 
    "species": [], 
    "vehicles": [
        "https://swapi.dev/api/vehicles/14/", 
        "https://swapi.dev/api/vehicles/30/"
    ], 
    "starships": [
        "https://swapi.dev/api/starships/12/", 
        "https://swapi.dev/api/starships/22/"
    ], 
    "created": "2014-12-09T13:50:51.644000Z", 
    "edited": "2014-12-20T21:17:56.891000Z", 
    "url": "https://swapi.dev/api/people/1/"
}
```

## Поиск

Возвращает список персонажей, удовлетворяющий критерию поиска.

**Метод:** searchPeople

**GET:** https://swapi.dev/api/people/

**Параметры:**

- `search` - Имя персонажа

**Ответ:**

```json
{
    "count": 1, 
    "next": null, 
    "previous": null, 
    "results": [
        {
            "name": "R2-D2", 
            "height": "96", 
            "mass": "32", 
            "hair_color": "n/a", 
            "skin_color": "white, blue", 
            "eye_color": "red", 
            "birth_year": "33BBY", 
            "gender": "n/a", 
            "homeworld": "https://swapi.dev/api/planets/8/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
                ...
            ], 
            "species": [
                "https://swapi.dev/api/species/2/"
            ], 
            "vehicles": [], 
            "starships": [], 
            "created": "2014-12-10T15:11:50.376000Z", 
            "edited": "2014-12-20T21:17:50.311000Z", 
            "url": "https://swapi.dev/api/people/3/"
        }
    ]
}
```