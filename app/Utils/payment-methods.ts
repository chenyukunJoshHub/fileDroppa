import {ICheckoutType} from "../Services/checkout.service";
export class PayPalCheckout implements ICheckoutType{
    public name;
    constructor(){
        this.name = "PayPal";
    }
    pay(totalPrice){
        console.log(`PayPal: pay stage 1 with amount ${totalPrice}`);
        console.log("PayPal: pay stage 2");
        console.log("PayPal: payed");
    }
}

export class MasterCard implements ICheckoutType{
    public name;
    constructor(){
        this.name = "MasterCard";
    }
    pay(totalPrice){
        console.log(`MasterCard: pay stage 1 with amount ${totalPrice}`);
        console.log("MasterCard: pay stage 2");
        console.log("MasterCard: payed");
    }
}

export class Visa implements ICheckoutType{
    public name;
    constructor(){
        this.name = "Visa";
    }
    pay(totalPrice){
        console.log(`Visa: pay stage 1 with amount ${totalPrice}`);
        console.log("Visa: pay stage 2");
        console.log("Visa: payed");
    }
}