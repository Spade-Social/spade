import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {
  current: any = 1;


    constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  back(){
    if(this.current === 1){
this.modalCtrl.dismiss(null,'cancel');

    }else if(this.current === 2){
this.current = 1;
    }else if(this.current === 3){
      this.current = 2;
    }else if(this.current === 4){
      this.current = 3;
    }else if(this.current === 5){
      this.current = 6;
          }

  }

  Next(){
    if(this.current === 1){
      this.modalCtrl.dismiss(null,'cancel');
          }else if(this.current === 2){
      this.current = 3;
          }else if(this.current === 3){
            this.current = 4;
                }else if(this.current === 4){
                  this.current = 5;
                      }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}
