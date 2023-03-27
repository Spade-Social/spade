import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LovelanguagequizPage } from './lovelanguagequiz.page';

const routes: Routes = [
  {
    path: '',
    component: LovelanguagequizPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LovelanguagequizPageRoutingModule {}
