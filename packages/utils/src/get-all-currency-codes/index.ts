import { currency } from '@alfalab/data/currency';

export function getAllCurrencyCodes() {
    return Object.keys(currency.CURRENCY_SYMBOLS);
}
