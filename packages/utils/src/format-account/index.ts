const ACCOUNT_SPLIT_REGEX = /^(\d{5})(\d{3})(\d)(\d{4})(\d{7})$/;
const ACCOUNT_FORMAT = '$1 $2 $3 $4 $5';

/**
 * Возвращает отформатированное значение счёта.
 * Разделяет пробелами число на группы.
 * XXXXX XXX X XXXX XXXXXXX
 *
 * @param value Номер счёта.
 */
export function formatAccount(value: string) {
    if (!value) {
        return '';
    }

    return value.replace(ACCOUNT_SPLIT_REGEX, ACCOUNT_FORMAT);
}
