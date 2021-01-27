import React from 'react';
import { useMedia } from '.';

export default { title: 'Hooks/useMedia' };

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
    const [head] = useMedia([
        [1, '(min-width: 400px)'],
        [2, '(min-width: 400px)'],
        [3, '(min-width: 400px)'],
        [4, '(min-width: 400px)'],
    ], 5);

    return (
        <div ref={ ref } style={ style }>
            { head }
            -
            Column
        </div>
    );
};

export const Basic: React.FC = () => (
    <div>
        <Component />
    </div>
);
