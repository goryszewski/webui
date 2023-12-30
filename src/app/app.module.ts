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
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';
import { HighlightDirective } from './customDirective/highlight.directive';
import { HoverDirective } from './customDirective/hover.directive';
import { BetterhlDirective } from './customDirective/betterhl.directive';


@NgModule({
  declarations: [
    AppComponent, ContainerComponent, NavComponent, HeaderComponent, NotificationComponent, SearchComponent, ProductsComponent, ReposComponent, HomeComponent, ErrComponent, HighlightDirective, HoverDirective, BetterhlDirective
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
