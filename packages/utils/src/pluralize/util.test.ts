import { pluralize } from '.';

describe('pluralize', () => {
    const plurWrap = (count: number) => pluralize(count, 'карту', 'карты', 'карт');

    it('shuld return карту whet pass 1', () => {
        expect(plurWrap(1)).toBe('карту');
    });

    it('shuld return карты whet pass 2', () => {
        expect(plurWrap(2)).toBe('карты');
    });

    it('shuld return карт whet pass 0 or 5 and greater', () => {
        expect(plurWrap(0)).toBe('карт');
        expect(plurWrap(5)).toBe('карт');
        expect(plurWrap(10)).toBe('карт');
    });

});
