import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboardingnav',
  templateUrl: './onboardingnav.page.html',
  styleUrls: ['./onboardingnav.page.scss'],
})
export class OnboardingnavPage implements OnInit {

  current_step = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToNext(){
      this.router.navigate(['onboardingnav']);
  }

}
