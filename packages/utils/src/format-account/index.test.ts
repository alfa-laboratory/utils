import { formatAccount } from '.';

describe('formatAccount', () => {
    it('should return formatted account value', () => {
        const result = formatAccount('40817810210210285256');

        expect(result).toBe('40817 810 2 1021 0285256');
    });

    it('should return empty string if value is falsy', () => {
        // @ts-expect-error
        expect(formatAccount(null)).toBe('');

        // @ts-expect-error
        expect(formatAccount()).toBe('');
    });
});
