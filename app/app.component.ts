import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterLink, RouterOutlet} from 'angular2/router';
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";
import {Cart} from "./cart.component";


@Component({
    selector: 'my-app',
    directives: [RouterLink, RouterOutlet],
    template: `
        <a [routerLink]="['/Cart']">Proceed ot checkout</a>
        <router-outlet></router-outlet>
    `,
})

@RouteConfig([
  { path:'/', name: 'Catalog', component: Catalog },
  { path:'/Item/:id', name: 'Details', component: Details },
  { path:'/Cart', name: 'Cart', component: Cart }
])

export class AppComponent {
    
}
