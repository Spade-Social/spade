import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lovelanguagequiz',
  templateUrl: './lovelanguagequiz.page.html',
  styleUrls: ['./lovelanguagequiz.page.scss'],
})
export class LovelanguagequizPage implements OnInit {

  selected_option: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectOption(option){
    this.selected_option = option.detail.value;
  }

  back(){
    this.router.navigate(['/index'])
  }

  next(){
    this.router.navigate(['/personalitytest'])
  }

}
