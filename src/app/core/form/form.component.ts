import {Component} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  product: Product = new Product();
  originalProduct = new Product();
  editing = false;

  constructor(private model: Model, activeRoute: ActivatedRoute, private router: Router) {
    activeRoute.params.subscribe(params => {
      this.editing = params["mode"] == "edit";
      let id = +params["id"];
      if (id != null) {
        Object.assign(this.product, model.getProduct(id) || new Product());
        Object.assign(this.originalProduct, this.product);
      }
    })
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.originalProduct = this.product;
      this.router.navigateByUrl('/');
    }
  }

  // resetForm() {
  //   this.product = new Product();
  // }
}
