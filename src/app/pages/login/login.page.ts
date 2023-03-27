import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import {UtilService} from "../../services/util.service";

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
show: boolean = false;
  password: any = '';
  email: any = '';
  constructor(
    private api: ApiService,
    private router: Router,
    private utils: UtilService,
  private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'login...',

    });

    loading.present();
  }

  async hideLoading() {
    await this.loadingCtrl.dismiss();
  }
  showPass(){
   this.show ? this.show = false : this.show = true;
  }

  login(){
this.utils.showLoading();
    const param = {
      email: this.email,
      password: this.password
    }
    console.log('ghjk',param)
    if(this.email === '' || this.password === ''){
      this.utils.hideLoading();
      this.utils.showError('','All fields are required');
      return;
    }else{

      this.api.post_public('user/login', param).then((data:any)=>{
        this.utils.hideLoading();

        if(data && data.token != null){
          localStorage.setItem('token', data.token);
          this.utils.showSuccess('','Logged in successfully');
          if(data && data.user.onboarding_status != null){
           
            this.router.navigate(['/tabs']);
          }else{
      this.router.navigate(['/update-onboarding']);

          }
       
        }
      })
    }

  }

}
