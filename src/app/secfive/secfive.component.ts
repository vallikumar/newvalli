import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';
import { FormDataService }     from '../data/formData.service';
import {ReporterListService} from '../services/reporterlist.service'
import {FacilityService} from '../services/facility.service'

@Component({
  selector: 'app-secfive',
  templateUrl: './secfive.component.html',
  styleUrls: ['./secfive.component.css']
})
export class SecfiveComponent implements OnInit {
  title = 'Section V: Attachments';
  secfiveType: string;
  form: any;  
  constructor(private router: Router, private formDataService: FormDataService, private reporterListService: ReporterListService, private facilityService: FacilityService) {
  }

  ngOnInit() {
    this.secfiveType = this.formDataService.getSecfive();
  }

  save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
        
    this.formDataService.setSecfive(this.secfiveType);
    return true;
}

goToPrevious(form: any) {
  if (this.save(form)) {
      // Navigate to the work page
      this.router.navigate(['/secfour']);
  }
}

goToNext(form: any) {
    if (this.save(form)) {
        // Navigate to the work page
        this.router.navigate(['/result']);
    }
}

}
