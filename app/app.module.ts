import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRouting } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	appRouting
  ],
  declarations: [
  	AppComponent,
  	HomeComponent,
  	NotFoundComponent,
  	AboutComponent,
  	ShopComponent,
  	LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
