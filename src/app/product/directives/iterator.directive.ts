import {
  ChangeDetectorRef,
  DefaultIterableDiffer,
  Directive,
  DoCheck,
  Input,
  IterableDiffers,
  OnInit,
  TemplateRef,
  ViewContainerRef, ViewRef
} from '@angular/core';

@Directive({
  selector: '[appForOf]',
})
export class PaIteratorDirective implements OnInit, DoCheck {
  private differ: DefaultIterableDiffer<any>;
  private views: Map<any, PaIteratorContext> = new Map<any, PaIteratorContext>();

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<object>,
              private differs: IterableDiffers,
              private changeDetector: ChangeDetectorRef) {}

  @Input('appForOf')
  datasource: any;

  ngOnInit(): void {
    this.differ = this.differs.find(this.datasource).create() as DefaultIterableDiffer<any>;
  }

  ngDoCheck(): void {
    const changes = this.differ.diff(this.datasource);
    if (changes != null) {
      changes.forEachAddedItem(addition => {
        const context = new PaIteratorContext(addition.item, addition.currentIndex, changes.length);
        context.view = this.container.createEmbeddedView(this.template, context);
        this.views.set(addition.trackById, context);
      });
      let removals = false;
      changes.forEachRemovedItem(removal => {
        removals = true;
        const context = this.views.get(removal.trackById);
        if (context != null) {
          this.container.remove(this.container.indexOf(context.view));
          this.views.delete(removal.trackById);
        }
      });
      if (removals) {
        let index = 0;
        this.views.forEach(context => {
          context.setData(index++, this.views.size);
        });
      }
    }
  }
}

class PaIteratorContext {
  odd: boolean;
  even: boolean;
  first: boolean;
  last: boolean;
  view: ViewRef;

  constructor(public $implicit: any, public position: number, total: number) {
    this.setData(position, total);
  }

  setData(index: number, total: number) {
    this.odd = index % 2 === 1;
    this.even = !this.odd;
    this.first = index === 0;
    this.last = index === total - 1;
  }
}
