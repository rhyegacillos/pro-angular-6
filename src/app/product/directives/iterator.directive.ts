import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appForOf]',
})
export class PaIteratorDirective implements OnInit {
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<object>) {}

  @Input('appForOf')
  datasource: any;

  ngOnInit(): void {
    this.container.clear();
    for(let i = 0; i < this.datasource.length; i++) {
      this.container.createEmbeddedView(this.template, new PaIteratorContext(this.datasource[i], i, this.datasource.length));
    }
  }
}

class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;

  constructor(public $implicit: any, public index: number, total: number) {
    this.odd = index % 2 === 1;
    this.even = !this.odd;
    this.first = index === 0;
    this.last = index === total - 1;
  }
}
