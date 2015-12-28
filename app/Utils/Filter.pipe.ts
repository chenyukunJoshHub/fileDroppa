import {Pipe} from 'angular2/core';
import {Item} from "../Models/Item.model";

@Pipe({name: 'filterItems'})
export class FilterCatalogItems {
    transform(values:Item[], [filterBy]) : any {
        return values.filter((item:Item)=>{
            return filterBy ? item.manufacturer.toLowerCase().includes(filterBy.toLowerCase()) : true;
        });
    }
}