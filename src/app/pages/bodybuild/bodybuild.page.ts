import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodybuild',
  templateUrl: './bodybuild.page.html',
  styleUrls: ['./bodybuild.page.scss'],
})
export class BodybuildPage implements OnInit {

  current_step = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToNext(){
    if(this.current_step < 3){
      this.current_step = this.current_step + 1;
    }else{
      this.router.navigate(['relationshiptrait'])
    }
  }

  goToPrevious(){
    this.current_step = this.current_step - 1;
  }

}
