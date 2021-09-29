import { hasScrolledToBottomOfPage } from './util';

describe('has scrolled to bottom of page', () => {
    it('should return true when it scrolled to bottom of page', () => {
        const { documentElement } = document;

        documentElement.scrollTop = 10;
        documentElement.style.height = '900px';
        Object.defineProperties(window.HTMLElement.prototype, {
            offsetHeight: {
                get() {
                    return parseFloat(window.getComputedStyle(this).height) || 0;
                },
            },
        });

        expect(hasScrolledToBottomOfPage()).toBe(false);

        documentElement.scrollTop = 200;

        expect(hasScrolledToBottomOfPage()).toBe(true);
    });
});
