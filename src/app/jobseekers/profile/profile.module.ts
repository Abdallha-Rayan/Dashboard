import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { InfoComponent } from './info/info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EducationsComponent } from './educations/educations.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationAddComponent } from './education-add/education-add.component';
import { ExperinceAddComponent } from './experince-add/experince-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    InfoComponent,
    EducationsComponent,
    ExperiencesComponent,
    EducationAddComponent,
    ExperinceAddComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule ,
    SharedModule,
    FormsModule ,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
