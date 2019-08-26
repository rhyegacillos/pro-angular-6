import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '../common/common.module';
import {ProductComponent} from './product/product.component';
import {ProductTableComponent} from './product/product-table/product-table.component';
import {ProductFormComponent} from './product/product-form/product-form.component';
import {ToggleViewComponent} from './product/toggle-view/toggle-view.component';
import {DiscountDisplayComponent} from './discount/discount-display/discount-display.component';
import {DiscountEditorComponent} from './discount/discount-editor/discount-editor.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [
    ProductComponent,
    ProductTableComponent,
    ProductFormComponent,
    ToggleViewComponent,
    DiscountDisplayComponent,
    DiscountEditorComponent,
  ],
  exports: [
    ProductTableComponent, ProductFormComponent
  ]
})
export class ComponentsModule {}
