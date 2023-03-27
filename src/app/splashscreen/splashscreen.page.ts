import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public plt: Platform, private router: Router) {
    plt.ready().then(()=>{
      if (plt.is('android')){

        setTimeout(()=>{
          this.router.navigate(['/index']);
        },1000);

      }else{
        this.router.navigate(['/index']);
        window.location.href = '/index';
      }
    });
   }

  ngOnInit() {

  }

}
