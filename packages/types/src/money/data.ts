import { CurrencyCodes } from '@alfalab/data';

export type Amount = {
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
};
