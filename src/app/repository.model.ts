import {SimpleDatasource} from './datasource.model';
import {Product} from './product/product.model';
import {Injectable} from '@angular/core';

@Injectable()
export class Model {
  // private dataSource: SimpleDatasource;
  private products: Product[];
  private locator = (p: Product, id: number) => p.id === id;

  constructor(private dataSource: SimpleDatasource) {
    // this.dataSource = new SimpleDatasource();
    this.products = new Array<Product>();
    this.dataSource.getData().forEach(p => this.products.push(p));
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id: number): Product {
    return this.products.find(p => this.locator(p, id));
  }

  saveProduct(product: Product) {
    if (product.id === 0 || product.id === null || product.id === undefined) {
      product.id = this.generateID();
      this.products.push(product);
    } else {
      const index = this.products.findIndex(p => this.locator(p, product.id));
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(id: number) {
    const index = this.products.findIndex(p => this.locator(p, id));
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  swapProduct() {
    const p = this.products.shift();
    this.products.push(new Product(p.id, p.name, p.category, p.price));
  }

  private generateID(): number {
    let candidate = 100;
    while (this.getProduct(candidate) != null) {
      candidate++;
    }
    return candidate;
  }
}
