import React from 'react';
import { hasScrolledToBottomOfPage } from '@alfalab/utils';

export function useScrolledToBottomOfPage(
    cb: () => void, once = true
): void {
    React.useEffect(() => {
        const handler = () => {
            if (hasScrolledToBottomOfPage()) {
                cb();
                if(once){
                    document.removeEventListener('scroll', handler);
                }
            }
        };

        document.addEventListener('scroll', handler);

        return () => {
            document.removeEventListener('scroll', handler);
        };
    }, [cb]);
}
