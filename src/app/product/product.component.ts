import {Component} from '@angular/core';
import {Model} from '../repository.model';
import {Product} from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  // model: Model = new Model();
  // constructor(private model: Model){}
  //
  // addProduct(p: Product) {
  //   this.model.saveProduct(p);
  // }

}
