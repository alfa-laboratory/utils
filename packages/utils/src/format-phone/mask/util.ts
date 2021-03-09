/**
 * Маскирует номер телефона.
 * Номер должен быть уже отформатирован.
 *
 * @param {String} number Отформатированный номер телефона
 * @returns {String}
 */
export function maskPhone(number: string) {
    const first = number.substr(0, 2);
    const last = number.substr(number.length - 5, number.length);

    return `${first} ··· ··· ${last}`;
}
