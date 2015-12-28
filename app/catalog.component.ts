import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgIf} from "angular2/common";

import {CatalogService} from './Services/shopping.service';
import {Item} from "./Models/Item.model";
import {ItemPreview} from "./item-preview.component";
import {FilterCatalogItems} from './Utils/Filter.pipe';

@Component({
    selector:'catalog',
    pipes:[FilterCatalogItems],
    directives:[ItemPreview, FORM_DIRECTIVES, NgIf],
    template: `
        <h2>Catalog</h2>
        <div class="container" *ngIf=catalog>
            <div class="row">
                <div class="col-md-4">
                    Search:<br/>
                    <input type="text" [(ngModel)]="search"/>
                </div>
                <div class="col-md-8">
                    <item-preview *ngFor="#item of catalog | filterItems:search" [item]="item"></item-preview>
                </div>
            </div>
        </div>
    `,
    providers:[CatalogService]
})

export class Catalog {
    public catalog:Item[] = [];
    public search:string = "";
    constructor(public catalogService:CatalogService){
        this.catalogService = catalogService;
    }
    ngOnInit() {
        this.catalogService.getCatalog().then((catalog)=>{
            this.catalog = catalog;
        });
    }
}