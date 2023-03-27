import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateOnboardingPageRoutingModule } from './update-onboarding-routing.module';

import { UpdateOnboardingPage } from './update-onboarding.page';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateOnboardingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    NgSelectModule
  ],
  declarations: [UpdateOnboardingPage]
})
export class UpdateOnboardingPageModule {}
