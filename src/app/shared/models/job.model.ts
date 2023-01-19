import {Range} from './range.model'
export interface Job {
  id: number;
  title : string ;
  sectorId : number;
  functionalAreaId : number;
  countryId : number;
  yearsOfExperience : Range;
  expectedSalary : Range;
  jobTypeId  : number;
  lowEducationalLevelId : number;
  highEducationalLevelId : number;
  nationaltyId : number;
  langugeId : number;
  skillId : number[];
  description : string;
  requerments : string ;
  benefitId : number[];
  cityId : number;
}
