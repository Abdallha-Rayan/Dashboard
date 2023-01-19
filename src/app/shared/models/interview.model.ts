import { Time } from "@angular/common";
import { User } from "./users.model";

export interface Interview {
  id : number ,
  jobApplicationId : number,
  date : Date ,
  time : Time ,
  duration : number ,
  interviewType : string ,
  interviewDetails : string ,
  interviews : User[]
}
