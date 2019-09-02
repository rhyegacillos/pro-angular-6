import {Component, Inject} from '@angular/core';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {Model} from '../../model/repository.model';
import {Product} from '../../model/product.model';
import {Observer} from 'rxjs';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  category: string = null;

  constructor(private model: Model, activeRoute: ActivatedRoute) {
    activeRoute.params.subscribe(params => {
      this.category = params['category'] || null;
    })
  }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }


  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts()
      .filter(p => this.category == null || p.category == this.category);
  }

  get categories(): string[] {
    return this.model.getProducts()
      .map(p => p.category)
      .filter((category, index, array) => array.indexOf(category) == index);
  }

}
