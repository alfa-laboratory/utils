import { formatAccount } from './util';

describe('formatAccount', () => {
    it('should return formatted account value', () => {
        const result = formatAccount('40817810210210285256');

        expect(result).toBe('40817 810 2 1021 0285256');
    });

    it('should return empty string if value isn\'t provided', () => {
        const result = formatAccount('40817810210210285256');

        expect(result).toBe('');
    });
});
