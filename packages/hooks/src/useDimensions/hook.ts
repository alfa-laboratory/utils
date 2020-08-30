import { useState, useCallback, useLayoutEffect } from 'react';
import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from './types';

function getDimensionObject(node: HTMLElement): DimensionObject {
    const rect: any = node.getBoundingClientRect();

    return {
        width: rect.width,
        height: rect.height,
        top: 'x' in rect ? rect.x : rect?.top,
        left: 'y' in rect ? rect.y : rect?.left,
        x: 'x' in rect ? rect.x : rect?.left,
        y: 'y' in rect ? rect.y : rect?.top,
        right: rect.right,
        bottom: rect.bottom,
    };
}

function useDimensions({ liveMeasure = true }: UseDimensionsArgs = {}): UseDimensionsHook {
    const [dimensions, setDimensions] = useState<DimensionObject>();
    const [node, setNode] = useState<any>(null);

    const ref = useCallback((_node: any) => {
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
