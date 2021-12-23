import { hasScrolledToBottomOfPage } from '.';

describe('has scrolled to bottom of page', () => {
    it('should return true when it scrolled to bottom of page', () => {
        const { documentElement } = document;
        documentElement.style.height = '900px';

        // так как offsetHeight readOnly приходится его переопределить
        Object.defineProperties(window.HTMLElement.prototype, {
            offsetHeight: {
                get() {
                    return parseFloat(window.getComputedStyle(this).height) || 0;
                },
            },
        });

        expect(hasScrolledToBottomOfPage()).toBe(false);

        // jsdom определяет ширину и высоту окна равными 1024 x 768
        // https://github.com/jsdom/jsdom/blob/5279cfda5fe4d52f04b2eb6a801c98d81f9b55da/lib/jsdom/browser/Window.js#L736-L739
        // вот почему проставляю здесь scrollTop = 200
        // чтобы получилось 768 + 200 >= 900 (проскролено до низа страницы)
        documentElement.scrollTop = 200;

        expect(hasScrolledToBottomOfPage()).toBe(true);
    });
});
