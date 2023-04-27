import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


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
onTabSelected(item) {
console.log(item);
this.tabSelected = item;
// if(item == 'discover'){
//   alert('working');
// }
}

  constructor() {
    // let g = window.location.href;
    // console.log( g.valueOf());
   
   }

  ngOnInit() {
  }

}
