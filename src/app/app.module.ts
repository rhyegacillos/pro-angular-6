import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {ProductComponent} from './components/product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ModelModule} from './model/model.module';
import {CommonModule} from './common/common.module';
import {ComponentsModule} from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModelModule,
    CommonModule,
    ComponentsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [ProductComponent]
})
export class AppModule { }
