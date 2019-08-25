import {AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Model} from '../../repository.model';
import {Product} from '../product.model';
import {PaCellColor} from '../directives/cellColor.directive';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements AfterViewInit {

  @Input('model')
  dataModel: Model;

  showTable = true;

  @ViewChildren(PaCellColor)
  viewChildren: QueryList<PaCellColor>;

  ngAfterViewInit(): void {
    this.viewChildren.changes.subscribe(() => {
      this.updateViewChildren();
    });
    this.updateViewChildren();
  }

  getProduct(key: number): Product {
    return this.getProduct(key);
  }

  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key: number) {
    this.dataModel.deleteProduct(key);
  }

  private updateViewChildren() {
    setTimeout(() => {
      this.viewChildren.forEach((child, index) => {
        child.setColor(!!(index % 2));
      });
    }, 0);
  }

}
