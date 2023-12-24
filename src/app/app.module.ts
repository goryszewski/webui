import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';

import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent, ContainerComponent, NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
