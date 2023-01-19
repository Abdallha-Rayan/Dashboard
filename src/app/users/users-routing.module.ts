import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user.component';

const routes: Routes = [

  {
    path : 'add-user',
    component: AddUserComponent
  } ,
  {
    path : 'list' ,
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
