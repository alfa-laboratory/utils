/**
 * Приводит секунды к формату `hh:mm:ss` и возвращает объект с ними.
 */
export function secondsToTime(seconds: number) {
    const h = Math.floor(seconds / 60 / 60);
    const m = Math.floor(seconds / 60) % 60;
    const s = seconds - h * 3600 - m * 60;

    return {
        hours: `${numPad('00', h)}`,
        minutes: `${numPad('00', m)}`,
        seconds: `${numPad('00', s)}`,
    };
}

function numPad(pad: string, num: number) {
    return typeof num === 'undefined' ? pad : (pad + num).slice(-pad.length);
}
