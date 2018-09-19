import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
// import { secthreemtd }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import {ReporterListService} from '../services/reporterlist.service'
import {FacilityService} from '../services/facility.service'
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-secthreemtd',
  templateUrl: './secthreemtd.component.html',
  styleUrls: ['./secthreemtd.component.css']
})
export class SecthreemtdComponent implements OnInit {
  survey: FormGroup;
  title = 'Section III: Data Analysis/Findings  Summary and Follow up Action - Missing Trending Data';
  secthreemtdType: string;
  form: any;  
  constructor(private router: Router, private formDataService: FormDataService, private reporterListService: ReporterListService, private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.secthreemtdType = this.formDataService.getSecthreemtd();
    this.survey = new FormGroup({
        criticalParameter: new FormControl(''),
        inputBy: new FormControl(''),
        startTime: new FormControl(''),
        endtime: new FormControl(''),
        // footerUrl: new FormControl(''),
        // footerColor: new FormControl(''),
        sections: new FormArray([
          this.initSection(),
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

  addSection() {
    const control = <FormArray>this.survey.get('sections');
    control.push(this.initSection());
  }

  getSections(form) {
    // console.log(form.get('sections').controls);
    return form.controls.sections.controls;
  }

  initSection() {
    return new FormGroup({
      sectionTitle: new FormControl(''),
      sectionDescription: new FormControl('')
    });
  }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setSecthreemtd(this.secthreemtdType);
      return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/secthreealarm']);
    }
}

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/secthreesafety']);
      }
  }

}
