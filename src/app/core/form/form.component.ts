import {Component} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  product: Product = new Product();
  editing = false;

  constructor(private model: Model, activeRoute: ActivatedRoute) {
   this.editing = activeRoute.snapshot.params['mode'] === 'edit';
   const id = +activeRoute.snapshot.params['id'];
   if (id != null) {
     Object.assign(this.product, model.getProduct(id) || new Product())
   }
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }
}
