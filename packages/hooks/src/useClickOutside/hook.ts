import React from 'react';

export function useClickOutside(
    ref: React.RefObject<HTMLElement> | Array<React.RefObject<HTMLElement>>,
    cb: (e: MouseEvent | TouchEvent) => void,
): void {
    React.useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            const checkClickedElement = (el: React.RefObject<HTMLElement>) =>
                !el.current || el.current.contains(event.target as Element);

            if (
                (Array.isArray(ref) && ref.find(checkClickedElement)) ||
                (!Array.isArray(ref) && checkClickedElement(ref))
            ) {
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
