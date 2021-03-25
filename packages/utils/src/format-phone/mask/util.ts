/**
 * Маскирует номер телефона.
 * Номер должен быть уже отформатирован.
 * TODO: сделать, чтобы number можно было принимать любой (отформатированный/неотформатированный)
 *
 * @param {String} number Отформатированный номер телефона
 * @returns {String}
 */
export function maskPhoneNumber(number: string) {
    const first = number.substr(0, 2);
    const last = number.substr(number.length - 5, number.length);

    return `${first} ··· ··· ${last}`;
}
