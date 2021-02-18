import { formatPhoneNumber } from './format';
import { getRawPhoneNumber } from './get-raw';
import { maskPhone } from './mask';

export const phoneNumber = {
    format: formatPhoneNumber,
    getRaw: getRawPhoneNumber,
    mask: maskPhone,
};
