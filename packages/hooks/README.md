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

Подписка за событие `mousedown`, `touchstart`. При нажатии вне элемента вызывает переданный callback
