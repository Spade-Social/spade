import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicinfoPage } from './basicinfo.page';

const routes: Routes = [
  {
    path: '',
    component: BasicinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicinfoPageRoutingModule {}
