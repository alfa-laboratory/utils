<div align="center">
    <h1>@alfalab/hooks</h1>
    <div>Набор частоиспользуемых React-хуков</div>
</div>

<hr />

## 📦 Установка

```bash
yarn add @alfalab/hooks
```

## 🔨 Использование

```jsx
import { usePrevious } from '@alfalab/hooks';
```

## Состав

### [useClickOutside](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useClickOutside/hook.ts)

Подписка на событие `mousedown`, `touchstart`. При нажатии вне элемента вызывает переданный callback

### [useCountdown](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useCountdown/hook.ts)

Хук обратного отсчёта времени. Возвращает оставшееся количество секунд до определённой даты.

### [useDidUpdateEffect](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useDidUpdateEffect/hook.ts)

Вызывает коллбэк при изменении значений, переданных в зависимостях.
В отличии от useEffect — пропускает начальный рендер (аналог ComponentDidUpdate).

### [useDimensions](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useDimensions/hook.ts)

Хук для измерения DOM-элемента, в том числе в live-режиме

### [useEventCallback](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useEventCallback/hook.ts)

https://github.com/facebook/react/issues/14099#issuecomment-440013892

### [useFocus](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useFocus/hook.ts)

Подписка на событие `focusin`, `focusout` для конкретного события фокуса (клавиатура/мышка).
Возвращает true/false о состоянии фокуса на элементе или на одном из его дочерних элементов

### [useImageLoadingState](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useImageLoadingState/hook.ts)

Возвращает результат загрузки изображения — `loading | loaded | error`

### [useKeydownOutside](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useKeydownOutside/hook.ts)

Подписка на событие `keydown`. При нажатии вне элемента вызывает переданный callback

### [useMedia](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/useMedia/hook.ts)

Возвращает значение, которое соответствует сработавшему медиа-выражению

```
const [columns] = useMedia([
    [1, '(min-width: 400px)'],
    [2, '(min-width: 600px)'],
    [3, '(min-width: 900px)'],
], 1);
```

### [usePrevious](https://github.com/alfa-laboratory/utils/blob/master/packages/hooks/src/usePrevious/hook.ts)

Возвращает предыдущее состояние из useState

```jsx
function Counter() {
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count);
    return (
        <h1>
            Сейчас: {count}, до этого: {prevCount}
        </h1>
    );
}
```
