import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EthnicityPageRoutingModule } from './ethnicity-routing.module';

import { EthnicityPage } from './ethnicity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EthnicityPageRoutingModule
  ],
  declarations: [EthnicityPage]
})
export class EthnicityPageModule {}
