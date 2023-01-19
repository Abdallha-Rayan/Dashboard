import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/DashboardComponent';
import { EmptyComponent } from './empty/empty.component';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  {
    path : '' ,
    redirectTo : 'dashboard',
    pathMatch : 'full'
  } ,

  {
    path : 'dashboard' ,
    component : DashboardComponent
  } ,
    {
      path : 'companies' ,
      loadChildren : () => import ('./companies/companies.module').then(x => x.CompaniesModule)
    } ,
    {
      path : 'dashboard' ,
      loadChildren : () => import ('./dashboard/dashboard.module').then(x => x.DashboardModule)
    } ,
    {
      path : 'folders' ,
      loadChildren : () => import ('./folders/folders.module').then(x => x.FoldersModule)
    } ,
    {
      path : 'interviews' ,
      loadChildren : () => import ('./interviews/interviews.module').then(x => x.InterviewsModule)
    } ,
    {
      path : 'jobs' ,
      loadChildren : () => import ('./jobs/jobs.module').then(x => x.JobsModule)
    } ,
    {
      path : 'jobseekers',
      loadChildren : () => import ('./jobseekers/jobseekers.module').then(x => x.JobseekersModule)
    } ,
    {
      path : 'searchs' ,
      loadChildren : () => import ('./searchs/searchs.module').then(x => x.SearchsModule)
    } ,
    {
      path : 'settings' ,
      loadChildren : () => import ('./settings/settings.module').then(x => x.SettingsModule)
    } ,
    {
      path : 'users' ,
      loadChildren : () => import ('./users/users.module').then(x => x.UsersModule)
    } ,
    ////////////////////////////////////////////////////

    {
      path : 'forms' ,
      component : FormsComponent
    } ,
    {
      path : 'tables' ,
      component : TablesComponent
    } ,
    {
      path : 'charts' ,
      component : ChartsComponent
    } ,
    {
      path : 'empty' ,
      component : EmptyComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
