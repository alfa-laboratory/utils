/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useKeyboardFocus } from '.';

describe('useKeyboardFocus', () => {
    const renderComponent = () => {
        const FocusableButton = () => {
            const ref = useRef<HTMLButtonElement>(null);
            const { focused } = useKeyboardFocus(ref);

            return (
                <button type="button" ref={ ref }>
                    { focused ? 'focused' : '' }
                </button>
            );
        };

        return render(
            <React.Fragment>
                <FocusableButton />
                <button type="button">second button</button>
            </React.Fragment>,
        );
    };

    it('should pass `focused=false` by default', async () => {
        const { queryByText } = renderComponent();

        expect(queryByText('focused')).not.toBeInTheDocument();
    });

    it('should pass `focused=true` when child gets focus', async () => {
        const { queryByText } = renderComponent();

        userEvent.tab();

        expect(queryByText('focused')).toBeInTheDocument();
    });

    it('should pass `focused=false` when child loses focus', async () => {
        const { queryByText } = renderComponent();

        userEvent.tab();

        expect(queryByText('focused')).toBeInTheDocument();

        userEvent.tab();

        expect(queryByText('focused')).not.toBeInTheDocument();
    });

    it('should pass `focused=false` for non-interactive ref element', async () => {
        const FocusableButton = () => {
            const ref = useRef<HTMLDivElement>(null);
            const { focused } = useKeyboardFocus(ref);

            return <div ref={ ref }>{ focused ? 'focused' : '' }</div>;
        };

        const { queryByText } = render(<FocusableButton />);

        userEvent.tab();

        expect(queryByText('focused')).not.toBeInTheDocument();
    });

    it('should pass `focused=false` when child gets focus by mouse', async () => {
        const { queryByText, queryAllByRole } = renderComponent();

        const focusableButton = queryAllByRole('button')[0];

        userEvent.click(focusableButton);

        expect(queryByText('focused')).not.toBeInTheDocument();
    });
});
