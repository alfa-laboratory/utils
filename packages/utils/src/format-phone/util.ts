/**
 * Удаляет форматирование номера телефона
 * @param phone Отформатированный номер телефона с кодом страны
 * @returns Номер телефона в формате 71112223344/88002223344
 */
const getRawPhoneNumber = (phone: string): string => phone.replace(/\D+/g, '');

/**
 * Форматирует номер телефона
 * @param phone Номер телефона в любом формате с кодом страны
 * @returns Номер телефона в формате +7 111 222-33-44/8 800 222-33-44
 */
const formatPhoneNumber = (phone: string): string => {
    const rawPhone = getRawPhoneNumber(phone);
    const formattedPhone = rawPhone.replace(/(\d)(\d{3})(\d{3})(\d{2})(\d{2})/, `$1 $2 $3-$4-$5`);
    return formattedPhone[0] === '7' ? '+'.concat(formattedPhone) : formattedPhone;
}

export const phoneNumber = { format: formatPhoneNumber, getRaw: getRawPhoneNumber };
