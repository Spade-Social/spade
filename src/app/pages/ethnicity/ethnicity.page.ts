import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ethnicity',
  templateUrl: './ethnicity.page.html',
  styleUrls: ['./ethnicity.page.scss'],
})
export class EthnicityPage implements OnInit {

  current_step = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToNext(){
      this.router.navigate(['onboardingnav']);
  }

}
