import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodybuildPageRoutingModule } from './bodybuild-routing.module';

import { BodybuildPage } from './bodybuild.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodybuildPageRoutingModule
  ],
  declarations: [BodybuildPage]
})
export class BodybuildPageModule {}
