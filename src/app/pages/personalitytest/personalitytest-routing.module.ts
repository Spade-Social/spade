import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonalitytestPage } from './personalitytest.page';

const routes: Routes = [
  {
    path: '',
    component: PersonalitytestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalitytestPageRoutingModule {}
