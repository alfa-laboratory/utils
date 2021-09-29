/**
 * Возвращает TRUE, если проскролено до низа страницы
 */
export function hasScrolledToBottomOfPage() {
    const { documentElement } = document;
    const offset = documentElement.scrollTop + window.innerHeight;
    const height = documentElement.offsetHeight;

    return offset >= height;
}
