import { maskPhoneNumber } from '.';

describe('maskPhone', () => {
    it('should return formatted phone number', () => {
        expect(maskPhoneNumber('+7 111 222-33-44')).toBe('+7 ··· ··· 33-44');
    });
});
