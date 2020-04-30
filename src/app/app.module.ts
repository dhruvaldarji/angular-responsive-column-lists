import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoutingModule } from './router/router.module';

import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { ItemComponent } from './item/item.component';
import { CurrentPageComponent } from './current-page/current-page.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    RoutingModule,
  ],
  declarations: [ AppComponent, WrapperComponent, ItemComponent, CurrentPageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
