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
    let id = +activeRoute.snapshot.params['id'];

    if (id != null) {
      let name = activeRoute.snapshot.params["name"];
      let category = activeRoute.snapshot.params["category"];
      let price = activeRoute.snapshot.params["price"];

      if (name != null && category != null && price != null) {
        this.product.id = id;
        this.product.name = name;
        this.product.category = category;
        this.product.price = Number.parseFloat(price);
      } else {
        Object.assign(this.product, model.getProduct(id) || new Product());
      }
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
