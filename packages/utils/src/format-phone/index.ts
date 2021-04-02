import { formatPhoneNumber } from './format';
import { getRawPhoneNumber } from './get-raw';
import { maskPhoneNumber } from './mask';

export const phoneNumber = {
    format: formatPhoneNumber,
    getRaw: getRawPhoneNumber,
    mask: maskPhoneNumber,
};
