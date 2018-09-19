import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Address }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
@Component({
  selector: 'app-secthreealarm',
  templateUrl: './secthreealarm.component.html',
  styleUrls: ['./secthreealarm.component.css']
})
export class SecthreealarmComponent implements OnInit {
alarm: FormGroup;
  title = 'Section III: Data Analysis/Findings  Summary and Follow up Action - Out of Specification(Alarm) Incident';
  secthreealarmType: string;
  form: any;  
  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.secthreealarmType = this.formDataService.getSecthreealarm();
    this.alarm = new FormGroup({
        criticalParameter: new FormControl(''),
        inputBy: new FormControl(''),
        startTime: new FormControl(''),
        endtime: new FormControl(''),
        // footerUrl: new FormControl(''),
        // footerColor: new FormControl(''),
        sec: new FormArray([
          this.initSec(),
        ]),
      });
}

addSec() {
    const control = <FormArray>this.alarm.get('sec');
    control.push(this.initSec());
  }

  getSec(form) {
    // console.log(form.get('sec').controls);
    return form.controls.sec.controls;
  }

  initSec() {
    return new FormGroup({
      sectionTitle: new FormControl(''),
      sectionDescription: new FormControl('')
    });
  }

save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setSecthreealarm(this.secthreealarmType);
    return true;
}

addSection() {
    // const control = <FormArray>this.secthreealarmForm.get('sections');
    // control.push(this.initSection());
  }

goToPrevious(form: any) {
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/address']);
    }
}

goToNext(form: any) {
    if (this.save(form)) {
        // Navigate to the result page
        this.router.navigate(['/secthreemtd']);
    }
}
}
