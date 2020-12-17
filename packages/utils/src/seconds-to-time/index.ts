/**
 * Приводит секунды к формату `hh:mm:ss` и возвращает объект с этими единицами измерения.
 */
export function secondsToTime(seconds: number) {
    const h = Math.floor(seconds / 60 / 60);
    const m = Math.floor(seconds / 60) % 60;
    const s = seconds - h * 3600 - m * 60;

    return {
        hours: `${h}`.padStart(2, '0'),
        minutes: `${m}`.padStart(2, '0'),
        seconds: `${s}`.padStart(2, '0'),
    };
}
