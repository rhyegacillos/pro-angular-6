import {NgModule} from '@angular/core';
import {ModelModule} from '../model/model.module';
import {PaAttrDirective} from './directives/attr.directive';
import {PaModel} from './directives/twoway.directive';
import {PaStructureDirective} from './directives/structure.directive';
import {PaIteratorDirective} from './directives/iterator.directive';
import {PaCellColor} from './directives/cellColor.directive';
import {PaCellColorSwitcher} from './directives/cellColorSwitcher.directive';
import {AddTaxPipe} from './pipes/add-tax.pipe';
import {CategoryFilterPipe} from './pipes/category-filter.pipe';
import {DiscountPipe} from './pipes/discount.pipe';
import {DiscountAmountDirective} from './directives/discount-amount.directive';

@NgModule({
  imports: [ModelModule],
  declarations: [
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    AddTaxPipe,
    CategoryFilterPipe,
    DiscountPipe,
    DiscountAmountDirective,
  ],
  exports: [
    PaAttrDirective,
    PaModel,
    PaStructureDirective,
    PaIteratorDirective,
    PaCellColor,
    PaCellColorSwitcher,
    AddTaxPipe,
    CategoryFilterPipe,
    DiscountPipe,
    DiscountAmountDirective,
  ]
})
export class CommonModule {}
