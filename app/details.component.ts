import {Component, Input} from 'angular2/core';

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";

//TO BE DONE
@Component({
    selector: 'details',
    template: `
        <div class="row">
            Details
        </div>
    `
})

export class Details {
    @Input() item:Item;
}