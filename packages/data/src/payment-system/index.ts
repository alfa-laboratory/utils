import { MasterCard, NationalPaymentCardSystem, Visa } from './data';

export type PaymentSystem = NationalPaymentCardSystem | MasterCard | Visa;
