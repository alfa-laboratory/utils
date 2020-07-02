import { formatAmount } from './util';

describe('formatAmount', () => {
    it('should return not empty minorPart if passed view = "default" and value has zero minor part', () => {
        const { minorPart, formated, formatedWithCurrency } = formatAmount({
            view: 'withZeroMinorPart',
            value: 1234500,
            currency: 'RUR',
            minority: 100,
        });

        expect(minorPart).toBe('00');
        expect(formated).toBe('12 345,00');
        expect(formatedWithCurrency).toBe('12 345,00 ₽');
    });

    it('should return empty minorPart if passed view = "default" and value has zero minor part', () => {
        const { minorPart, formated, formatedWithCurrency } = formatAmount({
            view: 'default',
            value: 1234500,
            currency: 'RUR',
            minority: 100,
        });

        expect(minorPart).toBe('');
        expect(formated).toBe('12 345');
        expect(formatedWithCurrency).toBe('12 345 ₽');
    });

    it('should return zero majorPart if passed value < minority', () => {
        const { majorPart, minorPart } = formatAmount({
            view: 'withZeroMinorPart',
            value: 100,
            currency: 'RUR',
            minority: 1000,
        });

        expect(majorPart).toBe('0');
        expect(minorPart).toBe('100');
    });

    it('should format correctly', () => {
        const {
            majorPart, minorPart, formated, formatedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: 12345,
            currency: 'USD',
            minority: 100,
        });

        expect(majorPart).toBe('123');
        expect(minorPart).toBe('45');
        expect(formated).toBe('123,45');
        expect(formatedWithCurrency).toBe('123,45 $');
    });

    it('should add "−" to majorPart if passed negative value', () => {
        const {
            majorPart, minorPart, formated, formatedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: -12345,
            currency: 'RUR',
            minority: 100,
        });

        expect(majorPart).toBe('−123');
        expect(minorPart).toBe('45');
        expect(formated).toBe('−123,45');
        expect(formatedWithCurrency).toBe('−123,45 ₽');
    });
});
