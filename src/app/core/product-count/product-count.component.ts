import {ChangeDetectorRef, Component, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Model} from "../../model/repository.model";

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;

  constructor(private model: Model,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.differ = this.keyValueDiffers
      .find(this.model.getProducts())
      .create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts().length;
  }

}
