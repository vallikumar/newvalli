import { Component, OnInit } from '@angular/core';
import { Router }              from '@angular/router';

import { FormDataService }     from '../data/formData.service';

@Component({
  selector: 'app-sectwoa',
  templateUrl: './sectwoa.component.html',
  styleUrls: ['./sectwoa.component.css']
})
export class SectwoaComponent implements OnInit {
  title = 'Section II: Coverage Date(s) Data Collection (contd.)';
  sectwoaType: string;
  form: any;
  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.sectwoaType = this.formDataService.getSectwoa();
}

save(form: any): boolean {
    if (!form.valid) {
        return false;
    }
    
    this.formDataService.setSectwoa(this.sectwoaType);
    return true;
}

goToPrevious(form: any) {
    if (this.save(form)) {
        // Navigate to the general page
        this.router.navigate(['/work']);
    }
}

goToNext(form: any) {
    if (this.save(form)) {
        // Navigate to the address page
        this.router.navigate(['/address']);
    }
}

}
