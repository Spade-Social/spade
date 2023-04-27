import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelationshiptraitPageRoutingModule } from './relationshiptrait-routing.module';

import { RelationshiptraitPage } from './relationshiptrait.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelationshiptraitPageRoutingModule
  ],
  declarations: [RelationshiptraitPage]
})
export class RelationshiptraitPageModule {}
