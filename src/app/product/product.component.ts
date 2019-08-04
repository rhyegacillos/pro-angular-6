import {Component} from '@angular/core';
import {Model} from '../repository.model';
import {Product} from '../product.model';
import {NgForm} from '@angular/forms';
import {ProductFormGroup} from './form.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  selectedProduct: string;
  model: Model = new Model();
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted = false;

  getProduct(key: number): Product {
    return this.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    console.log('New Product: ' + this.jsonProduct);
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

  getSelected(product: Product): boolean {
    return product.name === this.selectedProduct;
  }
}
