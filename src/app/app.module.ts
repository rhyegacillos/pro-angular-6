import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {ProductComponent} from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PaAttrDirective} from './product/directives/attr.directive';
import {PaModel} from './product/directives/twoway.directive';
import {PaStructureDirective} from './product/directives/structure.directive';
import {PaIteratorDirective} from './product/directives/iterator.directive';
import {PaCellColor} from './product/directives/cellColor.directive';
import {PaCellColorSwitcher} from './product/directives/cellColorSwitcher.directive';
import { ProductTableComponent } from './product/product-table/product-table.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ToggleViewComponent } from './product/toggle-view/toggle-view.component';
import { AddTaxPipe } from './product/pipes/add-tax.pipe';
import { CategoryFilterPipe } from './product/pipes/category-filter.pipe';

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
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    AddTaxPipe,
    CategoryFilterPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
