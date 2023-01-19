import { Injectable } from '@angular/core';
import { Contact } from '../shared/models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts : Contact[] = [
    {id : 1 , email : 'm@gmail.com' , phone : '11111' , mobile : '0592184339' , fax : 'Palestine-Gaza'},
    {id : 2 , email : 'a@gmail.com' , phone : '22222' , mobile : '0591184888' , fax : 'Palestine-Nablus'},
    {id : 3 , email : 'n@gmail.com' , phone : '33333' , mobile : '0597884554' , fax : 'Palestine-Ramallah'},
    {id : 4 , email : 'b@gmail.com' , phone : '44444' , mobile : '0598293339' , fax : 'Palestine-Juraslem'},
  ] ;
  addContact(contact : any) {
    contact = {
      id : contact.id ,
      email : contact.email ,
      phone : contact.phone ,
      mobile : contact.mobile ,
      fax : contact.fax
    }
    this.contacts.push(contact);
  }
  editContact(body : any , id : any) {
    this.contacts[id].id = body.id;
    this.contacts[id].email = body.email;
    this.contacts[id].phone = body.phone;
    this.contacts[id].mobile = body.mobile;
    this.contacts[id].fax = body.fax;
  }

  constructor() { }
}
