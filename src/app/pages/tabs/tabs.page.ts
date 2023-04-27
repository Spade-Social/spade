import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('tab-show', style({ opacity: 1, fontWeight: 900 })),
      state('tab-hide', style({ opacity: 0.3 })),
      transition('tab-hide => tab-show', animate('300ms ease-in')),
      transition('tab-show => tab-hide', animate('300ms ease-out'))
    ])
  ]
})
export class TabsPage implements OnInit {

tabSelected: any = 'dashboard';
setCard: boolean = false;
onTabSelected(item) {
console.log(item);
this.tabSelected = item;

}

  constructor(
    private router: Router
  ) {
    // let g = window.location.href;
    // console.log( g.valueOf());
   
   }

  ngOnInit() {
this.getUrl();
  }

  ionViewWillEnter(){
   this.getUrl();
  }

  getUrl(){
    console.log(this.router.url);
    const fg = this.router.url;
    const me = fg.split('/');
    console.log("splirtted",me[2]);
    this.tabSelected = me[2];
  }

  changeCard() {
    if(!this.setCard){
      this.setCard = true;
    }else{
      this.setCard = false
    }
    console.log(this.setCard);
  }

}
