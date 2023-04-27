import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BasicinfoPageRoutingModule } from './basicinfo-routing.module';

import { BasicinfoPage } from './basicinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BasicinfoPageRoutingModule
  ],
  declarations: [BasicinfoPage]
})
export class BasicinfoPageModule {}
