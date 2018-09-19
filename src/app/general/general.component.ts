import { Component, OnInit, Input, Output, EventEmitter }   from '@angular/core';
import { Router }              from '@angular/router';
import { general }            from '../data/formData.model';
import { FormDataService }     from '../data/formData.service';
import {ReporterListService} from '../services/reporterlist.service'
import {FacilityService} from '../services/facility.service'
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';
// import {SelectItem} from 'primeng/api';

@Component ({
    selector:     'mt-wizard-general'
    ,templateUrl: './general.component.html'
})

// interface City {
//     name: string;
//     code: string;
//   }

export class generalComponent implements OnInit {
    title = 'Section I: General information';
    general: general;
    // cities: City[];
    // selectedCity: City;
    form: any;
    // reporters: Array<String>
    reporters: Array<Object>
    // facility: Array<String>
    facilities: Array<Object>
    activities: Array<Object>
    reportersList: Array<String>
    covStartDate: string;
    covEndDate: string;
    repDate:string;
    defaultDate: Date = new Date();
    schConfirm: string;
    // defaultcovStart: Date = new Date();
    @Input() text:String;
    @Input() key:String;
    @Input() fields: Array<String>;
    @Output() fieldSelection = new EventEmitter<Object>();
    // pageEntries: Array<Object>
    // power: string;
    
    constructor(private router: Router, private calendarModule: CalendarModule, private fileUploadModule: FileUploadModule, private formDataService: FormDataService, private reporterListService: ReporterListService, private facilityService: FacilityService) {
        this.activities = [
            {name: 'Activity1', code: 'A1'},
            {name: 'Activity2', code: 'A2'},
            {name: 'Activity4', code: 'A4'},
            {name: 'Activity3', code: 'A3'},
            {name: 'Activity5', code: 'A5'},
            {name: 'other', code: 'oth'}
        ];
        // this.reporters = [
        //     {repame: 'Rajiv', code: '1'},
        //     {name: 'Malee Kaolawanich', code: '2'}
        // ];
    }

    ngOnInit() {
        this.general = this.formDataService.getgeneral();
        this.reporterListService.getJSON().subscribe((data: Array<String>) => {
                this.reporters = data; 
            console.log(data)
        });
        
       
        this.facilityService.getJSON().subscribe((data: Array<String>) => {
            this.facilities = data; 
        console.log(data)
    });

    let today = new Date();
        this.general.repDate = (today.getMonth()+1) + '/' + (today.getDate()) + '/' + today.getFullYear();
        this.general.covStartDate = (today.getMonth()+1) + '/' + (today.getDate()-1) + '/' + today.getFullYear() + " "+ "00:00 AM"; //(today.getMonth()+1) + '/' + (today.getDate()) + '/' + today.getFullYear() + '/' + today.get; // " " + "00:00:00 AM"; //09/27/2018 02:26 PM
        this.general.covEndDate = (today.getMonth()+1) + '/' + (today.getDate()-1) + '/' + today.getFullYear() + " "+ "23:59 PM"; 
        console.log(this.general.covEndDate);
    }
    onChange(curValue)
    {
      this.fieldSelection.emit({
        key: this.key,
        value: curValue
      })
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }
            
        this.formDataService.setgeneral(this.general);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    }
}
