import React from 'react';

export function useDidUpdateEffect(effect: () => void | (() => void), deps: unknown[]) {
    const didMountRef = React.useRef(false);

    // eslint-disable-next-line consistent-return
    React.useEffect(() => {
        if (didMountRef.current) {
            const cleanup = effect();
            if (cleanup) {
                return () => cleanup();
            }
        }

        didMountRef.current = true;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
