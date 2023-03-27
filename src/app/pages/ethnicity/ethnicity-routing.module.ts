import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EthnicityPage } from './ethnicity.page';

const routes: Routes = [
  {
    path: '',
    component: EthnicityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EthnicityPageRoutingModule {}
