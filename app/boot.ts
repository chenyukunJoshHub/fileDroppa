import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ROUTER_PROVIDERS} from 'angular2/router';
import {CartService} from "./Services/cart.service";
import {CatalogService} from "./Services/shopping.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, CartService, CatalogService]).catch(err => console.error(err));