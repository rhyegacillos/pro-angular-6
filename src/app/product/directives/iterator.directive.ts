import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appForOf]',
})
export class PaIteratorDirective implements OnInit{
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<object>) {}

  @Input('appForOf')
  datasource: any;

  ngOnInit(): void {
    this.container.clear();
    for(let i = 0; i < this.datasource.length; i++) {
      this.container.createEmbeddedView(this.template, new PaIteratorContext(this.datasource[i]));
    }
  }
}

class PaIteratorContext {
  constructor(public $implicit: any) {}
}
