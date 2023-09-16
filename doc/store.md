# Архитектура - Хранилище

Данные должны кешироваться в localStorage. Поэтому при инициализации проекта, 
должено читаться хранилище браузера и, в случае существования данных, 
записываться в хранилище Vuex.

## State

**Избранные персонажи** - favorites

## Actions

### Инициализация

Читает localStorage. Если есть сохраненные данные, то восстанавливает их в 
хранилище Vuex.

**Метод:** initFavorite

**Аргументы:** нет

Вызывает мутацию `SET_FAVORITE_CHARACTER`

### Добавить в избранное

**Метод:** addFavorite

**Аргументы:**

- `characters` (array) - массив объектов со следующими полями:
  - id (number) - Парсит поле url
  - name (string)
  - height (number)
  - mass (number)
  - hair_color (string)

Вызывает мутацию `SET_FAVORITE_CHARACTER`

### Удалить из избранного

**Метод:** removeFavorite

**Аргументы:**

- `ids` (array) - массив id персонажей

Вызывает мутацию `REMOVE_FAVORITE_CHARACTER`

## Mutations

### Добавить в избранное

**Метод:** SET_FAVORITE_CHARACTER

**Аргументы:**

- `character` (object) - данные о персонаже

### Удалить из избранного

**Метод:** REMOVE_FAVORITE_CHARACTER

**Аргументы:**

- `id` (number) - id персонажа
