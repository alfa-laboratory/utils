import React from 'react';
import { action } from '@storybook/addon-actions';
import { useKeydownOutside } from '.';

export default { title: 'Hooks/useKeydownOutside' };

const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    color: 'white',
    width: 300,
    height: 300,
    backgroundColor: 'coral',
};

const Component: React.FC = () => {
    const ref = React.useRef(null);
    useKeydownOutside(ref, action('outside keydown'));

    return (
        <div
            ref={ ref }
            style={ style }
        >
            Component area
            <input type="text" />
        </div>
    );
};

export const Basic = () => (
    <div>
        <Component />
        <input type="text" />
    </div>
);
