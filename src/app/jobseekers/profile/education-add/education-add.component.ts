import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EducationsService } from 'src/app/services/educations.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit {
  id : any ;
  educationsData : any ;
  index : any ;


  constructor(private educationsService: EducationsService) { }
  educationsForm = new FormGroup({
    id : new FormControl('' , [Validators.required]) ,
    majors : new FormControl('' , [Validators.required]) ,
    address : this.initializeAddressForm() ,
    universty : new FormControl('' , [Validators.required]) ,
    date : this.initializeDateForm() ,
    presentStatus : new FormControl('' , [Validators.required])
  })
  initializeAddressForm() : FormGroup {
    return new FormGroup({
      country : new FormControl('' , [Validators.required]) ,
      city : new FormControl('' , [Validators.required]) ,
    })
  }
  initializeDateForm() : FormGroup {
    return new FormGroup({
      startDate : new FormControl('' , [Validators.required]) ,
      endDate : new FormControl('' , [Validators.required]) ,
    })
  }
  addEducation() : void {
    this.educationsService.addEducation(this.educationsForm.value , this.index) ;
  }
  ngOnInit(): void {
    this.educationsService.editData$.subscribe((res : any) => {this.educationsForm.patchValue(res)
      this.index = this.educationsService.educations.indexOf(res);
    })
  }
  onEdit() {
    this.educationsService.updateExperiences(this.educationsForm.value, this.index) ;
  }


}
