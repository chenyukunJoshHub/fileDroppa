import {Injectable} from 'angular2/core';
import {Item} from '../Models/item.model';
import {DefaultCheckout, IDiscount} from "./checkout.service";
import {discounts} from "../Mock/discounts.mock.json";

@Injectable()
export class CartService {
    private cart:Item[];
    private discount:IDiscount;
    addItem(item:Item){
        this.cart.push(item);
    }
    deleteItem(item:Item){
        this.cart = this.cart.filter(cartItem=>cartItem.id!==item.id);
    }
    clearCart(){
        this.cart = [];
    }
    applyDiscount(code:string){
        this.discount = discounts.filter(discount=>discount.code==code)[0];
    }
    getTotalPrice(){
        let totalPrice = this.cart.reduce((sum, cartItem)=>{
            return sum+=cartItem.price, sum;
        },0);
        if(this.discount){
            totalPrice -= totalPrice=this.discount.amount;
        }
        return totalPrice;
    }
}