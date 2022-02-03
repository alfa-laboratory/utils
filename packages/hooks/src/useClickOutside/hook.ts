import { useEffect, RefObject } from 'react';

export function useClickOutside(
    ref: RefObject<HTMLElement> | Array<RefObject<HTMLElement>>,
    cb: (e: MouseEvent | TouchEvent) => void,
): void {
    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            const checkClickedElement = (el: RefObject<HTMLElement>) =>
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
