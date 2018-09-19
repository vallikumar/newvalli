import { Component, OnInit, Input }   from '@angular/core';
import { Router } from '@angular/router';
import { FormData }                   from '../data/formData.model';
import { FormDataService }            from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-result'
    ,templateUrl: './result.component.html'
})

export class ResultComponent implements OnInit {
    title = 'Review Your Information before submitting!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    }

    save(form: any): boolean {
        if (!form.valid) {
          return false;
        }
    
        // this.formDataService.setSecthreesafety(this.secthreesafetyType);
        return true;
      }

    goToPrevious(form: any) {
        if (this.save(form)) {
          // Navigate to the work page
          this.router.navigate(['/secfive']);
        }
      }

    submit() {
        alert('PREVIEW INFORMATION BEFORE DONE!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}
