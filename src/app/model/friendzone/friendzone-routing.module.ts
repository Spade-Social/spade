import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendzonePage } from './friendzone.page';

const routes: Routes = [
  {
    path: '',
    component: FriendzonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendzonePageRoutingModule {}
