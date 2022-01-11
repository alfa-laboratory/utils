import React from 'react';

export function useKeydownOutside(
    ref: React.RefObject<HTMLElement>,
    cb: (e: KeyboardEvent) => void,
) {
    React.useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (!ref.current || (event.target instanceof Node && ref.current.contains(event.target))) {
                return;
            }

            cb(event);
        };

        document.addEventListener('keydown', handler);

        return () => {
            document.removeEventListener('keydown', handler);
        };
    }, [ref, cb]);
}
