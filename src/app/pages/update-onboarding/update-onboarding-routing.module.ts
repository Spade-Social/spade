import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateOnboardingPage } from './update-onboarding.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateOnboardingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateOnboardingPageRoutingModule {}
