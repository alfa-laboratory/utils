import React from 'react';

export function useClickOutside(
    ref: React.RefObject<HTMLElement>,
    cb: (e: React.MouseEvent | React.TouchEvent) => void,
) {
    React.useEffect(() => {
        const handler = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }

            cb(event);
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [ref, cb]);
}
