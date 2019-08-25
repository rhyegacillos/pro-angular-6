import {ContentChild, Directive, Input, OnChanges, SimpleChange} from '@angular/core';
import {PaCellColor} from './cellColor.directive';

@Directive({
  selector: 'table',
})
export class PaCellColorSwitcher implements OnChanges {

  @Input('paCellDarkColor')
  modelProperty: boolean;

  @ContentChild(PaCellColor, {static: false})
  contentChild: PaCellColor;

  ngOnChanges(changes: {[property: string]: SimpleChange}): void {
    if (this.contentChild != null) {
      this.contentChild.setColor(changes.modelProperty.currentValue);
    }
  }

}
