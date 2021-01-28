import React from 'react';
import { action } from '@storybook/addon-actions';
import { useDidUpdateEffect } from '.';

export default { title: 'Hooks/useDidUpdateEffect' };

const Component: React.FC<{ onChange: (value: string) => void }> = ({ onChange }) => {
    const [value, setValue] = React.useState('default value');

    const handleClick = React.useCallback(() => {
        setValue(Math.random().toString());
    }, []);

    useDidUpdateEffect(() => {
        onChange(value);
    }, [value]);

    return (
        <button type="button" onClick={ handleClick }>
            change
        </button>
    );
};

export const Basic = () => (
    <div>
        <Component onChange={ action('change') } />
    </div>
);
