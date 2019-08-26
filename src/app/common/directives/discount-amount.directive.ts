import {
  ChangeDetectorRef,
  Directive,
  DoCheck,
  Input,
  KeyValueDiffer,
  KeyValueDiffers,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {DiscountService} from '../../components/discount/discount.service';

@Directive({
  selector: 'td[price]',
  exportAs: 'discount'
})
export class DiscountAmountDirective implements OnInit, DoCheck, OnChanges {
  private differ: KeyValueDiffer<any, any>;

  @Input('price')
  originalPrice: number;

  discountAmount: number;

  constructor(private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef,
              private discount: DiscountService) { }

  ngOnInit(): void {
    this.differ = this.keyValueDiffers.find(this.discount).create();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.originalPrice != null) {
      this.updateValue();
    }
  }

  ngDoCheck(): void {
    if (this.differ.diff(this.discount) != null) {
      this.updateValue();
    }
  }

  private updateValue() {
    this.discountAmount = this.originalPrice
      - this.discount.applyDiscount(this.originalPrice);
  }

}
