// /**
//  * @jest-environment jsdom
//  */

// import React from 'react';
// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import { useFocus, InputMethod } from '.';

// describe('useFocus', () => {
//     const DATA_TEST_ID = 'test-id';

//     const renderComponent = (method: InputMethod = 'keyboard') => {
//         const FocusableButton = () => {
//             const ref = React.useRef<HTMLButtonElement>(null);
//             const [focused] = useFocus(ref, method);

//             return (
//                 <button type="button" ref={ ref } data-test-id={ DATA_TEST_ID }>
//                     { focused ? 'focused' : '' }
//                 </button>
//             );
//         };

//         return render(
//             <React.Fragment>
//                 <FocusableButton />
//                 <button type="button">second button</button>
//             </React.Fragment>,
//         );
//     };

//     it('should pass `focused=false` by default', async () => {
//         const { queryByText } = renderComponent();

//         expect(queryByText('focused')).not.toBeInTheDocument();
//     });

//     describe('when `inputMethod=keyboard`', () => {
//         it('should pass `focused=true` when child gets focus', async () => {
//             const { queryByText } = renderComponent();

//             userEvent.tab();

//             expect(queryByText('focused')).toBeInTheDocument();
//         });

//         it('should pass `focused=false` when child loses focus', async () => {
//             const { queryByText } = renderComponent();

//             userEvent.tab();

//             expect(queryByText('focused')).toBeInTheDocument();

//             userEvent.tab();

//             expect(queryByText('focused')).not.toBeInTheDocument();
//         });

//         it('should pass `focused=false` for non-interactive ref element', async () => {
//             const FocusableButton = () => {
//                 const ref = React.useRef<HTMLDivElement>(null);
//                 const [focused] = useFocus(ref, 'keyboard');

//                 return <div ref={ ref }>{ focused ? 'focused' : '' }</div>;
//             };

//             const { queryByText } = render(<FocusableButton />);

//             userEvent.tab();

//             expect(queryByText('focused')).not.toBeInTheDocument();
//         });

//         it('should pass `focused=false` when child gets focus by mouse', async () => {
//             const { queryByText, queryAllByRole } = renderComponent();

//             const focusableButton = queryAllByRole('button')[0];

//             userEvent.click(focusableButton);

//             expect(queryByText('focused')).not.toBeInTheDocument();
//         });
//     });

//     describe('when `inputMethod=mouse`', () => {
//         it('should pass `focused=true` when child gets focus', async () => {
//             const { getByTestId, queryByText } = renderComponent('mouse');

//             userEvent.click(getByTestId(DATA_TEST_ID));

//             expect(queryByText('focused')).toBeInTheDocument();
//         });

//         it('should pass `focused=false` when child loses focus', async () => {
//             const { getByTestId, queryByText } = renderComponent('mouse');

//             userEvent.click(getByTestId(DATA_TEST_ID));

//             expect(queryByText('focused')).toBeInTheDocument();

//             userEvent.tab();

//             expect(queryByText('focused')).not.toBeInTheDocument();
//         });

//         it('should pass `focused=false` for non-interactive ref element', async () => {
//             const NonFocusableComponent = () => {
//                 const ref = React.useRef<HTMLDivElement>(null);
//                 const [focused] = useFocus(ref, 'mouse');

//                 return (
//                     <div ref={ ref } data-test-id={ DATA_TEST_ID }>
//                         { focused ? 'focused' : '' }
//                     </div>
//                 );
//             };

//             const { getByTestId, queryByText } = render(<NonFocusableComponent />);

//             userEvent.click(getByTestId(DATA_TEST_ID));

//             expect(queryByText('focused')).not.toBeInTheDocument();
//         });

//         it('should pass `focused=false` when child gets focus by keyboard', async () => {
//             const { queryByText } = renderComponent('mouse');

//             userEvent.tab();

//             expect(queryByText('focused')).not.toBeInTheDocument();
//         });
//     });
// });

describe('useFocus', () => {
    it('shuld work', () => {});
});
