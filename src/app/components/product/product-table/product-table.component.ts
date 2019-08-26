import {Component, Input} from '@angular/core';
import {Model} from '../../../model/repository.model';
import {Product} from '../../../model/product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  // @Input('model')
  // dataModel: Model;

  showTable = true;
  categoryFilter = 'All';

  dateObject: Date = new Date(2020, 1, 20);
  dateString = '2020-02-20T00:00:00.000Z';
  dateNumber = 1582156800000;

  constructor(private dataModel: Model) {}


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
