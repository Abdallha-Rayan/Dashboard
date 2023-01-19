import { Injectable } from '@angular/core';
import { Language } from '../shared/models/languages.model';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  languages : Language[] = [
    {id : 1 , level : 'Secound' , native : true} ,
    {id : 2 , level : 'Third' , native : false} ,
    {id : 3 , level : 'First' , native : false} ,
  ] ;
  addLanguage(lang : any) {
    lang = {
      id : lang.id,
      level : lang.level ,
      native : lang.native
    }
    this.languages.push(lang) ;
  }
  editLanguage(body : any, id : any){
    this.languages[id].id = body.id ;
    this.languages[id].level = body.level ;
    this.languages[id].native = body.native ;
  }

  constructor() { }
}
