import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LongtermPageRoutingModule } from './longterm-routing.module';

import { LongtermPage } from './longterm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LongtermPageRoutingModule
  ],
  declarations: [LongtermPage]
})
export class LongtermPageModule {}
