import { Component, OnInit } from '@angular/core';
import { EducationsService } from 'src/app/services/educations.service';
import { Education } from 'src/app/shared/models/education.model';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
  educations : Education[] = [] ;
  showAddEducationForms : boolean = false ;
  constructor(private educationService: EducationsService) { }

  ngOnInit(): void {
    this.showEducation() ;
  }
  showEducation(): void {
    this.educations = this.educationService.getEducation() ;
    console.log(this.educations) ;
  }
  removeEducation(index : any): void {
    this.educationService.deleteEducation(index) ;
  }
  toggleAddForm() : void {
    this.showAddEducationForms = !this.showAddEducationForms ;
  }
  edite(item :any){
    this.showAddEducationForms = true ;
    this.educationService.editDataSub.next(item) ;
  }


}
