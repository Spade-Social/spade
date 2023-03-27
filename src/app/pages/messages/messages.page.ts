import { Component, OnInit } from '@angular/core';
import { IonSlide, IonSlides, LoadingController, ModalController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})

export class MessagesPage implements OnInit {
  selectedSlide: any;
  segment : any = '';
  filterTab:  boolean = false;


  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  async segmentChanged(ev: any) {
    await this.selectedSlide.slideTo(this.segment)
  }



  customTab(item) {
    // console.log('customTab=>', item);
    if (item === 'single'){
      this.segment ='single';
    }else if (item === 'redlight'){
      this.segment ='redlight';
    }else if (item === 'longterm'){
      this.segment = 'longterm';
    }else if (item === 'friends'){
      this.segment = 'friends';
    }
  }

  gotoChat(){
    this.router.navigate(['/chat'])
  }
  turnFilter() {
    this.filterTab =!this.filterTab;
  }
}
