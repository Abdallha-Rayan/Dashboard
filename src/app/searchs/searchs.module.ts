import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchsRoutingModule } from './searchs-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SearchsRoutingModule ,
    SharedModule
  ]
})
export class SearchsModule { }
