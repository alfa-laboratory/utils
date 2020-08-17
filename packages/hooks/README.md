# Hooks

## 📦 Установка

```bash
yarn add @alfalab/hooks
```

## 🔨 Использование

```jsx
import { usePrevious } from '@alfalab/hooks';
```

## Состав

### usePrevious

Предыдущее состояние из useState
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <h1>Сейчас: {count}, до этого: {prevCount}</h1>;
}
```

### useEventCallback

https://github.com/facebook/react/issues/14099#issuecomment-440013892

### useClickOutside

Подписка на событие `mousedown`, `touchstart`. При нажатии вне элемента вызывает переданный callback

### useFocus

Подписка на событие `focusin`, `focusout` для конкретного события фокуса (клавиатура/мышка).
Возвращает true/false о состоянии фокуса на элементе