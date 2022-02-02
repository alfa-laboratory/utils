import { useEffect, RefObject } from 'react';

export function useClickOutside(
    ref: RefObject<HTMLElement> | Array<RefObject<HTMLElement>>,
    cb: (e: MouseEvent | TouchEvent) => void,
): void {
    useEffect(() => {
        const handler = (event: any) => {
            const clickedEl =
                Array.isArray(ref) &&
                ref.find((el) => !el.current || el.current.contains(event.target));

            if (clickedEl) return;

            if (!Array.isArray(ref) && (!ref.current || ref.current.contains(event.target))) {
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
