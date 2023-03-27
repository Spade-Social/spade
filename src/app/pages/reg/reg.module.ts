import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegPageRoutingModule } from './reg-routing.module';

import { RegPage } from './reg.page';
import { NgOtpInputModule } from  'ng-otp-input';
import { NgSelectModule } from '@ng-select/ng-select';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    IonicModule,
    RegPageRoutingModule,
    NgSelectModule
  ],
  declarations: [RegPage]
})
export class RegPageModule {}
