import { getRawPhoneNumber } from './util';

describe('getRawPhoneNumber', () => {
    it('should return raw phone number', () => {
        expect(getRawPhoneNumber('+7 111 222-33-44')).toBe('71112223344');
        expect(getRawPhoneNumber('-7 111 222-33-44/z')).toBe('71112223344');
        expect(getRawPhoneNumber('+7 (111) 222-33-44')).toBe('71112223344');
        expect(getRawPhoneNumber('8 800 222-33-44')).toBe('88002223344');
        expect(getRawPhoneNumber('8 (800) 222-33-44/z')).toBe('88002223344');
    });
});
