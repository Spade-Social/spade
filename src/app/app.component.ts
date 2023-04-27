import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Component } from '@angular/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public splashScreen: SplashScreen, public plt: Platform, private router: Router, private statusBar: StatusBar) {
    this.plt.ready().then(()=>{
this.statusBar.show();
      this.splashScreen.hide();
      if(plt.is('ios')){
// this.statusBar.hide();
this.statusBar.overlaysWebView(false);
      }
      


    });
    this.initializeApp();
  }

  ionViewDidLeave(){
    this.initializeApp();

  }
  initializeApp(){
    const uid = localStorage.getItem('token');
    // if(uid && uid !== null && uid !== 'null'){
    //   this.router.navigate(['/tabs']);
    // }else{
    //   this.router.navigate(['/index']);
    // }
    this.plt.backButton.subscribeWithPriority(10, ()=>{
if(this.router.url === '/index'){
  navigator['app'].exitApp();
}else{
  if(uid && uid !== null && uid !== 'null' && uid !== undefined){
    this.router.navigate(['/tabs']);
  }else{
    this.router.navigate(['/index']);
  }
  // this.router.navigate(['/index']);
}
    })
  }
}
