export interface Experince {
  id: number;
  position : string ;
  company: string;
  address : {
    country : string;
    city : string;
  }
  date : {
    startDate : string ;
    endDate : string ;
  }
  presentStatus  : string;
  salary : number;
}
