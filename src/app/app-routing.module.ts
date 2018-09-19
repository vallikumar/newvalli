import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { generalComponent }    from './general/general.component';
import { WorkComponent }        from './work/work.component';
import { SectwoaComponent }        from './sectwoa/sectwoa.component';
import { AddressComponent }     from './address/address.component';
import { SecthreealarmComponent }        from './secthreealarm/secthreealarm.component';
import { SecthreemtdComponent }        from './secthreemtd/secthreemtd.component';
import { SecthreesafetyComponent }        from './secthreesafety/secthreesafety.component';
import { SecthreeothComponent }        from './secthreeoth/secthreeoth.component';
import { SecfourComponent }        from './secfour/secfour.component';
import { SecfiveComponent }        from './secfive/secfive.component';
import { ResultComponent }      from './result/result.component';

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'general',  component: generalComponent },
    // 2nd Route
    { path: 'work',  component: WorkComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'sectwoa',  component: SectwoaComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'address',  component: AddressComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'secthreealarm',  component: SecthreealarmComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'secthreemtd',  component: SecthreemtdComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'secthreesafety',  component: SecthreesafetyComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'secthreeoth',  component: SecthreeothComponent, canActivate: [WorkflowGuard] },
     // 3rd Route
     { path: 'secfour',  component: SecfourComponent, canActivate: [WorkflowGuard] },
     // 3rd Route
     { path: 'secfive',  component: SecfiveComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    { path: '',   redirectTo: '/general', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: generalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}