import * as $ from 'jquery' ;
import 'popper.js';
import 'bootstrap';
import 'moment';
import 'hammerjs';

import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule }        from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {CalendarModule} from 'primeng/calendar';
import {FileUploadModule} from 'primeng/fileupload';

/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { generalComponent }  from './general/general.component';
import { WorkComponent }      from './work/work.component';
import { SectwoaComponent } from './sectwoa/sectwoa.component';
import { AddressComponent }   from './address/address.component';
import { SecthreealarmComponent } from './secthreealarm/secthreealarm.component';
import { SecthreemtdComponent } from './secthreemtd/secthreemtd.component';
import { SecthreesafetyComponent } from './secthreesafety/secthreesafety.component';
import { SecthreeothComponent } from './secthreeoth/secthreeoth.component';
import { SecfourComponent } from './secfour/secfour.component';
import { SecfiveComponent } from './secfive/secfive.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { YesTextComponent } from './components/yes-text/yes-text.component';
import { DdownNewComponent } from './components/ddown-new/ddown-new.component';
import {DropdownModule} from 'primeng/dropdown';
import { FileuplaoderComponent } from './components/fileuplaoder/fileuplaoder.component';

@NgModule({
    imports:      [ BrowserModule, 
                    BrowserAnimationsModule,
                    FormsModule,
                    ReactiveFormsModule,
                    OwlDateTimeModule,
                    OwlNativeDateTimeModule,
                    AppRoutingModule,
                    HttpClientModule,
                    NgbModule.forRoot(),
                    CalendarModule,
                    FileUploadModule,
                    DropdownModule
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, generalComponent, WorkComponent, AddressComponent, ResultComponent, HeaderComponent, FooterComponent, YesTextComponent, SectwoaComponent, SecthreealarmComponent, SecthreemtdComponent, SecthreesafetyComponent, SecthreeothComponent, DdownNewComponent, SecfourComponent, SecfiveComponent, FileuplaoderComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}