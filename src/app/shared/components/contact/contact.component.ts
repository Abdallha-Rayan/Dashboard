import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { EducationsService } from 'src/app/services/educations.service';
import { ExperincesService } from 'src/app/services/experinces.service';
import { LanguageService } from 'src/app/services/language.service';
import { SkillsService } from 'src/app/services/skills.service';
import { Contact } from '../../models/contact.model';
import { Education } from '../../models/education.model';
import { Experince } from '../../models/experince.model';
import { Language } from '../../models/languages.model';
import { Skill } from '../../models/skills.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  skillData : Skill[] = this.skillService.skills ;
  languageData : Language[] = this.languageService.languages ;
  experinceData : Experince[] = this.experincesService.experinces ;
  EducationData : Education[] = this.educationsService.educations ;
  contactData : Contact[] = this.contactService.contacts ;
  @Input() formData : Contact = {
    id : 1 ,
    email : "MahmoudMsallam2002@gmail.com" ,
    phone : "80123" ,
    mobile : "0592184339" ,
    fax : "Palestine-Gaza"
  }
  @Output() onUpdate : EventEmitter <Contact> = new EventEmitter <Contact>() ;
  constructor(private educationsService : EducationsService ,
              private skillService : SkillsService ,
              private languageService : LanguageService ,
              private experincesService : ExperincesService ,
              private contactService : ContactService
    ) {}

  ngOnInit(): void {
  }

}
