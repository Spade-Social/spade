import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalitytestPageRoutingModule } from './personalitytest-routing.module';

import { PersonalitytestPage } from './personalitytest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalitytestPageRoutingModule
  ],
  declarations: [PersonalitytestPage]
})
export class PersonalitytestPageModule {}
