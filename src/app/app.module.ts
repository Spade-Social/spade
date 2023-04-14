import { NgModule } from '@angular/core';
import {BrowserModule, HammerModule} from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import {NgxSpinnerModule} from "ngx-spinner";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
// import { TinderUiComponent } from './pages/tinder-ui/tinder-ui.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    HammerModule,

    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right',

      preventDuplicates: true,
    }),
    HttpClientModule,
    NgxSpinnerModule.forRoot({ type: 'pacman'}),
    // TinderUiComponent
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
],
  providers: [SplashScreen, StatusBar, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
