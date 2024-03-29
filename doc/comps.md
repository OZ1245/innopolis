# Архитектура - Компоненты

[<- Назад](/README.md)

## Таблица "DataTable"

Таблица с данными.

**Параметры:**

- `header` (array) - Список колонок:
  - `title` (string) - Отображаемое название колонки
  - `alias` (string) - Алиас к которому строится соответсвие данных
- `body` (array) - Данные соответсвующие списку колонок: `Имя поля (alias): значение поля`
- `showCheckboxColumn` (boolean) - Показывать колонку с чекбоксами

**Слоты:**

- `buttons` - Кнопки

**События:**

- `select-row` - Отмечен чекбокс строки. Возвращает двнные выбранной строки.
- `select-all-rows` - Отмечены все строки странице. Возвращает массив строк.
- `click` - Клик на имя персонажа. Возвращает объект персонажа.

## Поле поиска "InputSearch"

Поле поиска.

**Модель:** string | number | null

**События:**

- `update:modelValue` - Обновление содержания поля.
