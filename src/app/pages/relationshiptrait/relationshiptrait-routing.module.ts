import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelationshiptraitPage } from './relationshiptrait.page';

const routes: Routes = [
  {
    path: '',
    component: RelationshiptraitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelationshiptraitPageRoutingModule {}
