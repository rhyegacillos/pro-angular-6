import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Model} from '../repository.model';
import {Product} from '../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  model: Model = new Model();

  targetName = 'Kayak';

  counter = 1;

  constructor(ref: ApplicationRef) {
    (window as any).appRef = ref;
    (window as any).model = this.model;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    console.log('getProductCount invoked');
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }

  getProductPrice(index: number): number {
    return Math.floor(this.getProduct(index).price);
  }

  ngOnInit() {}

}
