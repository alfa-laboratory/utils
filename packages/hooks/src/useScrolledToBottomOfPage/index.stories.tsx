import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
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
    const once = boolean('once', true);
    useScrolledToBottomOfPage(action('scrolled to bottom'), once);

    return (
        <div style={ style } >
            Scroll to bottom
            <br/>
            And action will fire
        </div>
    );
};

export const Basic = () => (
    <div>
        <Component />
    </div>
);
