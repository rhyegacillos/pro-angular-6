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
  fontSizeWithUnits = '30px';
  fontSizeWithoutUnits = '30';

  getClasses(): string {
    return this.model.getProducts().length === 5 ? 'bg-success' : 'bg-warning';
  }

  getClassesByProduct(key: number): string {
    const product = this.model.getProduct(key);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  getClassMap(key: number): object {
    const product = this.model.getProduct(key);
    return {
      'text-center bg-danger': product.name === 'kayak',
      'bg-info': product.price < 50
    };
  }

  getStyles(key: number) {
    const product = this.model.getProduct(key);
    return {
      fontSize: '30px',
      'margin.px': 100,
      color: product.price > 50 ? 'red' : 'green'
    };
  }

  constructor(ref: ApplicationRef) {
    (window as any).appRef = ref;
    (window as any).model = this.model;
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    const product = this.getProductByPosition(position);
    return 'p-2 ' + (product.price < 50 ? 'bg-info' : 'bg-warning');
  }

  ngOnInit() {
  }

}
