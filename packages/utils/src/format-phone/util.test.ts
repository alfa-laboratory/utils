import { getRawPhoneNumber, formatPhoneNumber } from './util';

describe('getRawPhoneNumber', () => {
    it('should return raw phone number', () => {
        expect(getRawPhoneNumber('+7 111 222-33-44')).toBe('71112223344');
        expect(getRawPhoneNumber('-7 111 222-33-44/z')).toBe('71112223344');
        expect(getRawPhoneNumber('-7 (111) 222-33-44')).toBe('71112223344');
        expect(getRawPhoneNumber('8 800 222-33-44')).toBe('88002223344');
        expect(getRawPhoneNumber('8 (800) 222-33-44/z')).toBe('88002223344');
    });
});

describe('formatPhoneNumber', () => {
    it('should return formatted phone number by mask', () => {
        expect(formatPhoneNumber('71112223344')).toBe('+7 111 222-33-44');
        expect(formatPhoneNumber('7 111 222 33 44')).toBe('+7 111 222-33-44');
        expect(formatPhoneNumber('88002223344')).toBe('8 800 222-33-44');
        expect(formatPhoneNumber('8 800 222 33 44')).toBe('8 800 222-33-44');
    });
});
