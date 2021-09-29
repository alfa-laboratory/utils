import React from 'react';
import { hasScrolledToBottomOfPage } from '../../../utils/src/has-scrolled-to-bottom-of-page';

export function useOnceScrolledToBottomOfPage(
    cb: () => void,
): void {
    React.useEffect(() => {
        const handler = () => {
            if (hasScrolledToBottomOfPage()) {
                cb();
                document.removeEventListener('scroll', handler);
            }
        };

        document.addEventListener('scroll', handler);

        return () => {
            document.removeEventListener('scroll', handler);
        };
    }, [cb]);
}
