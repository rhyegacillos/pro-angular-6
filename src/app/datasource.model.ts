import {Product} from './product/product.model';

export class SimpleDatasource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(1, 'kayak', 'Watersports', 275),
      new Product(2, 'Lifejacket', 'Watersports', 48.95),
      new Product(3, 'Soccer Ball', 'Soccer', 19.50),
      new Product(4, 'Corner Flags', 'Soccer', 34.95),
      new Product(5, 'Thinking Cap', 'Chess', 16));
  }

  getData(): Product[] {
    return this.data;
  }
}
