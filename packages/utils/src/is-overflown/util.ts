/**
 * Возвращает `true`, если элемент переполнен
 * @param element HTML-элемент
 */
export function isOverflown(element: HTMLElement) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}
