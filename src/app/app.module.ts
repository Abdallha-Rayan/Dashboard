import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { FormsComponent } from './forms/forms.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { EmptyComponent } from './empty/empty.component';
import { EducationsService } from './services/educations.service';
import { ExperincesService } from './services/experinces.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LanguageService } from './services/language.service';
import { SkillsService } from './services/skills.service';
import { ContactService } from './services/contact.service';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    TablesComponent,
    ChartsComponent,
    EmptyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    SharedModule ,
    NgMultiSelectDropDownModule ,
    LayoutModule ,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EducationsService ,
    ExperincesService ,
    LanguageService ,
    SkillsService ,
    ContactService ,
    UsersService ,
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
