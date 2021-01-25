/**
 * Удаляет форматирование номера телефона
 * @param phone Отформатированный номер телефона с кодом страны
 * @returns Номер телефона в формате 71112223344/88002223344
 */
export const getRawPhoneNumber = (phone: string): string => phone.replace(/\D+/g, '');
