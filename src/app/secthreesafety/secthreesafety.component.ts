import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormDataService } from '../data/formData.service';
import { FacilityService } from '../services/facility.service';
import { ReporterListService } from '../services/reporterlist.service';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-secthreesafety',
  templateUrl: './secthreesafety.component.html',
  styleUrls: ['./secthreesafety.component.css']
})
export class SecthreesafetyComponent implements OnInit {
 safety: FormGroup;
  title = 'Section III: Data Analysis/Findings  Summary and Follow up Action – Safety Alarm';
  secthreesafetyType: string;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService, private reporterListService: ReporterListService, private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.secthreesafetyType = this.formDataService.getSecthreesafety();
    this.safety = new FormGroup({
      criticalParameter: new FormControl(''),
      inputBy: new FormControl(''),
      startTime: new FormControl(''),
      endtime: new FormControl(''),
      // footerUrl: new FormControl(''),
      // footerColor: new FormControl(''),
      sections: new FormArray([
        this.initSect(),
      ]),
    });
  }
  // onChange(curValue)
  // {
  //   this.fieldSelection.emit({
  //     key: this.key,
  //     value: curValue
  //   })
  // }

  addSect() {
    const control = <FormArray>this.safety.get('sections');
    control.push(this.initSect());
  }

  getSect(form) {
    // console.log(form.get('sections').controls);
    return form.controls.sections.controls;
  }

  initSect() {
    return new FormGroup({
      sectionTitle: new FormControl(''),
      sectionDescription: new FormControl('')
    });
  }
 
  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setSecthreesafety(this.secthreesafetyType);
    return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/secthreemtd']);
    }
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/secthreeoth']);
    }
  }
}
