import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropDownParent } from '../models/dropdown-parent.model';
import { DropDown } from '../models/dropdown.model';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  dropDownKey : string = 'dropdown' ;
  constructor() {}

  getAll() : Observable <any> {
    let dropdowns:any = {} ;
    dropdowns['countries'] = [
      {id : 1 , name : 'Palestine'} ,
      {id : 2 , name : 'Jordan'}
    ] ;
    dropdowns['cities'] = [
      {id : 1 , name : 'Gaza' , parentId : 1}  ,
      {id : 2 , name : 'Nablus' , parentId : 1} ,
      {id : 3 , name : 'Ramallah' , parentId : 1} ,
      {id : 4 , name : 'Amman' , parentId : 2} ,
      {id : 5 , name : 'Erbeq' , parentId : 2}
    ] ;
    dropdowns['sectors'] = [
      {id : 1 , name : 'IT and Managments'} ,
      {id : 2 , name : 'Accounting'} ,
    ] ;
    dropdowns['functionalAreas'] = [
      {id : 1 , name : 'Computer Science'} ,
      {id : 2 , name : 'Marketing'} ,
      {id : 3 , name : 'Health Care'}
    ] ;
    dropdowns['languges'] = [
      {id : 1 , name : 'Arabic'} ,
      {id : 2 , name : 'English'} ,
    ] ;
    dropdowns['benefits'] = [
      {id : 1 , name : 'Work From Home'} ,
      {id : 2 , name : 'Health Insurance'} ,
      {id : 3 , name : 'Flexible Hours'}
    ]
    return of(dropdowns)
  }



  // getAllinLocalStoreg(){
  //   this.getAll().subscribe((res)=>{
  //     console.log("res",res);
  //     localStorage.setItem('DrwopDawn',JSON.stringify(res))
  //     let ss = localStorage.getItem('DrwopDawn');
  //     console.log("ll",JSON.parse(ss || ""))
  //   })
  // }

  setInLocalStorage(dropdown : any) : void {
    localStorage.setItem(this.dropDownKey ,JSON.stringify(dropdown)) ;
  }
  setInAllData(){
    this.getAll().subscribe((res)=> {
      this.setInLocalStorage(res)
    //   this.getDropDown().countries
    //  console.log( this.getDropDown().countries)
    })
  }
  getDropDown() : any {
    return JSON.parse(localStorage.getItem(this.dropDownKey) || "") ;
  }

  getCountries() : DropDown[] {
    return this.getDropDown() && this.getDropDown().countries ;
  }
  getSectors() : DropDown[] {
    return this.getDropDown() && this.getDropDown().sectors ;
  }
  getFunctionalAreas() : DropDown[]{
    return this.getDropDown() && this.getDropDown().functionalAreas ;
  }
  getBenf() : DropDown[]{
    return this.getDropDown() && this.getDropDown().benefits ;
  }
  getLangueges() : DropDown[]{
    return this.getDropDown() && this.getDropDown().languages ;
  }
  getCities(id : number , all : boolean = false) : DropDownParent[]{
    if (all) {
      return this.getDropDown()?.cities ;
    }
    if (this.getDropDown()?.cities){
      return this.getDropDown().cities.filter((val:any) => {
        return val.parentId == id
      });
    }
    return null! ;
  }




}
