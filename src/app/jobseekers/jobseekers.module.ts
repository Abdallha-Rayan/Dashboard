import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekersRoutingModule } from './jobseekers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    JobseekersRoutingModule ,
    SharedModule ,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class JobseekersModule {}
