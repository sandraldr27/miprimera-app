import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';  //1) Importamos esta información desde @angular/common
import { NgOptimizedImage } from '@angular/common';  //  2) Herramienta de Angular para optimizar las imágenes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  // Viene de 1) Importado de la línea 3
    NgOptimizedImage  //  Viene de 2) Importado de la línea 4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
