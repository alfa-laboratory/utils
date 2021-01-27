import { cropAccountNumber } from './util';

describe('cropAccountNumber', () => {
    it('should return cropped account number', () => {
        const result = cropAccountNumber('40817810210210285256');

        expect(result).toBe('··5256');
    });

    it('should return undefined if account number is not provided', () => {
        // @ts-expect-error
        const result = cropAccountNumber();

        expect(result).toBeUndefined();
    });
});
