<div align="center">
    <h1>@alfalab/utils</h1>
    <div>Набор частоиспользуемых хелперов</div>
</div>

<hr />

## 📦 Установка

```bash
yarn add @alfalab/utils
```

## 🔨 Использование

```jsx
import { cropAccountNumber } from '@alfalab/utils';
```

## Состав

### [crop-account-number](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/crop-account-number/util.ts)

- `cropAccountNumber` — обрезает номер счета до 4 последних цифр.<br />`40817810210210285256 -> ··5256`

### [format-account](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/format-account/util.ts)

- `formatAccount` — Возвращает отформатированное значение счёта, разделенное пробелами.<br />`XXXXX XXX X XXXX XXXXXXX`

### [format-amount](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/format-amount/util.ts)

- `formatAmount` — Форматирует значение суммы согласно [гайдлайну](https://design.alfabank.ru/patterns/amount)

### [format-file-size](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/format-file-size/util.ts)

- `formatFileSize` — Возвращает отформатированное значение размера файла.<br />`100000 -> 97.66 KB`

### [format-phone](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/format-phone/index.ts)

Набор для работы с номерами телефонов.

- `phoneNumber.format` —  Форматирует номер телефона. `71112223344 —> +7 111 222-33-44`
- `phoneNumber.getRaw` — Удаляет форматирование из номера.
- `phoneNumber.mask` — Маскирует номер телефона, оставляя код и последние 4 цифры. `+7 ··· ··· 33-44`

### [get-all-currency-codes](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/get-all-currency-codes/util.ts)

- `getAllCurrencyCodes` — Возвращает список валют

### [get-countries](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/get-countries/util.ts)

утилиты для работы со странами:

- `getCountries` — вернет массив объектов Country;
- `getCountriesMap` — вернет объект, где ключ объекта - код страны (iso2), значение - объект Country;

### [get-currency-symbol](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/get-currency-symbol/util.ts)

- `getCurrencySymbol` — Возвращает знак валюты по ISO коду.

### [is-overflown](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/is-overflown/util.ts)

- `isOverflown` — возвращает `true`, если html-элемент переполнен. Необходимо в случаях когда надо определить, есть ли у элемента скроллбар или текст в элементе обрезался (`text-overflow`).

### [is-valid-card-number](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/is-valid-card-number/util.ts)

- `isValidCardNumber` — принимает номер карты и возвращает `true`, если номер карты валидный по алгоритму Луна.

### [pluralize](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/pluralize/util.ts)

- `pluralize` — Возвращает форму множественного числа указанного слова.<br />`pluralize(2, 'карту', 'карты', 'карт') — карты`

### [seconds-to-time](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/seconds-to-time/util.ts)

— `secondsToTime` — Приводит секунды к формату `hh:mm:ss` и возвращает объект с ними.

### [split-amount](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/split-amount/util.ts)

- `splitAmount` — Дробит мажорную часть суммы на части по указанному символу.<br />`splitAmount('10000000', 3, ' ') - '10 000 000'`

### [is-valid-email](https://github.com/alfa-laboratory/utils/blob/master/packages/utils/src/is-valid-email/util.ts)

- `isValidEmail` — Возвращает `true` для валидного email, иначе `false` <br />`isValidEmail('alfa@labaratory.com') - true`
