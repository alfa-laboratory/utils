<div align="center">
    <h1>@alfalab/utils</h1>
    <div>Данная библиотека представляет собой набор общеиспользуемых утилит.</div>
</div>

<hr />

<img src="https://github.com/alfa-laboratory/utils/workflows/Tests/badge.svg" /> ![](https://badgen.net/npm/v/@alfalab/utils)

## Содержание

- [Содержание](#содержание)
- [Структура](#структура)
- [Установка](#установка)
- [Документация](#документация)
  - [Хуки](#хуки)
  - [Утилиты](#утилиты)
  - [Данные](#данные)
  - [Типы](#типы)

## Структура
Данная библиотека представляет собой набор пакетов организованный по принципу монорепозитория и включает в себя следующие пакеты:

- [React хуки](https://github.com/alfa-laboratory/utils/tree/develop/packages/data)
- [Утилиты](https://github.com/alfa-laboratory/utils/tree/develop/packages/utils)
- [Данные](https://github.com/alfa-laboratory/utils/tree/develop/packages/data)
- [Типы](https://github.com/alfa-laboratory/utils/tree/develop/packages/types)

## Установка

Установка основной библиотеки:

```bash
npm i @alfalab/toolbox
```

или

```bash
yarn add @alfalab/utils
```

Установка отдельного модуля ( например, если вам нужны только утилиты )

```bash
npm i @alfalab/utils
```

или

```bash
yarn add @alfalab/utils
```

## Документация

### Хуки

| название | назначение |   ссылки  |
|----------|------------|-----------|
| `useClickOutside` | Обработчик который срабатывает при клике вне контейнера на который передана ссылка | [демо]() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/useClickOutside/docs.md) |
| `useDimensions` |            | [демо]() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/useDimensions/docs.md) |
| `useEventCallback` | https://github.com/facebook/react/issues/14099#issuecomment-440013892 | [демо]() \| - |
| `useFocus` | Хук устанавливает обработчик события на focusin и focusout | [демо]() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/useFocus/docs.md) |
| `useMedia` | Обработчик срабатывает когда переданный медиа запрос является валидным | [демо]() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/useMedia/docs.md) |
| `usePrevious` | Позволяет сохранять предыдущее значение до рендера | [демо]() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/usePrevious/docs.md) |
| `useDidUpdateEffect` | Вызывает коллбэк при изменении значений, переданных в зависимостях. В отличии от useEffect пропускает начальный рендер (аналог ComponentDidUpdate). | []() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/usePrevious/docs.md) |
| `useImageLoadingState` | Возвращает результат загрузки картинки. | []() \| [документация](https://github.com/alfa-laboratory/utils/blob/develop/packages/hooks/src/useImageLoadingState/docs.md) |

### Утилиты

| название | назначение | аргументы |
|----------|------------|-----------|
|          |            | [демо]() \| [документация]() |
|          |            | [демо]() \| [документация]() |
|          |            | [демо]() \| [документация]() |

### Данные

| название | назначение | аргументы |
|----------|------------|-----------|
|          |            | [демо]() \| [документация]() |
|          |            | [демо]() \| [документация]() |
|          |            | [демо]() \| [документация]() |

### Типы

| название | назначение | аргументы |
|----------|------------|-----------|
|          |            | [демо]() \| [документация]() |
|          |            | [демо]() \| [документация]() |
|          |            | [демо]() \| [документация]() |