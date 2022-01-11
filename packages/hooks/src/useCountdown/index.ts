import {
    useEffect, useRef, useCallback, useState,
} from 'react';
import { UseCountdownArgs, UseCountdownHook } from './types';

/**
 * Хук обратного отсчёта времени.
 * Возвращает оставшееся количество секунд до определённой даты.
 *
 * @param params.endDate - Дата окончания
 * @param params.onStart - Функция, которая будет вызвана при запуске счётчика
 * @param params.onEnd - Функция, которая будет вызвана при окончании счётчика
 */
export function useCountdown({ endDate, onStart, onEnd }: UseCountdownArgs): UseCountdownHook {
    const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);
    const [seconds, setSeconds] = useState(differenceInSeconds(endDate, new Date()));

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const clear = useCallback(() => clearInterval(intervalId.current!), []);

    useEffect(() => {
        if (onStart) {
            onStart();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setSeconds((sec) => sec - 1);
        }, 1000);

        return clear;
    }, [clear]);

    useEffect(() => {
        if (seconds <= 0) {
            clear();

            if (onEnd) {
                onEnd();
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [seconds]);

    return [seconds];
}

function differenceInSeconds(dateLeft: Date, dateRight: Date) {
    const diff = (dateLeft.getTime() - dateRight.getTime()) / 1000;

    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}
