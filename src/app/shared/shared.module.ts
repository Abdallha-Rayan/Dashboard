import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { MultipaleDropdownComponent } from './components/multipale-dropdown/multipale-dropdown.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';

let components = [
    AddressComponent,
    ContactComponent ,
]
@NgModule({
  declarations: [
    DropdownComponent,
    MultipaleDropdownComponent,
    ...components
  ],
  imports: [
    CommonModule ,
    NgMultiSelectDropDownModule.forRoot()
  ] ,
  exports: [DropdownComponent , MultipaleDropdownComponent , ...components] ,
})
export class SharedModule { }
