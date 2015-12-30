import {Injectable} from "angular2/core";
import {discounts} from "../Mock/discounts.mock.json";
import {paymentMethods} from "../Mock/payment-methods.mock.json";

export interface ICheckoutType {
    name:string;
    pay(totalPrice:number):void;
}
export interface IDiscount {
    code:string;
    amount:number;//percentage
}
export interface ICheckout {
    checkOut(totalPrice:number):void;
}

export class DefaultCheckout implements ICheckout{
    constructor(private checkOutType:ICheckoutType){
    }
    checkOut(totalPrice:number){
        this.checkOutType.pay(totalPrice);
    }
}

