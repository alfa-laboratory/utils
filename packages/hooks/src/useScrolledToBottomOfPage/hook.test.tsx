 import { useScrolledToBottomOfPage } from '.';
 import { renderHook } from '@testing-library/react-hooks';

 describe('useScrolledToBottomOfPage', () => {
    beforeEach(() => {
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
    });

    it('should fire event only once when it scrolled to bottom of page', async () => {
        const fn = jest.fn();
        const { documentElement } = document;
        
        renderHook(() => useScrolledToBottomOfPage(fn));

        expect(fn).toBeCalledTimes(0);

        // jsdom определяет ширину и высоту окна равными 1024 x 768
        // https://github.com/jsdom/jsdom/blob/5279cfda5fe4d52f04b2eb6a801c98d81f9b55da/lib/jsdom/browser/Window.js#L736-L739
        // вот почему проставляю здесь scrollTop = 200
        // чтобы получилось 768 + 200 >= 900 (проскролено до низа страницы)
        documentElement.scrollTop = 200;
        // запускает событие скрол
        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalledTimes(1);

        documentElement.scrollTop = 0;
        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalledTimes(1);

        documentElement.scrollTop = 200;
        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalledTimes(1);
    });

    it('should fire event always when it scrolled to bottom of page', async () => {
        const fn = jest.fn();

        const { documentElement } = document;
        
        renderHook(() => useScrolledToBottomOfPage(fn, false));

        expect(fn).toBeCalledTimes(0);

        documentElement.scrollTop = 200;
        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalledTimes(1);

        documentElement.scrollTop = 0;
        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalledTimes(1);

        documentElement.scrollTop = 200;
        document.dispatchEvent(new Event('scroll'));

        expect(fn).toBeCalledTimes(2);
    });
 });
 