import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalitytest',
  templateUrl: './personalitytest.page.html',
  styleUrls: ['./personalitytest.page.scss'],
})
export class PersonalitytestPage implements OnInit {

  selected_option: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectOption(option){
    this.selected_option = option.detail.value;
  }

  back(){
    this.router.navigate(['/lovelanguagequiz'])
  }

  next(){
  }

}
