import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Catalog} from "./catalog.component";
import {Details} from "./details.component";


@Component({
    selector: 'my-app', 
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]

})

@RouteConfig([
  { path:'/', name: 'Catalog', component: Catalog },
  { path:'/Item/:id', name: 'Details', component: Details }
])

export class AppComponent {
    
}
