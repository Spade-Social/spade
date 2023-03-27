import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basicinfo',
  templateUrl: './basicinfo.page.html',
  styleUrls: ['./basicinfo.page.scss'],
})
export class BasicinfoPage implements OnInit {

  current_step: any = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNext(){
    if(this.current_step < 8){
      this.current_step = this.current_step + 1;
    }else{
      this.router.navigate(['bodybuild']);
    }
  }

  goToPrevious(){
    this.current_step = this.current_step - 1;
  }

}
