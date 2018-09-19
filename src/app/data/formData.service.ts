import { Injectable }                        from '@angular/core';

import { FormData, general, Address }       from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isgeneralFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isSectwoaFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private isSecthreealarmFormValid: boolean = false;
    private isSecthreemtdFormValid: boolean = false;
    private isSecthreesafetyFormValid: boolean = false;
    private isSecthreeothFormValid: boolean = false;
    private isSecfourFormValid: boolean = false;
    private isSecfiveFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    getgeneral(): general {
        // Return the general data
        var general: general = {
            reportedBy: this.formData.reportedBy,
            facility: this.formData.facility,
            activity: this.formData.activity,
            covStartDate: this.formData.covStartDate,
            covEndDate: this.formData.covEndDate,
            repDate: this.formData.repDate,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return general;
    }

    setgeneral(data: general) { 
        // Update the general data only when the general Form had been validated successfully
        this.isgeneralFormValid = true;
        this.formData.reportedBy = data.reportedBy;
        this.formData.facility = data.facility;
        this.formData.activity = data.activity;
        this.formData.covStartDate = data.covStartDate;
        this.formData.covEndDate = data.covEndDate;
        this.formData.repDate = data.repDate;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate general Step in Workflow
        console.log(this.formData);
        this.workflowService.validateStep(STEPS.general);
    }

    getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getSectwoa() : string {
        // Return the Section two a type
        return this.formData.sectwoa;
    }
    
    setSectwoa(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSectwoaFormValid = true;
        this.formData.sectwoa = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.sectwoa);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            alarm: this.formData.alarm,
            mtd: this.formData.mtd,
            safety: this.formData.safety,
            oth: this.formData.oth
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.alarm = data.alarm;
        this.formData.mtd = data.mtd;
        this.formData.safety = data.safety;
        this.formData.oth = data.oth;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getSecthreealarm() : string {
        // Return the Section two a type
        return this.formData.secthreealarm;
    }
    
    setSecthreealarm(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSecthreealarmFormValid = true;
        this.formData.secthreealarm = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.secthreealarm);
    }



    getSecthreemtd() : string {
        // Return the Section two a type
        return this.formData.secthreemtd;
    }
    
    setSecthreemtd(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSecthreemtdFormValid = true;
        this.formData.secthreemtd = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.secthreemtd);
    }

    getSecthreesafety() : string {
        // Return the Section two a type
        return this.formData.secthreesafety;
    }
    
    setSecthreesafety(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSecthreesafetyFormValid = true;
        this.formData.secthreesafety = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.secthreesafety);
    }

    getSecthreeoth() : string {
        // Return the Section two a type
        return this.formData.secthreeoth;
    }
    
    setSecthreeoth(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSecthreeothFormValid = true;
        this.formData.secthreeoth = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.secthreeoth);
    }

    getSecfour() : string {
        // Return the Section two a type
        return this.formData.secfour;
    }
    
    setSecfour(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSecfourFormValid = true;
        this.formData.secfour = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.secfour);
    }

    getSecfive() : string {
        // Return the Section two a type
        return this.formData.secfive;
    }
    
    setSecfive(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isSecfiveFormValid = true;
        this.formData.secfive = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.secfive);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isgeneralFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isgeneralFormValid &&
                this.isWorkFormValid && 
                this.isSectwoaFormValid && 
                this.isAddressFormValid &&
                this.isSecthreealarmFormValid&&
                this.isSecthreemtdFormValid&&
                this.isSecthreesafetyFormValid&&
                this.isSecthreeothFormValid&&
                this.isSecfourFormValid&&
                this.isSecfiveFormValid;
    }
}