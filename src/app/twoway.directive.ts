import {Directive, EventEmitter, HostBinding, HostListener, Input, OnChanges, Output, SimpleChange} from '@angular/core';

@Directive({
  selector: 'input[paModel]',
  exportAs: 'paModel'
})

export class PaModel implements OnChanges {
  direction = 'None';

  @Input('paModel')
  modelProperty: string;

  @HostBinding('value')
  fieldValue = '';

  ngOnChanges(changes: {[property: string]: SimpleChange}) {
    const change = changes.modelProperty;
    if (change.currentValue !== this.fieldValue) {
      this.fieldValue = changes.modelProperty.currentValue || '';
      this.direction = 'Model';
    }
  }

  @Output('paModelChange')
  update = new EventEmitter<string>();

  @HostListener('input', ['$event.target.value'])
  updateValue(newValue: string) {
    this.fieldValue = newValue;
    this.update.emit(newValue);
    this.direction = 'Element';
  }
}
