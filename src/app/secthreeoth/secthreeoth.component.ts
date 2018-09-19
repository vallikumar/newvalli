import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';
import {ReporterListService} from '../services/reporterlist.service'
import {FacilityService} from '../services/facility.service'

@Component({
  selector: 'app-secthreeoth',
  templateUrl: './secthreeoth.component.html',
  styleUrls: ['./secthreeoth.component.css']
})
export class SecthreeothComponent implements OnInit {
  title = 'Section III: Data Analysis/Findings  Summary and Follow up Action – Others';
  secthreeothType: string;
  form: any;  
  constructor(private router: Router, private formDataService: FormDataService, private reporterListService: ReporterListService, private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.secthreeothType = this.formDataService.getSecthreeoth();
  }
  // onChange(curValue)
  // {
  //   this.fieldSelection.emit({
  //     key: this.key,
  //     value: curValue
  //   })
  // }

  save(form: any): boolean {
      if (!form.valid) {
          return false;
      }
          
      this.formDataService.setSecthreeoth(this.secthreeothType);
      return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/secthreesafety']);
    }
}

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/secfour']);
      }
  }

}
