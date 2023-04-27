import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnboardingnavPage } from './onboardingnav.page';

const routes: Routes = [
  {
    path: '',
    component: OnboardingnavPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnboardingnavPageRoutingModule {}
