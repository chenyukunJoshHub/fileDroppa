import {Injectable} from 'angular2/core';
import {Item} from '../Models/item.model';

import {CatalogMock} from '../Mock/catalog.mock.json'

@Injectable()
export class CatalogService {
    private catalog:Item[];
    constructor(){
        this.catalog = CatalogMock;
    }
    getCatalog(){
        return Promise.resolve(this.catalog);
    }
    setCatalog(catalog:Item[]){
        this.catalog = catalog;
    }
}