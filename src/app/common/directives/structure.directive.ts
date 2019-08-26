import {Directive, Input, OnChanges, SimpleChange, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPaIf]'
})
export class PaStructureDirective implements OnChanges {
  constructor(private container: ViewContainerRef,
              private template: TemplateRef<Object>) {}

  @Input('appPaIf')
  expressionResult: boolean;

  ngOnChanges(changes: {[property: string]: SimpleChange}): void {
    const change = changes.expressionResult;
    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
    } else if (change.currentValue) {
      this.container.createEmbeddedView(this.template);
    }

  }
}
