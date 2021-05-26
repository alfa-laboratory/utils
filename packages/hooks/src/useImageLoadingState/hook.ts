import { useEffect, useState } from 'react';

import { UseImageLoadingStateArgs, UseLoadingStates } from './types';

/**
 * Возвращает результат загрузки изображения
 * @param params.src url изображения
 * @return результат загрузки (loading | loaded | error)
 */
export function useImageLoadingState({ src }: UseImageLoadingStateArgs): UseLoadingStates {
    const [loadingState, setLoadingState] = useState<UseLoadingStates>(UseLoadingStates.LOADING);

    useEffect(() => {
        let active = true;

        if (src) {
            setLoadingState(UseLoadingStates.LOADING);

            const image = new Image();

            image.onload = function() {
                if (!active) {
                    return;
                }
                setLoadingState(UseLoadingStates.LOADED);
            };

            image.onerror = () => {
                if (!active) {
                    return;
                }
                setLoadingState(UseLoadingStates.ERROR);
            };

            image.srcset = src;
        } else {
            setLoadingState(UseLoadingStates.ERROR);
        }

        return () => {
            active = false;
        };
    }, [src]);

    return loadingState;
}
