import {ChangeDetectorRef, Component, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Model} from "../../model/repository.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  private differ: KeyValueDiffer<any, any>;
  private category: string;
  count: number = 0;

  constructor(private model: Model,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef,
              activeRoute: ActivatedRoute) {

    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
        if(params['category'] !== null) {
          this.category = params['category'];
          this.updateCount();
        }
      }))
  }

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
    console.log('cat: ', this.category);
    this.count = this.model.getProducts()
      .filter(p => this.category === undefined || p.category === this.category)
      .length;
  }

}
