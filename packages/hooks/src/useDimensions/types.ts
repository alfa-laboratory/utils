export type DimensionObject = DOMRectReadOnly;

export type UseDimensionsHook = [
    (node: HTMLElement) => void,
    DimensionObject | undefined,
    HTMLElement | undefined
];

export interface UseDimensionsArgs {
    liveMeasure?: boolean;
}
