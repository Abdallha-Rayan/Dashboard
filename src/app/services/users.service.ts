import { Injectable } from '@angular/core';
import { User } from '../shared/models/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {id : 1 , firstName : 'Mohmmad' , lastName : 'Shaban' , email : 'Mohmmad@gmail.com' , role : 'admin'} ,
    {id : 2 , firstName : 'Mahmoud' , lastName : 'Abu Msallam' , email : 'Mahmoud@gmail.com' , role : 'admin'} ,
    {id : 3 , firstName : 'Basel' , lastName : 'Jawwad' , email : 'Basel@gmail.com' , role : 'admin'} ,
    {id : 4 , firstName : 'Ali' , lastName : 'Hasan' , email : 'Ali@gmail.com' , role : 'admin'} ,
  ];
  addUser (user : any , index? : any) {
    user = {
      id : user.id ,
      firstName : user.firstName ,
      lastName : user.lastName ,
      email : user.email ,
      role : user.role
    }
    if (index) {
      this.users[index] = user ;
    }
    else {
      this.users.push(user);
    }
  }
  updateUser(body : any , id : any) {
    this.users[id].id = body.id ;
    this.users[id].firstName = body.firstName ;
    this.users[id].lastName = body.lastName ;
    this.users[id].email = body.email ;
    this.users[id].role = body.role ;
  }

  constructor() { }
}
