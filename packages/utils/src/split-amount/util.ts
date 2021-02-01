/**
 * Дробит мажорную часть суммы на части по указанному символу.
 *
 * @param amount Сумма для разбивки на части
 * @param partSize Размер частей суммы
 * @param splitter Символ, разбивающий части суммы
 * @param splitFrom Длина суммы, начиная с которой необходимо осуществлять разбивку. По-умолчанию длина
 * равняется пяти по требованию гайдлайнов: https://design.alfabank.ru/patterns/amount. Пример: 2900 - не разбивается,
 * 29 000 - разбивается.
 */
export const splitAmount = (
    amount: string,
    partSize = 3,
    splitter: string,
    splitFrom = 5,
): string => {
    const splittingRegExp = `\\B(?=(\\d{${partSize}})+(?!\\d))`;

    // Если длина суммы меньше требуемой, не форматируем сумму
    if (amount.length < splitFrom) {
        return amount;
    }

    return amount.replace(new RegExp(splittingRegExp, 'g'), splitter);
};
