import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscoverPageRoutingModule } from './discover-routing.module';

import { DiscoverPage } from './discover.page';
import { TinderUiComponent } from '../tinder-ui/tinder-ui.component';
import {HammerModule} from "@angular/platform-browser";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CardComponent } from 'src/app/components/card/card.component';
// import { TinderUiComponent } from '../tinder-ui/tinder-ui.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    HammerModule,
    NgCircleProgressModule
  ],
  declarations: [DiscoverPage, TinderUiComponent, CardComponent ]
})
export class DiscoverPageModule {}
