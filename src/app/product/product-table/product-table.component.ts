import {Component, Input, OnInit} from '@angular/core';
import {Model} from '../../repository.model';
import {Product} from '../product.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  @Input('model')
  dataModel: Model;

  showTable = true;

  constructor() { }

  ngOnInit() {
  }

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
