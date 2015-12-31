import {Component} from 'angular2/core';
import {NgIf, FORM_DIRECTIVES} from "angular2/common";

import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";
import {ItemPreview} from "./item-preview.component";

@Component({
    selector:'cart',
    directives:[NgIf, ItemPreview, FORM_DIRECTIVES],
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
                    <button (onClick)="setDiscount(input.value)">Apply discount</button>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    Total pay: {{cartService.getTotalPrice()}}
                </div>
            </div>
        </div>
    `,
})

export class Cart {
    private cartItems: Item[] = [];
    constructor(private cartService:CartService){
        this.cartItems = cartService.getCart();
    }
    setDiscount(name){
        this.cartService.applyDiscount(name);
    }
}