import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { IonCard } from '@ionic/angular';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
  animations: [
    trigger('cardSwipe', [
      transition(':enter', [
        style({ transform: 'scale(0.8)' }),
        animate('200ms ease-in-out', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ transform: 'scale(0.8)' }))
      ])
    ])
  ]
})
export class DiscoverPage {
  @ViewChild(IonCard) card: ElementRef;
  cards: any[] = []; // Replace with your actual card data
  currentIndex = 0;


  constructor(private renderer: Renderer2, private el: ElementRef) {

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

  // onSwipeLeft() {
  //   // Handle swipe left action, e.g., remove card from the stack or trigger some other action
  //   this.renderer.setStyle(this.card.nativeElement, 'transform', 'translateX(-1000px)');
  //   this.renderer.setStyle(this.card.nativeElement, 'opacity', '0');
  //   this.currentIndex++;
  // }

  // onSwipeRight() {
  //   // Handle swipe right action, e.g., remove card from the stack or trigger some other action
  //   this.renderer.setStyle(this.card.nativeElement, 'transform', 'translateX(1000px)');
  //   this.renderer.setStyle(this.card.nativeElement, 'opacity', '0');
  //   this.currentIndex++;
  // }
  onSwipeLeft() {
    // Handle swipe left action, e.g., remove card from the stack or trigger some other action
    this.card.nativeElement.classList.add('swipe-left'); // Add swipe-left class for animation
    setTimeout(() => {
      this.currentIndex++;
      this.card.nativeElement.classList.remove('swipe-left'); // Remove swipe-left class after animation
    }, 300); // Delay to allow animation to finish
  }

  onSwipeRight() {
    // Handle swipe right action, e.g., remove card from the stack or trigger some other action
    this.card.nativeElement.classList.add('swipe-right'); // Add swipe-right class for animation
    setTimeout(() => {
      this.currentIndex++;
      this.card.nativeElement.classList.remove('swipe-right'); // Remove swipe-right class after animation
    }, 300); // Delay to allow animation to finish
  }
}
