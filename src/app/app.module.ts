import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaAttrDirective} from './attr.directive';
import {PaModel} from './twoway.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PaAttrDirective,
    PaModel
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
