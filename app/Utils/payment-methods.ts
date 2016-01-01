import {ICheckoutType} from "../Services/checkout.service";
export class PayPalCheckout implements ICheckoutType{
    public name;
    constructor(){
        this.name = "PayPal";
    }
    pay(totalPrice){
        return `PayPal: pay stage 1 with amount ${totalPrice}
        PayPal: pay stage 2
        PayPal: payed`;
    }
}

export class MasterCard implements ICheckoutType{
    public name;
    constructor(){
        this.name = "MasterCard";
    }
    pay(totalPrice){
        return `MasterCard: pay stage 1 with amount ${totalPrice}
        MasterCard: pay stage 2
        MasterCard: payed`;
    }
}

export class Visa implements ICheckoutType{
    public name;
    constructor(){
        this.name = "Visa";
    }
    pay(totalPrice){
        return `Visa: pay stage 1 with amount ${totalPrice}
        Visa: pay stage 2
        Visa: payed`;
    }
}