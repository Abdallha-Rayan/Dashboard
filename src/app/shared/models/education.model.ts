export interface Education {
  id: number;
  majors : string;
  address : {
    country : string;
    city : string;
  }
  universty : string;
  date : {
    startDate : string;
    endDate : string;
  }
  presentStatus : string;
}
