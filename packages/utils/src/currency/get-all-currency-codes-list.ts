import { CURRENCY_SYMBOLS } from '@alfalab/data';


export function getAllCurrencyCodesList() {
    return Object.keys(CURRENCY_SYMBOLS);
}
