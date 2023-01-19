import { Injectable } from '@angular/core';
import { Address } from '../shared/models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  address : Address[] = [
    {country : 'Palestine' , region : 'Middle' , city : 'Gaza' , street : 'Al Naser' , buildingNumber : 1} ,
    {country : 'Palestine' , region : 'Middle' , city : 'Gaza' , street : 'Al Naser' , buildingNumber : 1} ,
    {country : 'Palestine' , region : 'Middle' , city : 'Gaza' , street : 'Al Naser' , buildingNumber : 1} ,
    {country : 'Palestine' , region : 'Middle' , city : 'Gaza' , street : 'Al Naser' , buildingNumber : 1} ,
  ]

  constructor() { }
}
