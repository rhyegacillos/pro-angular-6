import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addTax'
})
export class AddTaxPipe implements PipeTransform {

  defaultRate = 10;

  transform(value: any, rate?: any): any {
    const valueNumber = Number.parseFloat(value);
    const rateNumber = rate === undefined ? this.defaultRate : Number.parseFloat(rate);
    return valueNumber + (valueNumber * (rateNumber / 100));
  }

}
