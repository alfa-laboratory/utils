import { conformToMask } from 'text-mask-core/dist/textMaskCore';

/**
 * Удаляет форматирование номера телефона
 * @param phone Отформатированный номер телефона
 * @returns Номер телефона в формате 71112223344
 */
export const getRawPhoneNumber = (phone: string): string => phone.replace(/\D+/g, '');

const mask = [
    '+',
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
];

/**
 * Форматирует номер телефона
 * @param phone Номер телефона в любом формате
 * @returns Номер телефона в формате +7 111 222-33-44
 */
export const formatPhoneNumber = (phone: string): string => {
    const rawPhone = getRawPhoneNumber(phone);
    const formattedPhoneByMask = conformToMask(rawPhone, mask, { guide: false });
    return formattedPhoneByMask.conformedValue;
}
