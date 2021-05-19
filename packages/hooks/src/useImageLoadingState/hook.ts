import { useEffect, useState } from 'react';

/**
 * Возвращает результат загрузки изображения
 * @param {string | undefined} src url изображения
 * @return {string} результат загрузки (loading | loaded | error)
 */
export function useImageLoadingState({ src }: { src: string | undefined }): string {
    const [loaded, setLoaded] = useState<'loading' | 'loaded' | 'error'>('loading');

    useEffect(() => {
        if (!src) {
            return undefined;
        }

        setLoaded('loading');

        let active = true;
        const image = new Image();

        image.src = src;
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded('error');
        };

        return () => {
            active = false;
        };
    }, [src]);

    return loaded;
}
