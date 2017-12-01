import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
	{ 
		path: '',
		component: HomeComponent
		//redirectTo: '/about',
		//pathMatch: 'full'
	},
	{ path: 'shop', component: ShopComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'login', component: LoginComponent },
	{ path: '**', component: NotFoundComponent } //the order is important
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);