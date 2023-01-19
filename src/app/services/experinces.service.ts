import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experince } from '../shared/models/experince.model';

@Injectable({
  providedIn: 'root'
})
export class ExperincesService {
  experinces : Experince[] = [
    {id : 10 , position : 'Bachlory' , company : 'GSG' , address : {country : 'Palestine' , city : 'Gaza'} , date : {startDate : '2019' , endDate : '2023'} , presentStatus : 'Employee' , salary : 750 } ,
    {id : 11 , position : 'Debloma' , company : 'GGetway' , address : {country : 'Palestine' , city : 'Gaza'} , date : {startDate : '2020' , endDate : '2024'} , presentStatus : 'Trainer' , salary : 450 } ,
    {id : 12 , position : 'Debloma' , company : 'Future' , address : {country : 'Palestine' , city : 'Gaza'} , date : {startDate : '2022' , endDate : '2027'} , presentStatus : 'Employee' , salary : 950 } ,
    {id : 13 , position : 'Bachlory' , company : 'Top Tech' , address : {country : 'Palestine' , city : 'Gaza'} , date : {startDate : '2020' , endDate : '2024'} , presentStatus : 'Employee' , salary : 700 } ,
    {id : 14 , position : 'Bachlory' , company : 'UCASTI' , address : {country : 'Palestine' , city : 'Gaza'} , date : {startDate : '2020' , endDate : '2022'} , presentStatus : 'Employee' , salary : 650 } ,
  ] ;
  editDataSub = new BehaviorSubject(false);
  editData$ : Observable<any> = this.editDataSub.asObservable();
  getExperience() {
    return this.experinces ;
  }
  getExperienceById(id: any) {
    let experinceId = this.experinces.find(i => i.id === id) ;
    return experinceId ;
  }
  addExperinces(exp : any , index? : any) {
    exp = {
      id : exp.id ,
      position : exp.position ,
      company : exp.company ,
      address : exp.address ,
      country : exp.country ,
      city : exp.city ,
      date : exp.date ,
      startDate : exp.startDate ,
      endDate : exp.endDate ,
      presentStatus : exp.presentStatus ,
      salary : exp.salary
    }
    if (index) {
      this.experinces[index] = exp ;
    }
    else {
      this.experinces.push(exp) ;
    }
  }
  deleteExperines(id : any) {
    this.experinces.splice(id , 1) ;
  }
  updateExperiences(body : any , id : any) {
    this.experinces[id].id = body.id ;
    this.experinces[id].position = body.position ;
    this.experinces[id].company = body.company ;
    this.experinces[id].address = body.address ;
    this.experinces[id].address.country = body.country ;
    this.experinces[id].address.city = body.city ;
    this.experinces[id].date.startDate = body.startDate ;
    this.experinces[id].date.endDate = body.endDate ;
    this.experinces[id].presentStatus = body.presentStatus ;
    this.experinces[id].salary = body.salary ;
  }

  constructor() { }
}
