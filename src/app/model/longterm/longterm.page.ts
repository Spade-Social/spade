import { QuestionsPage } from './../questions/questions.page';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavParams, IonModal, } from '@ionic/angular';

@Component({
  selector: 'app-longterm',
  templateUrl: './longterm.page.html',
  styleUrls: ['./longterm.page.scss'],
})
export class LongtermPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;

  current: any = 1;
    constructor(
      private modalCtrl: ModalController
    ) { }

    ngOnInit() {
    }

    async openSingle(){
      const modal = await this.modalCtrl.create({
        component: QuestionsPage
      });
      modal.present();

      modal.onDidDismiss().then((data) => {
      console.log("single=>",'dismiss');
    })
    }
    relationship = [
      {
        id: 1,
        name: ''
      },

    ]
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
        this.current = 1;
            }

    }

    Next(){
      if(this.current === 1){
        this.current = 2
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
