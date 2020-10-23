import React from 'react';
import { useFocus, InputMethod } from '.';

export default { title: 'Hooks/useFocus' };

const style: React.CSSProperties = {
    outline: 'none',
    border: '1px solid lightgray',
};

const focusStyle: React.CSSProperties = {
    outline: '2px solid #0f62fe',
    outlineOffset: '2px',
};

const Component: React.FC<{ inputMethod: InputMethod }> = ({
    inputMethod = 'keyboard',
}) => {
    const ref = React.useRef<HTMLSpanElement>(null);
    const [focused] = useFocus(ref, inputMethod);

    return (
        <span
            ref={ ref }
            role="button"
            tabIndex={ inputMethod === 'keyboard' ? 0 : -1 }
            style={ focused ? focusStyle : style }
        >
            focus me by
            { ' ' }
            { inputMethod }
        </span>
    );
};

export const Basic = () => (
    <div>
        <Component inputMethod="keyboard" />
        <br />
        <br />
        <Component inputMethod="mouse" />
    </div>
);
