/**
 * Возвращает 4 последние цифры номера счёта в формате `··XXXX`
 */
export function cropAccountNumber(accountNumber: string) {
    if (!accountNumber) {
        return accountNumber;
    }

    return `\u00B7\u00B7${accountNumber.slice(-4)}`;
}
