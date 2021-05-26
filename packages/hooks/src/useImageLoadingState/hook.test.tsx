/**
 * @jest-environment jsdom
 */

import { renderHook } from '@testing-library/react-hooks';

import { useImageLoadingState } from '.';

describe('useImageLoadingState', () => {
    const LOAD_FAILURE_SRC = 'LOAD_FAILURE_SRC';
    const LOAD_SUCCESS_SRC = 'LOAD_SUCCESS_SRC';
    const onLoad = jest.fn();
    const onError = jest.fn();

    beforeAll(() => {
        Object.defineProperty(Image.prototype, 'srcset', {
            set: (src) => {
                if (src === LOAD_FAILURE_SRC) {
                    setTimeout(() => onError());
                } else if (src === LOAD_SUCCESS_SRC) {
                    setTimeout(() => onLoad());
                }
            },
        });
    });

    it('should immediately return "loading"', () => {
        const { result } = renderHook(() => useImageLoadingState({ src: LOAD_SUCCESS_SRC }));

        expect(result.current).toBe('loading');
    });

    it('should invoke "onerror" at image', async () => {
        const { waitFor } = renderHook(() => useImageLoadingState({ src: LOAD_FAILURE_SRC }));

        await waitFor(() => {
            expect(onError).toBeCalledTimes(1);
        });
    });

    it('should invoke "onload" at image', async () => {
        const { waitFor } = renderHook(() => useImageLoadingState({ src: LOAD_SUCCESS_SRC }));

        await waitFor(() => {
            expect(onLoad).toBeCalledTimes(1);
        });
    });
});
