import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnboardingnavPageRoutingModule } from './onboardingnav-routing.module';

import { OnboardingnavPage } from './onboardingnav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnboardingnavPageRoutingModule
  ],
  declarations: [OnboardingnavPage]
})
export class OnboardingnavPageModule {}
