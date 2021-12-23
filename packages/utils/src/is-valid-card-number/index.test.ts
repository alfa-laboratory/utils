import { isValidCardNumber } from '.';

describe('isValidCardNumber', () => {
    it('should return false if number card is invalid', () => {
        const result = isValidCardNumber('1111 1111 1111 1111');

        expect(result).toBeFalsy();
    });

    it('should return true if number card is valid', () => {
        const result = isValidCardNumber('6011 0000 0000 0004');

        expect(result).toBeTruthy();
    });
});
