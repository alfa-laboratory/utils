import { CURRENCY_SYMBOLS, CurrencyCodes } from '@alfalab/data';

/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param currencyCode Код валюты.
 */
export const getCurrencySymbol = (currencyCode: CurrencyCodes): string =>
    CURRENCY_SYMBOLS[currencyCode];
