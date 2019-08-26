import { Pipe, PipeTransform } from '@angular/core';
import {Product} from '../../model/product.model';

@Pipe({
  name: 'filter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Product[], category: string): any {
    return category === undefined  || category === 'All' ? products : products.filter(p => p.category === category);
  }

}
