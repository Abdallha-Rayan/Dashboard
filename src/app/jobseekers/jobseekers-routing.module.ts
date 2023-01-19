import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '' ,
    redirectTo : 'profile' ,
    pathMatch : 'full'
  } ,
  {
    path : 'profile' ,
    loadChildren : () => import ('./profile/profile.module').then(x => x.ProfileModule)
  } ,
  {
    path : 'jobs' ,
    loadChildren : () => import ('./job/job.module').then(x => x.JobModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekersRoutingModule { }
