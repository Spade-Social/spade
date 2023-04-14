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
      // if (plt.is('android')){
        const uid = localStorage.getItem('token');
       
        setTimeout(()=>{
          if(uid && uid !== null && uid !== 'null'){
            this.router.navigateByUrl('/tabs');
          }else{
            this.router.navigateByUrl('/index');
          }
         
        },500);

      // }else{
      //   this.router.navigate(['/index']);
      //   window.location.href = '/index';
      // }
    });
   }

  ngOnInit() {

  }

}
