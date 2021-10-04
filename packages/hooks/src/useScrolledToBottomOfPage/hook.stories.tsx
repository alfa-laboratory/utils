import React from 'react';
import { action } from '@storybook/addon-actions';
import { useScrolledToBottomOfPage } from '.';

export default { title: 'Hooks/useScrolledToBottomOfPage' };

const style: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'white',
    width: 400,
    height: 3000,
    backgroundColor: 'coral',
};

const Component: React.FC = () => {
    useScrolledToBottomOfPage(action('scrolled to bottom once'));

    return (
        <div style={ style } >
            Try to scroll to bottom
            <br/>
            Action will fire only once
        </div>
    );
};

export const Basic = () => (
    <div>
        <Component />
    </div>
);