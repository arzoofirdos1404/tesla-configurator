import { Routes } from '@angular/router';
import { FirstStepComponent } from './step-components/first-step/first-step.component';
import { SecondStepComponent } from './step-components/second-step/second-step.component';
import { ThirdStepComponent } from './step-components/third-step/third-step.component';
import { Step1CompletedGuard } from './services/step1-completed.guard';
import { Step2CompletedGuard } from './services/step2-completed-guard.guard';

export const routes: Routes = [
    { path: '', redirectTo:'step1', pathMatch: 'full'},
    { path: 'step1', component: FirstStepComponent },
    { path: 'step2', component: SecondStepComponent, canActivate: [Step1CompletedGuard]  },
    { path: 'step3', component: ThirdStepComponent, canActivate: [Step2CompletedGuard] },
    { path: '**', redirectTo: 'step1' }
];
