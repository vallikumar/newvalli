import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';
import {ReporterListService} from '../services/reporterlist.service'
import {FacilityService} from '../services/facility.service'

@Component({
  selector: 'app-secfour',
  templateUrl: './secfour.component.html',
  styleUrls: ['./secfour.component.css']
})
export class SecfourComponent implements OnInit {
  title = 'Section IV: Follow up/Update on Previous Findings';
  secfourType: string;
  form: any;  
  constructor(private router: Router, private formDataService: FormDataService, private reporterListService: ReporterListService, private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.secfourType = this.formDataService.getSecfour();
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
          
      this.formDataService.setSecfour(this.secfourType);
      return true;
  }

  goToPrevious(form: any) {
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/secthreeoth']);
    }
}

  goToNext(form: any) {
      if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/secfive']);
      }
  }

}
