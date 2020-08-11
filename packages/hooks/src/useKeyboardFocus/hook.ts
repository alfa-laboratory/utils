import React from 'react';

let prevInputMethod: 'mouse' | 'keyboard';

function handleKeyDown() {
    prevInputMethod = 'keyboard';
}

function handleMouseDown() {
    prevInputMethod = 'mouse';
}

/**
 * Навешивает несколько глобальных обработчиков и отслеживает метод ввода - мышь или клавиатура.
 * Note: Повторный вызов функции не дублирует обработчики
 */
function addGlobalListeners() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleMouseDown);
}

export function useKeyboardFocus(ref: React.RefObject<HTMLElement>) {
    const [focused, setFocused] = React.useState(false);

    const handleFocus = React.useCallback(() => {
        if (prevInputMethod === 'keyboard') {
            setFocused(true);
        }
    }, []);

    const handleBlur = React.useCallback(() => {
        setFocused(false);
    }, []);

    React.useEffect(() => {
        const node = ref.current;

        if (node) {
            node.addEventListener('focusin', handleFocus);
            node.addEventListener('focusout', handleBlur);
        }

        return () => {
            if (node) {
                node.removeEventListener('focusin', handleFocus);
                node.removeEventListener('focusout', handleBlur);
            }
        };
    }, [handleBlur, handleFocus, ref]);

    React.useEffect(addGlobalListeners, []);

    return [focused];
}
