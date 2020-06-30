import { CURRENCY_SYMBOLS } from './currency-symbols';
import { CurrencyCodes } from './currency-codes';

/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param currencyCode Код валюты.
 */
export const getCurrencySymbol = (currencyCode: CurrencyCodes): string =>
    CURRENCY_SYMBOLS[currencyCode];
