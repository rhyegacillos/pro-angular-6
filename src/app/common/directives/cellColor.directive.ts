import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: 'td[applyColor]',
})
export class PaCellColor {

  @HostBinding('class')
  bgClass = '';

  setColor(dark: boolean) {
    this.bgClass = dark ? 'bg-dark' : '';
  }

}
