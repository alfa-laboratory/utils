import {
    useState, useEffect, useCallback, RefObject,
} from 'react';

let prevInputMethod: 'mouse' | 'keyboard';

const handleKeyDown = () => {
    prevInputMethod = 'keyboard';
};

const handleMouseDown = () => {
    prevInputMethod = 'mouse';
};

/**
 * Навешивает несколько глобальных обработчиков и отслеживает метод ввода - мышь или клавиатура.
 * Note: Повторный вызов функции не дублирует обработчики
 */
function addGlobalListeners() {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('touchstart', handleMouseDown);
}

export function useKeyboardFocus(ref: RefObject<HTMLElement>) {
    const [focused, setFocused] = useState(false);

    const handleFocus = useCallback(() => {
        if (prevInputMethod === 'keyboard') {
            setFocused(true);
        }
    }, []);

    const handleBlur = useCallback(() => {
        setFocused(false);
    }, []);

    useEffect(() => {
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

    useEffect(addGlobalListeners, []);

    return {
        focused,
    };
}
