import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FriendzonePageRoutingModule } from './friendzone-routing.module';

import { FriendzonePage } from './friendzone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FriendzonePageRoutingModule
  ],
  declarations: [FriendzonePage]
})
export class FriendzonePageModule {}
