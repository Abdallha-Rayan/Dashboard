import { Injectable } from '@angular/core';
import { Skill } from '../shared/models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills : Skill[] = [
    {id : 1 , level : 'First'} ,
    {id : 2 , level : 'Second'} ,
    {id : 3 , level : 'Third'}
  ] ;
  constructor() { }

  addSkills(skill : any) {
    skill = {
      id: skill.id ,
      level: skill.level
    }
    this.skills.push(skill);
  }
  editSkills(body : any , id : any) {
    this.skills[id].id = body.id;
    this.skills[id].level = body.level
  }
}
