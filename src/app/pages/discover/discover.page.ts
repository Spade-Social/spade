import { Component} from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage {
  cards: any = [];

  constructor() {

    // this.cards = [];
this.loadTinderCards();
  }


  loadTinderCards() {
    this.cards = [
      {
        id: '1',
        img: "https://placeimg.com/300/300/people",
        title: "Demo card 1",
        description: "This is a demo for Tinder like swipe cards",
        card_position: false,
      },
      {
        id: '2',
        img: "https://placeimg.com/300/300/animals",
        title: "Demo card 2",
        description: "This is a demo for Tinder like swipe cards",
        card_position: false,

      },
      {
        id: '3',
        img: "https://placeimg.com/300/300/nature",
        title: "Demo card 3",
        description: "This is a demo for Tinder like swipe cards",
        card_position: false,

      },
      {
        id: '4',
        img: "https://placeimg.com/300/300/tech",
        title: "Demo card 4",
        description: "This is a demo for Tinder like swipe cards",
        card_position: false,

      },
      {
        id: '5',
        img: "https://placeimg.com/300/300/arch",
        title: "Demo card 5",
        description: "This is a demo for Tinder like swipe cards",
        card_position: false,

      }
    ]
  };

  logChoice(choice) {
    console.log(choice)
    if (this.cards.length < 2){
      this.loadTinderCards();
    }
  };
}
