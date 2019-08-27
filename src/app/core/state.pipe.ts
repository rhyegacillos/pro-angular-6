import { Pipe, PipeTransform } from '@angular/core';
import {Model} from '../model/repository.model';
import {MODES, SharedState} from './sharedState.model';

@Pipe({
  name: 'formatState'
})
export class StatePipe implements PipeTransform {

  constructor(private model: Model) {}

  transform(value: any) {
    if (value instanceof SharedState) {
      const state = value as SharedState;
      return MODES[state.mode] + (state.id !== undefined ? ` ${this.model.getProduct(state.id).name}` : '');
    } else {
      return '<No Data>';
    }
  }

}
