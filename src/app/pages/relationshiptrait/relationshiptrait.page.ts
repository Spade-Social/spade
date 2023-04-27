import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-relationshiptrait',
  templateUrl: './relationshiptrait.page.html',
  styleUrls: ['./relationshiptrait.page.scss'],
})
export class RelationshiptraitPage implements OnInit {

  current_step:any = 1;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToNext(){
      this.router.navigate(['ethnicity']);
  }

}
