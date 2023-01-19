import { Component, OnInit } from '@angular/core';
import { AddressService } from 'src/app/services/address.service';
import { ContactService } from 'src/app/services/contact.service';
import { EducationsService } from 'src/app/services/educations.service';
import { ExperincesService } from 'src/app/services/experinces.service';
import { LanguageService } from 'src/app/services/language.service';
import { SkillsService } from 'src/app/services/skills.service';
import { UsersService } from 'src/app/services/users.service';
import { Address } from 'src/app/shared/models/address.model';
import { Contact } from 'src/app/shared/models/contact.model';
import { Education } from 'src/app/shared/models/education.model';
import { Experince } from 'src/app/shared/models/experince.model';
import { JobSeekers } from 'src/app/shared/models/jobseekers.model';
import { Language } from 'src/app/shared/models/languages.model';
import { Skill } from 'src/app/shared/models/skills.model';
import { User } from 'src/app/shared/models/users.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userData : User[] = this.usersService.users ;
  skillData : Skill[] = this.skillService.skills ;
  languageData : Language[] = this.languageService.languages;
  contactData : Contact[] = this.contactService.contacts
  experienceData : Experince[] = this.experincesService.experinces ;
  educationData : Education[] = this.educationsService.educations ;
  addressData : Address[] = this.addressService.address ;
  // jobseekers : JobSeekers = {
  //   user : this.userData ,
  //   contact : this.contactData ,
  //   address : this.addressData
  // }
  constructor(private educationsService : EducationsService ,
              private skillService : SkillsService ,
              private languageService : LanguageService ,
              private experincesService : ExperincesService ,
              private contactService : ContactService ,
              private usersService : UsersService ,
              private addressService : AddressService
    ) { }

  ngOnInit(): void {
  }

}
