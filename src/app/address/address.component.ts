import { Component, OnInit }   from '@angular/core';
import { Router }              from '@angular/router';

import { Address }             from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';

@Component ({
    selector:     'mt-wizard-address'
    ,templateUrl: './address.component.html'
})

export class AddressComponent implements OnInit {
    title = 'Section III: Data Analysis/Findings  Summary and Follow up Action';
    address: Address;
    form: any;
    
    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.address = this.formDataService.getAddress();
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setAddress(this.address);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/sectwoa']);
        }
    }

    goToNext(form: any) {
        console.log(this);
        if (this.save(form)) {
            // Navigate to the result page
            if(this.address.alarm === "yes"){
            this.router.navigate(['/secthreealarm']);
            } else {
                this.router.navigate(['/secthreemtd']);
            }
        }
    }
}