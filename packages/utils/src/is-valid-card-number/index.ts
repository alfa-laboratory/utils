/**
 * Возвращает true/false при проверке номера валидности карты по алгоритму Луна
 */
export const isValidCardNumber = (setValue: string): boolean => {
    let ch = 0;
    const num = setValue.replace(/\D/g, '');

    if (num === '') return false;

    for (let i = 0; i < num.length; i++) {
        let n = parseInt(num[i], 10);

        ch += 0 === i % 2 && (n *= 2) > 9 ? n - 9 : n;
    }

    return ch % 10 === 0;
};
