import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Education } from '../shared/models/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {
  educations : Education[] = [
    {id : 10 , majors : 'Engineering' , address : {country : 'Palestine' , city : 'Gaza'} , universty : 'UCAS' , date : {startDate : '2020' , endDate : '2025'} , presentStatus : 'Student'} ,
    {id : 11 , majors : 'Computer Science' , address : {country : 'Palestine' , city : 'Gaza'} , universty : 'PALESTINE' , date : {startDate : '2018' , endDate : '2022'} , presentStatus : 'Grauded'} ,
    {id : 12 , majors : 'Pharmacy' , address : {country : 'Palestine' , city : 'Gaza'} , universty : 'AUG' , date : {startDate : '2020' , endDate : '2025'} , presentStatus : 'Student'} ,
    {id : 13 , majors : 'Medical' , address : {country : 'Palestine' , city : 'Gaza' }, universty : 'IUG' , date :{startDate : '2020' , endDate : '2027'} , presentStatus : 'Student'}
  ] ;
  editDataSub = new BehaviorSubject(false);
  editData$ : Observable<any> = this.editDataSub.asObservable();
  getEducation() {
    return this.educations ;
  }
  addEducation(edu : any , index? : any){
    edu = {
      id : edu.id ,
      majors : edu.majors ,
      address : edu.address ,
      country : edu.country ,
      city : edu.city ,
      universty : edu.universty ,
      date : edu.date ,
      startDate : edu.startDate ,
      endDate : edu.endDate ,
      presentStatus : edu.presentStatus
    }
    if (index) {
      this.educations[index] = edu ;
    }
    else {
      this.educations.push(edu) ;
    }
  }
  updateExperiences(body : any , id : any) {
    this.educations[id].id = body.id ;
    this.educations[id].majors = body.majors ;
    this.educations[id].address = body.address ;
    this.educations[id].address.country = body.country ;
    this.educations[id].address.city = body.city ;
    this.educations[id].universty = body.universty ;
    this.educations[id].date = body.date ;
    this.educations[id].date.startDate = body.startDate ;
    this.educations[id].date.endDate = body.endDate ;
    this.educations[id].presentStatus = body.presentStatus ;
  }
  deleteEducation(id : any) {
    this.educations.splice(id , 1) ;
  }
  constructor() { }
}
