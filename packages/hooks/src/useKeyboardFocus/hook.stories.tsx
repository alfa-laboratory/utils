import React, { useRef } from 'react';
import { useKeyboardFocus } from '.';

export default { title: 'Hooks/useKeyboardFocus' };

const style: React.CSSProperties = {
    outline: 'none',
};

const focusStyle: React.CSSProperties = {
    outline: '2px solid #0f62fe',
    outlineOffset: '2px',
};

const Component: React.FC = () => {
    const ref = useRef<HTMLButtonElement>(null);
    const { focused } = useKeyboardFocus(ref);

    return (
        <button type="button" ref={ ref } style={ focused ? focusStyle : style }>
            focus me by keyboard
        </button>
    );
};

export const Basic = () => (
    <div>
        <Component />
    </div>
);
