import { currency } from '@alfalab/data';

export function getAllCurrencyCodes() {
    return Object.keys(currency.CURRENCY_SYMBOLS);
}
