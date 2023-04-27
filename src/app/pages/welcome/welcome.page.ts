import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  login_account: any = false;
  disable_login_account: any = true;
  password_icon = "eye-off-outline";
  password_input_type = "password";
  show_password: any = false;
  email: any = "";
  password: any = "";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigateToLogin(){
    this.router.navigate(['login']);
  }

  proceedToOnboarding(){
    this.router.navigate(['index/basicinfo'])
  }

  createAccount(){
    this.router.navigate(['index/basicinfo'])
  }

  loginToAccount(){
    this.login_account = true;
  }
  login(){
    this.router.navigate(['login'])
  }

  goToPrevious(){
    this.login_account = false;
    this.email = "";
    this.password = "";
    this.disable_login_account = true;
  }

  togglePassword(){
    this.show_password = !this.show_password;
    if(this.show_password){
      this.password_icon = "eye-outline";
      this.password_input_type = "text";
    }else{
      this.password_icon = "eye-off-outline";
      this.password_input_type = "password";
    }
  }

  inputChanged(){
    if(this.email != "" && this.password != "" && this.email.match("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")){
      this.disable_login_account = false;
    }else{
      this.disable_login_account = true;
    }
  }

}
