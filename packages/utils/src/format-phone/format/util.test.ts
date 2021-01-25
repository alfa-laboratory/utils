import { formatPhoneNumber } from '.';

describe('formatPhoneNumber', () => {
    it('should return formatted phone number', () => {
        expect(formatPhoneNumber('71112223344')).toBe('+7 111 222-33-44');
        expect(formatPhoneNumber('7 111 222 33 44')).toBe('+7 111 222-33-44');
        expect(formatPhoneNumber('88002223344')).toBe('8 800 222-33-44');
        expect(formatPhoneNumber('8 800 222 33 44')).toBe('8 800 222-33-44');
    });
});
