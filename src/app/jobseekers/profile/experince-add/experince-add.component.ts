import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EducationsService } from 'src/app/services/educations.service';
import { ExperincesService } from 'src/app/services/experinces.service';

@Component({
  selector: 'app-experince-add',
  templateUrl: './experince-add.component.html',
  styleUrls: ['./experince-add.component.scss']
})
export class ExperinceAddComponent implements OnInit {
  id : any ;
  experiencesData : any ;
  index : any ;

  constructor(private experincesService : ExperincesService , private router : ActivatedRoute) { }

  experincesForm = new FormGroup({
    id : new FormControl('' , [Validators.required]),
    position : new FormControl('' , [Validators.required]) ,
    company : new FormControl('' , [Validators.required]) ,
    address : this.initializeAddressForm() ,
    date : this.initializeDateForm() ,
    presentStatus : new FormControl('' , [Validators.required]) ,
    salary : new FormControl('' , [Validators.required])
  })
  initializeAddressForm() : FormGroup {
    return new FormGroup({
      country : new FormControl('' , [Validators.required]) ,
      city : new FormControl('' , [Validators.required])
    })
  }
  initializeDateForm() : FormGroup{
    return new FormGroup({
      startDate : new FormControl('' , [Validators.required]) ,
      endDate : new FormControl('' , [Validators.required])
    })
  }
  addExperinces() : void {
    this.experincesService.addExperinces(this.experincesForm.value , this.index);
  }
  ngOnInit(): void {
    var id = Number(this.router.snapshot.paramMap.get('id')) ;
    // this.experiencesData = this.experincesService.getExperienceById(id) ;
    // this.index = this.experincesService.experinces.indexOf(this.experiencesData) ;
    // this.experincesForm.get("id")?.setValue(this.experiencesData.id) ;
    // this.experincesForm.get("position")?.setValue(this.experiencesData.position) ;
    // this.experincesForm.get("company")?.setValue(this.experiencesData.company) ;
    // this.experincesForm.get("address")?.setValue(this.experiencesData.address.country) ;
    // this.experincesForm.get("address")?.setValue(this.experiencesData.address.city) ;
    // this.experincesForm.get("date")?.setValue(this.experiencesData.date.startDate) ;
    // this.experincesForm.get("date")?.setValue(this.experiencesData.date.endDate) ;
    // this.experincesForm.get("presentStatus")?.setValue(this.experiencesData.presentStatus) ;
    // this.experincesForm.get("salary")?.setValue(this.experiencesData.salary) ;
    this.experincesService.editData$.subscribe((res : any) => {this.experincesForm.patchValue(res)
      this.index = this.experincesService.experinces.indexOf(res);
    })
    }
  onEdit() {
    this.experincesService.updateExperiences(this.experincesForm.value, this.index) ;
  }


}
