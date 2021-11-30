const EMAIL_PARTS_SEPARATOR = '@';
const DOMAIN_PARTS_SEPARATOR = '.';
const MAX_ACCOUNT_LENGTH = 64;
const MAX_ADDRES_LENGTH = 255;
const MAX_DOMAIN_LENGTH = 63;

const EMAIL_REGEX = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

/**
 *  Возвращает true для валидного email, иначе false
 * 
 * @param email Строка содержащая email
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false;

  const emailParts = email.split(EMAIL_PARTS_SEPARATOR);

  if (emailParts.length !== 2) return false;

  const [account, address] = emailParts;

  const accountTooLong = account.length > MAX_ACCOUNT_LENGTH;
  const addressTooLong = address.length > MAX_ADDRES_LENGTH;

  if (accountTooLong || addressTooLong) return false;

  const domainParts = address.split(DOMAIN_PARTS_SEPARATOR);
  const domainTooLong = domainParts.some((part) => part.length > MAX_DOMAIN_LENGTH);

  if (domainTooLong) return false;

  return EMAIL_REGEX.test(email);
};
