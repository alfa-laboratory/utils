import { CurrencyCodes } from '@alfalab/data';
import { getCurrencySymbol } from '../get-currency-symbol';
import { splitAmount } from '../split-amount';

const AMOUNT_MAJOR_PART_SIZE = 3;
const AMOUNT_SPLIT_CODE_FROM = 4;
const NEGATIVE_AMOUNT_SYMBOL = '−';

export const THINSP = String.fromCharCode(8201); // &thinsp;
export const AMOUNT_MAJOR_MINOR_PARTS_SEPARATOR = ',';

type AmountType = {
    /**
     * Денежное значение в минорных единицах
     */
    value: number;

    /**
     * Валюта
     */
    currency: CurrencyCodes;

    /**
     * Количество минорных единиц в валюте
     */
    minority: number;

    /**
     * default - не отображаем копейки, если их значение 0
     * withZeroMinorPart - отображаем копейки, даже если их значение равно 0
     */
    view?: 'default' | 'withZeroMinorPart';
};

const formatWithCurrency = (value: string | null, currencySymbol?: string) =>
    [value, currencySymbol].filter(Boolean).join(THINSP);

/**
 * Форматирует значение суммы
 * согласно гайдлайну https://design.alfabank.ru/patterns/amount
 */
export const formatAmount = ({ value, currency, minority, view }: AmountType) => {
    const currencySymbol = getCurrencySymbol(currency);

    if (value === null) {
        return {
            majorPart: '',
            minorPart: '',
            formatted: '',
            currencySymbol,
            formattedWithCurrency: formatWithCurrency(value, currencySymbol),
        };
    }

    // eslint-disable-next-line no-param-reassign
    minority = minority === 0 ? 1 : minority; // because Math.log(0) => -Infinity

    const fractionDigits = Math.log(minority) * Math.LOG10E;
    const valueAbsStr = (Math.abs(value) / minority).toFixed(fractionDigits);

    const [majorPart] = valueAbsStr.split('.');
    let [, minorPart] = valueAbsStr.split('.');

    if (view === 'default' && value % minority === 0) {
        minorPart = '';
    }

    const majorPartSplitted = splitAmount(
        majorPart,
        AMOUNT_MAJOR_PART_SIZE,
        THINSP,
        AMOUNT_SPLIT_CODE_FROM,
    );

    const majorPartFormatted =
        value < 0 ? NEGATIVE_AMOUNT_SYMBOL + majorPartSplitted : majorPartSplitted;

    const formattedValueStr = minorPart
        ? majorPartFormatted + AMOUNT_MAJOR_MINOR_PARTS_SEPARATOR + minorPart
        : majorPartFormatted;

    return {
        majorPart: majorPartFormatted,
        minorPart,
        currencySymbol,
        formatted: formattedValueStr,
        formattedWithCurrency: formatWithCurrency(formattedValueStr, currencySymbol),
    };
};
