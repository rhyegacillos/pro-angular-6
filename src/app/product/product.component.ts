import {Component} from '@angular/core';
import {Model} from '../repository.model';
import {Product} from './product.model';
import {NgForm} from '@angular/forms';
import {ProductFormGroup} from './form.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  model: Model = new Model();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

}
