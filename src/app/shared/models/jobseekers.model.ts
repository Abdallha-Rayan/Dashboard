import { Address } from "./address.model";
import { Contact } from "./contact.model";
import { Education } from "./education.model";
import { Experince } from "./experince.model";
import { Language } from "./languages.model";
import { Skill } from "./skills.model";
import { User } from "./users.model";

export interface JobSeekers{
  user : User ,
  contact : Contact ,
  address : Address ,
  educations : Education[] ,
  experinces : Experince[] ,
  skills : Skill[] ,
  languges : Language[] ,
}
