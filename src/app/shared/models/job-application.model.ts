import { Time } from "@angular/common"

export interface JobApplication {
  details : {
    id : number ,
    jobId : number ,
    jobSeekersId : number ,
    statusId : number ,
    createdTime : Date ,
    updatedTime : Date
  } ,
  statusHostries : {
    id : number ,
    statusId : number ,
    userId : number ,
    createdTime : Date ,
  }
}
