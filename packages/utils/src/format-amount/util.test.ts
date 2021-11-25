import { formatAmount } from './util';

describe('formatAmount', () => {
    it('should return not empty minorPart if passed view = "default" and value has zero minor part', () => {
        const { minorPart, formatted, formattedWithCurrency } = formatAmount({
            view: 'withZeroMinorPart',
            value: 1234500,
            currency: 'RUR',
            minority: 100,
        });

        expect(minorPart).toBe('00');
        expect(formatted).toBe('12 345,00');
        expect(formattedWithCurrency).toBe('12 345,00 ₽');
    });

    it('should return empty minorPart if passed view = "default" and value has zero minor part', () => {
        const { minorPart, formatted, formattedWithCurrency } = formatAmount({
            view: 'default',
            value: 1234500,
            currency: 'RUR',
            minority: 100,
        });

        expect(minorPart).toBe('');
        expect(formatted).toBe('12 345');
        expect(formattedWithCurrency).toBe('12 345 ₽');
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
            majorPart, minorPart, formatted, formattedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: 12345,
            currency: 'USD',
            minority: 100,
        });

        expect(majorPart).toBe('123');
        expect(minorPart).toBe('45');
        expect(formatted).toBe('123,45');
        expect(formattedWithCurrency).toBe('123,45 $');
    });

    it('should add "−" to majorPart if passed negative value', () => {
        const {
            majorPart, minorPart, formatted, formattedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: -12345,
            currency: 'RUR',
            minority: 100,
        });

        expect(majorPart).toBe('−123');
        expect(minorPart).toBe('45');
        expect(formatted).toBe('−123,45');
        expect(formattedWithCurrency).toBe('−123,45 ₽');
    });

    it('should format correctly when passed null value', () => {
        const {
            majorPart, minorPart, formatted, formattedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: null as any,
            currency: 'RUR',
            minority: 100,
        });

        expect(majorPart).toBe('');
        expect(minorPart).toBe('');
        expect(formatted).toBe('');
        expect(formattedWithCurrency).toBe('₽');
    });

    it('should format correctly when passed unknown currency', () => {
        const {
            majorPart, minorPart, formatted, formattedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: 12345,
            currency: 'MONOPOLY_DOLLARS' as any,
            minority: 100,
        });

        expect(majorPart).toBe('123');
        expect(minorPart).toBe('45');
        expect(formatted).toBe('123,45');
        expect(formattedWithCurrency).toBe('123,45');
    });

    it('should format correctly when passed null value and unknown currency', () => {
        const {
            majorPart, minorPart, formatted, formattedWithCurrency,
        } = formatAmount({
            view: 'default',
            value: null as any,
            currency: 'MONOPOLY_DOLLARS' as any,
            minority: 100,
        });

        expect(majorPart).toBe('');
        expect(minorPart).toBe('');
        expect(formatted).toBe('');
        expect(formattedWithCurrency).toBe('');
    });
});
