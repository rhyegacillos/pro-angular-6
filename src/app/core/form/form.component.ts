import {Component, Inject} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  product: Product = new Product();
  editing = false;
  // lastId: number;

  constructor(private model: Model, @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
    stateEvents
      .pipe(map(state => state.mode === MODES.EDIT ? state.id : -1))
      .pipe(distinctUntilChanged())
      .pipe(filter(id => id !== 3))
      .subscribe((id) => {
        this.editing = id !== -1;
        this.product = new Product();
        if (id !== -1) {
          Object.assign(this.product, this.model.getProduct(id));
      }
    });
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
