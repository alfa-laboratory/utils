import React from 'react';
import { action } from '@storybook/addon-actions';
import { useClickOutside } from '.';

export default { title: 'Hooks/useClickOutside' };

const style: React.CSSProperties = {
    display: 'flex',
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
    useClickOutside(ref, action('outside click'));

    return (
        <div
            ref={ ref }
            style={ style }
        >
            Component area
        </div>
    );
};

export const Basic = () => (
    <div>
        <Component />
    </div>
);
