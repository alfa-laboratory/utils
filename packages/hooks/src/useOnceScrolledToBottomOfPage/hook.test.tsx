 import React from 'react';
 import ReactDOM from 'react-dom';
 import { useOnceScrolledToBottomOfPage } from '.';
 import { act } from 'react-dom/test-utils';

 describe('useOnceScrolledToBottomOfPage', () => {
    it('should fire event only once when it scrolled to bottom of page', async () => {
        const fn = jest.fn();
        const style: React.CSSProperties = {
            height: 3000,
        };
        
        const element = document.createElement('div');
        
        const Component: React.FC = () => {
            useOnceScrolledToBottomOfPage(fn);
        
            return (
                <div style={ style } />
            );
        };

        act(() => {
            ReactDOM.render(<Component />, element);
        });

        expect(fn).toBeCalledTimes(0);

        document.body.scrollTop = 3000;
        document.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));

        expect(fn).toBeCalledTimes(1);

        document.body.scrollTop = 0;
        document.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));

        expect(fn).toBeCalledTimes(1);

        document.body.scrollTop = 3000;
        document.dispatchEvent(new window.UIEvent('scroll', { detail: 0 }));

        expect(fn).toBeCalledTimes(1);
    });
 });
 