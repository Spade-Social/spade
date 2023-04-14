import { Component, Output, EventEmitter, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AnimationController } from '@ionic/angular';
// import { panGesture } from '../../animations/pan.animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent{
  @ViewChild('card', { read: ElementRef }) card: ElementRef;
  cards: any[] = [];

  constructor(private animationCtrl: AnimationController) {
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
  onCardSwipe(event: any) {
    const deltaX = event.deltaX;
    const isRightSwipe = deltaX > 0;
    const cardElement = this.card.nativeElement;

    if (isRightSwipe) {
      cardElement.style.transform = `translateX(${deltaX}px) rotate(15deg)`;
    } else {
      cardElement.style.transform = `translateX(${deltaX}px) rotate(-15deg)`;
    }

    if (Math.abs(deltaX) > 150) {
      // Threshold for swiping off the card
      this.onCardSwiped(isRightSwipe);
    }
  }

  onCardSwiped(isRightSwipe: boolean) {
    const cardElement = this.card.nativeElement;

    // Perform any action when the card is swiped
    if (isRightSwipe) {
      console.log('Accepted');
      this.card
    } else {
      console.log('Rejected');
    }

    // Reset the card position
    cardElement.style.transform = '';
  }
}


