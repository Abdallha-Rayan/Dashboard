import { Component, OnInit } from '@angular/core';
import { ExperincesService } from 'src/app/services/experinces.service';
import { Experince } from 'src/app/shared/models/experince.model';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  experiences : Experince[] = [] ;
  showAddExperinceForms : boolean = false ;

  constructor(private experiencesService : ExperincesService) { }

  ngOnInit(): void {
    this.getExperiences() ;
  }
  getExperiences () : void {
    this.experiences = this.experiencesService.getExperience() ;
  }
  removeExperiences(index : any) : void {
    this.experiencesService.deleteExperines(index) ;
  }
  toggleAddForm() : void {
    this.showAddExperinceForms = !this.showAddExperinceForms ;
  }
  edite(item :any){
    this.showAddExperinceForms = true ;
    this.experiencesService.editDataSub.next(item) ;
  }

}
