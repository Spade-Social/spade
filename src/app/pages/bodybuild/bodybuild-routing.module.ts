import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodybuildPage } from './bodybuild.page';

const routes: Routes = [
  {
    path: '',
    component: BodybuildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodybuildPageRoutingModule {}
