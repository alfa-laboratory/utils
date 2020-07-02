import { currency } from '@alfalab/data';

export function getAllCurrencyCodesList() {
    return Object.keys(currency.CURRENCY_SYMBOLS);
}
