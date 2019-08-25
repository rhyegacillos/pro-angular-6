import {Component, Input} from '@angular/core';
import {Model} from '../../repository.model';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  @Input('model')
  dataModel: Model;

  showTable = true;

  getProduct(key: number): Product {
    return this.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }
}
