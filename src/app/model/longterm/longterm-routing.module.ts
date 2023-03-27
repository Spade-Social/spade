import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LongtermPage } from './longterm.page';

const routes: Routes = [
  {
    path: '',
    component: LongtermPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LongtermPageRoutingModule {}
