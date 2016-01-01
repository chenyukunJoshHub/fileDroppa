import {Component} from 'angular2/core';
import {NgIf, FORM_DIRECTIVES} from "angular2/common";

import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";
import {ItemPreview} from "./item-preview.component";
import {DefaultCheckout} from "./Services/checkout.service";
import {paymentMethods} from "./Mock/payment-methods.mock.json";
import {ICheckoutType} from "./Services/checkout.service";


@Component({
    selector:'cart',
    directives:[NgIf, ItemPreview, FORM_DIRECTIVES],
    providers:[DefaultCheckout],
    template: `
        <h2>Cart</h2>
        <div *ngIf=cartItems>
            <div class="container">
                <div class="row" *ngFor="#item of cartItems">
                    <item-preview [item]="item"></item-preview>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <input type="text" #input/>
                    <button (click)="setDiscount(input.value)">Apply discount</button>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    Total pay: {{cartService.getTotalPrice()}}
                </div>
            </div>
            <div class="container">
                <div class="row" (click)="setPaymentType($event.target.value)">
                    Please select payment method:
                    <button value="PayPal">PayPal</button>
                    <button value="Visa">Visa</button>
                    <button value="MasterCard">MasterCard</button>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <button (click)="pay()">Pay</button>
                </div>
            </div>
            <div class="container" *ngIf="paymentOutput">
                <div class="row">
                    {{paymentOutput}}
                </div>
            </div>
        </div>
    `,
})

export class Cart {
    private cartItems: Item[] = [];
    private paymentOutput: string = "";
    constructor(private cartService:CartService, private defaultCheckout:DefaultCheckout){
        this.cartItems = cartService.getCart();
    }
    setPaymentType(type:string){
        this.defaultCheckout.checkOutType = paymentMethods.filter(paymentMethod=>paymentMethod.name.toLowerCase()===type.toLowerCase())[0];
    }
    setDiscount(name:string){
        this.cartService.applyDiscount(name);
    }
    pay(){
        this.paymentOutput = this.defaultCheckout.checkOut(this.cartService.getTotalPrice());
    }
}