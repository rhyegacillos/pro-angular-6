import {AfterContentInit, ContentChild, ContentChildren, Directive, Input, OnChanges, QueryList, SimpleChange} from '@angular/core';
import {PaCellColor} from './cellColor.directive';

@Directive({
  selector: 'table',
})
export class PaCellColorSwitcher implements OnChanges, AfterContentInit {

  @Input('paCellDarkColor')
  modelProperty: boolean;

  @ContentChildren(PaCellColor)
  contentChildren: QueryList<PaCellColor>;

  ngOnChanges(changes: {[property: string]: SimpleChange}): void {
    this.updateContentChildren(changes.modelProperty.currentValue);
  }

  ngAfterContentInit(): void {
    this.contentChildren.changes.subscribe(() => {
      setTimeout(() => this.updateContentChildren(this.modelProperty), 0);
    });
  }

  private updateContentChildren(dark: boolean) {
    if (this.contentChildren != null && dark !== undefined) {
      this.contentChildren.forEach((child, index) => {
        child.setColor(index % 2 ? dark : !dark);
      });
    }
  }

}
