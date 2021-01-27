import { useState, useCallback, useLayoutEffect } from 'react';
import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from './types';

function getDimensionObject(node: HTMLElement): DimensionObject {
    return node.getBoundingClientRect();
}

function useDimensions({ liveMeasure = true }: UseDimensionsArgs = {}): UseDimensionsHook {
    const [dimensions, setDimensions] = useState<DimensionObject | undefined>();
    const [node, setNode] = useState<HTMLElement | undefined>();

    const ref = useCallback((_node: HTMLElement) => {
        setNode(_node);
    }, []);

    useLayoutEffect(() => {
        if (node) {
            const measure = () =>
                window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)));
            measure();

            if (liveMeasure) {
                window.addEventListener('resize', measure);
                window.addEventListener('scroll', measure);

                return () => {
                    window.removeEventListener('resize', measure);
                    window.removeEventListener('scroll', measure);
                };
            }
        }
    }, [node, liveMeasure]);

    return [ref, dimensions, node];
}

export default useDimensions;
