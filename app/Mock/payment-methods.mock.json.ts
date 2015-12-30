import {ICheckoutType} from "../Services/checkout.service";
import {Visa, MasterCard, PayPalCheckout} from '../Utils/payment-methods';

export var paymentMethods:ICheckoutType[] = [new Visa(), new MasterCard(), new PayPalCheckout()];