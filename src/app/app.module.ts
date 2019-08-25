import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaAttrDirective} from './product/directives/attr.directive';
import {PaModel} from './product/directives/twoway.directive';
import {PaStructureDirective} from './product/directives/structure.directive';
import {PaIteratorDirective} from './product/directives/iterator.directive';
import {PaCellColor} from './product/directives/cellColor.directive';
import {PaCellColorSwitcher} from './product/directives/cellColorSwitcher.directive';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
