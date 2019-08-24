import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChange} from '@angular/core';
import {Product} from './product.model';

@Directive({
  selector: '[appAttr]'
})
export class PaAttrDirective implements OnChanges {
  @Input('appAttr')
  @HostBinding('class')
  bgClass: string;

  @Input('pa-product')
  product: Product;

  @Output('pa-category')
  click = new EventEmitter<string>();

  @HostListener('click')
  triggerCustomEvent() {
    if (this.product != null) {
      this.click.emit(this.product.category);
    }
  }

  constructor(private element: ElementRef) {
    // this.element.nativeElement.addEventListener('click', e => {
    //   if (this.product != null) {
    //     this.click.emit(this.product.category);
    //   }
    // });
  }

  ngOnChanges(changes: {[property: string]: SimpleChange}): void {
    const change = changes.bgClass;
    const classList = this.element.nativeElement.classList;

    if (!change.isFirstChange() && classList.contains(change.previousValue)) {
      classList.remove(change.previousValue);
    }
    if (!classList.contains(change.currentValue)) {
      classList.add(change.currentValue);
    }
  }
}
