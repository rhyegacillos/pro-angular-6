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
      .pipe(distinctUntilChanged((firstState, secondState) =>
        firstState.mode === secondState.mode && firstState.id === secondState.id))
      .subscribe((update) => {
        this.product = new Product();
        if (update.id !== undefined) {
          Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode === MODES.EDIT;
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
