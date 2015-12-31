import {Component, Input} from 'angular2/core';
import {Router} from 'angular2/router';

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";
import {CartService} from "./Services/cart.service";

@Component({
    selector: 'item-preview',
    styles:[`
        .row img{
            width:120px;
            height:120px;
        }
        .row b{
            cursor:pointer;
        }
    `],
    template: `
        <div class="row">
            <div class="col-md-4"><img src={{item.image_src}}/></div>
            <div class="col-md-4"><b (click)="ViewDetails()">{{item.name}} by {{item.manufacturer}}</b><br/>
                {{item.description}}
            </div>
            <div class="col-md-4">
                {{item.price}}$ <br/>
                <button (click)="addToCart()">Add To Cart</button>
            </div>
        </div>
    `
})

export class ItemPreview {
    @Input() item:Item;
    constructor(private router: Router, private cartService:CartService){

    }
    ViewDetails(){
        this.router.navigate( ['Details', { id: this.item.id }] )
    }
    addToCart(){
        this.cartService.addItem(this.item);
        console.log(this.cartService.getTotalPrice())
    }
}