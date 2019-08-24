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
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted = false;
  showTable = true;

  getProduct(key: number): Product {
    return this.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
