import React from 'react';

export type OrientationState = {
    angle: number;
    type: string;
}

export const defaultState: OrientationState = {
    angle: 0,
    type: 'landscape-primary',
};

export function useOrientation(initialState: OrientationState = defaultState) {
    const [state, setState] = React.useState(initialState);

    const onOrientationChangeEvent = React.useCallback(() => {
        const { orientation } = window.screen;
        const { angle, type } = orientation;

        if (!orientation) {
            setState(initialState);
        }

        setState({ angle, type });
    }, [initialState]);

    React.useEffect(() => {
        window.addEventListener(
            'orientationchange', onOrientationChangeEvent, true,
        );

        return () => {
            window.removeEventListener('orientationchange', onOrientationChangeEvent, true);
        };
    }, [onOrientationChangeEvent]);

    return state;
}
