import { currency, CurrencyCodes } from '@alfalab/data';

/**
 * Возвращает знак валюты по ISO коду.
 *
 * @param currencyCode Код валюты.
 */
export const getCurrencySymbol = (currencyCode: CurrencyCodes): string =>
    currency.CURRENCY_SYMBOLS[currencyCode];
