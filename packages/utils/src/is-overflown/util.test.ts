import { isOverflown } from './';

describe('isOverflown', () => {
    it('should return `true` if element content height overflowing', () => {
        const container = document.createElement('section');

        jest.spyOn(container, 'clientHeight', 'get').mockImplementation(() => 10);
        jest.spyOn(container, 'scrollHeight', 'get').mockImplementation(() => 20);

        expect(isOverflown(container)).toEqual(true);
    });

    it('should return `false` if element content height equals or less than container', () => {
        const container = document.createElement('section');

        jest.spyOn(container, 'clientHeight', 'get').mockImplementation(() => 10);
        jest.spyOn(container, 'scrollHeight', 'get').mockImplementation(() => 10);

        expect(isOverflown(container)).toEqual(false);

        jest.spyOn(container, 'scrollHeight', 'get').mockImplementation(() => 0);

        expect(isOverflown(container)).toEqual(false);
    });

    it('should return `true` if element content width overflowing', () => {
        const container = document.createElement('section');

        jest.spyOn(container, 'clientWidth', 'get').mockImplementation(() => 10);
        jest.spyOn(container, 'scrollWidth', 'get').mockImplementation(() => 20);

        expect(isOverflown(container)).toEqual(true);
    });

    it('should return `false` if element content width equals or less than container', () => {
        const container = document.createElement('section');

        jest.spyOn(container, 'clientWidth', 'get').mockImplementation(() => 10);
        jest.spyOn(container, 'scrollWidth', 'get').mockImplementation(() => 10);

        expect(isOverflown(container)).toEqual(false);

        jest.spyOn(container, 'scrollWidth', 'get').mockImplementation(() => 0);

        expect(isOverflown(container)).toEqual(false);
    });

    it('should throw an error if called without an arg', () => {
        expect(isOverflown).toThrowError();
    });
});
