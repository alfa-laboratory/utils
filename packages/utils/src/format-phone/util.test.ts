import { phoneNumber } from './util';

describe('phoneNumber.getRaw', () => {
    it('should return raw phone number', () => {
        expect(phoneNumber.getRaw('+7 111 222-33-44')).toBe('71112223344');
        expect(phoneNumber.getRaw('-7 111 222-33-44/z')).toBe('71112223344');
        expect(phoneNumber.getRaw('-7 (111) 222-33-44')).toBe('71112223344');
        expect(phoneNumber.getRaw('8 800 222-33-44')).toBe('88002223344');
        expect(phoneNumber.getRaw('8 (800) 222-33-44/z')).toBe('88002223344');
    });
});

describe('phoneNumber.format', () => {
    it('should return formatted phone number', () => {
        expect(phoneNumber.format('71112223344')).toBe('+7 111 222-33-44');
        expect(phoneNumber.format('7 111 222 33 44')).toBe('+7 111 222-33-44');
        expect(phoneNumber.format('88002223344')).toBe('8 800 222-33-44');
        expect(phoneNumber.format('8 800 222 33 44')).toBe('8 800 222-33-44');
    });
});
