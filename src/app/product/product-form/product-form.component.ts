import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductFormGroup} from '../form.model';
import {Product} from '../product.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ProductFormComponent implements OnInit {

  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSubmitted = false;

  @Output('paNewProduct')
  newProductEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

}
