import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import {UserComponent} from '../users/user.component';


@NgModule({
  declarations: [
    UserComponent,
    AddUserComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule ,
    SharedModule ,
    RouterModule
  ] ,
  exports: [
    AddUserComponent,
    ListComponent
  ]

})
export class UsersModule { }
