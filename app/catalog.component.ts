import {Component} from 'angular2/core';

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";
import {ItemPreview} from "./item-preview.component";

@Component({
    directives:[ItemPreview],
    template: `
        <h2>Catalog</h2>
        <item-preview *ngFor="#item of catalog" [item]="item"></item-preview>
    `,
    providers:[CatalogService]
})

export class Catalog {
    public catalog:Item[];
    constructor(public catalogService:CatalogService){
        this.catalogService = catalogService;
    }
    ngOnInit() {
        this.catalogService.getCatalog().then((catalog)=>{
            this.catalog = catalog;
        });
    }
}