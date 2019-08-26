import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Model} from './repository.model';
import {SimpleDatasource} from './datasource.model';

@NgModule({
  declarations: [],
  providers: [Model, SimpleDatasource],
  imports: [
    CommonModule
  ]
})
export class ModelModule { }
