"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var shop_component_1 = require("./shop/shop.component");
var about_component_1 = require("./about/about.component");
var login_component_1 = require("./login/login.component");
var not_found_component_1 = require("./not-found/not-found.component");
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
        //redirectTo: '/about',
        //pathMatch: 'full'
    },
    { path: 'shop', component: shop_component_1.ShopComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', component: not_found_component_1.NotFoundComponent } //the order is important
];
exports.appRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map