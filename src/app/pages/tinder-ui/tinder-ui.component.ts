// import { Component, OnInit } from '@angular/core';

import {
  Component,
  Input,
  ViewChildren,
  QueryList,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
} from '@angular/core';

// import 'hammerjs';

@Component({
  selector: 'app-tinder-ui',
  templateUrl: './tinder-ui.component.html',
  styleUrls: ['./tinder-ui.component.scss'],
})
export class TinderUiComponent {


  @Input('cards') cards: Array<{
    id: number,
    img: string;
    title: string;
    description: string;
    card_position:boolean;
  }>;

  @ViewChildren('tinderCard') tinderCards: QueryList<ElementRef>;
  tinderCardsArray: Array<ElementRef>;

  @Output() choiceMade = new EventEmitter();

  moveOutWidth: number;
  shiftRequired: boolean;
  transitionInProgress: boolean;
  heartVisible: boolean;
  crossVisible: boolean;
addMyClass: boolean = false;
cards_back: boolean = false;
hideModal: boolean = false;

  constructor(private renderer: Renderer2) {}

  userClickedButton(event, heart) {
    event.preventDefault();
    if (!this.cards.length) return false;
    if (heart) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(' + this.moveOutWidth + 'px, -100px) rotate(-30deg)'
      );
      this.toggleChoiceIndicator(false, true);
      this.emitChoice(heart, this.cards[0]);
    } else {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(-' + this.moveOutWidth + 'px, -100px) rotate(30deg)'
      );
      this.toggleChoiceIndicator(true, false);
      this.emitChoice(heart, this.cards[0]);
    }
    this.shiftRequired = true;
    this.transitionInProgress = true;
    console.log(this.tinderCardsArray,"CHECKING", this.cards[0]);
  }

  handlePan(event) {
    if (
      event.deltaX === 0 ||
      (event.center.x === 0 && event.center.y === 0) ||
      !this.cards.length
    )
      return;

    if (this.transitionInProgress) {
      this.handleShift();
    }

    this.renderer.addClass(this.tinderCardsArray[0].nativeElement, 'moving');

    if (event.deltaX > 0) {
      this.toggleChoiceIndicator(false, true);
    }
    if (event.deltaX < 0) {
      this.toggleChoiceIndicator(true, false);
    }

    let xMulti = event.deltaX * 0.03;
    let yMulti = event.deltaY / 80;
    let rotate = xMulti * yMulti;

    this.renderer.setStyle(
      this.tinderCardsArray[0].nativeElement,
      'transform',
      'translate(' +
        event.deltaX +
        'px, ' +
        event.deltaY +
        'px) rotate(' +
        rotate +
        'deg)'
    );

    this.shiftRequired = true;
  }

  handlePanEnd(event) {
    this.toggleChoiceIndicator(false, false);

    if (!this.cards.length) return;

    this.renderer.removeClass(this.tinderCardsArray[0].nativeElement, 'moving');

    let keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;
    if (keep) {
      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        ''
      );
      this.shiftRequired = false;
    } else {
      let endX = Math.max(
        Math.abs(event.velocityX) * this.moveOutWidth,
        this.moveOutWidth
      );
      let toX = event.deltaX > 0 ? endX : -endX;
      let endY = Math.abs(event.velocityY) * this.moveOutWidth;
      let toY = event.deltaY > 0 ? endY : -endY;
      let xMulti = event.deltaX * 0.03;
      let yMulti = event.deltaY / 80;
      let rotate = xMulti * yMulti;

      this.renderer.setStyle(
        this.tinderCardsArray[0].nativeElement,
        'transform',
        'translate(' +
          toX +
          'px, ' +
          (toY + event.deltaY) +
          'px) rotate(' +
          rotate +
          'deg)'
      );

      this.shiftRequired = true;

      this.emitChoice(!!(event.deltaX > 0), this.cards[0]);
    }
    this.transitionInProgress = true;
  }




  toggleChoiceIndicator(cross, heart) {
    this.crossVisible = cross;
    this.heartVisible = heart;
  }

  handleShift() {
    this.transitionInProgress = false;
    this.toggleChoiceIndicator(false, false);
    this.addMyClass = false;
    this.cards_back = false;
    this.hideModal = false;
    if (this.shiftRequired) {
      this.shiftRequired = false;

      this.cards.shift();
    }
  }

  emitChoice(heart, card) {
    this.choiceMade.emit({
      choice: heart,
      payload: card,
    });
  }

  ngAfterViewInit() {
    this.moveOutWidth = document.documentElement.clientWidth * 1.5;
    this.tinderCardsArray = this.tinderCards.toArray();
    console.log('=======>', JSON.parse(JSON.stringify(this.tinderCards)));
    this.tinderCards.changes.subscribe(() => {
      this.tinderCardsArray = this.tinderCards.toArray();
      console.log(
        '=======>',
        JSON.parse(JSON.stringify(this.tinderCardsArray))
      );
    });
  }


  change() {
    this.cards_back = !this.cards_back;

    }

    addClass() {
      // console.log(this.addClass);
      this.addMyClass = !this.addMyClass;
    }
    hideModaal(event){
      this.hideModal = !this.hideModal;
      console.log(event.id);
    }

}
