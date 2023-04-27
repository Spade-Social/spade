import { ApiService } from './../../services/api.service';
import { UtilService } from './../../services/util.service';
import { FriendzonePage } from './../../model/friendzone/friendzone.page';
import { LongtermPage } from './../../model/longterm/longterm.page';
import { RedlightPage } from './../../model/redlight/redlight.page';
import { SinglePage } from 'src/app/model/single/single.page';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { IonModal, ModalController } from '@ionic/angular';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

// import * as Country from '../../world.json';
import * as $ from 'jquery';
import { NgOtpInputConfig } from 'ng-otp-input';
import { CountryService } from 'src/app/services/country.service';
interface country {
  id: Number,
  name: String,
  States: String,

}
@Component({
  selector: 'app-reg',
  templateUrl: './reg.page.html',
  styleUrls: ['./reg.page.scss'],
})
export class RegPage implements OnInit {
  gh: boolean = false;
show: boolean = false;
prefer_relig: any[] = [];

onOtpChange($event: string) {
  if($event.length === 6){
    this.current = 23;

  }
}
phone: any = '';
  preferstatu: boolean = false;
  prefer_ethnicity: any[] = [];



  otpConfig :NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles:{

    'width': '40px',
    'height':'40px',
    'text-align':'center'
    },
    containerStyles:{
      'display':'flex',
      'justify-content':'center'
    },
    inputClass:'each_input',
    containerClass:'all_inputs'
  };

  @ViewChild(IonModal) modal: IonModal;
  current: any = 1;
  selectedItems: number = 0;
  religion: any = '';
  preferred_religion: any = '';

  day: any = '';
  month: any = '';
  year: any = '';
  gender: any = '';
  looking_for: any = '';
  height: any = '';
  build: any = '';
  free: any = '';
  drink: any = '';
  children: any = '';
  education: any = '';
  edu: any = '';
  funss: any;
  relationship = [
    {
      id: 'leader',
      img: '/assets/images/leader.svg',
      name: 'Leader',
      status: false
    },
    {
      id: 'supporter',
      img: '/assets/images/supporter.svg',
      name: 'Supporter',
      status: false
    },
    {
      id: '5050',
      img: '/assets/images/50_50.svg',
      name: '50/50',
      status: false
    },
    {
      id: 'mixed',
      img: '/assets/images/mixed.svg',
      name: 'Mixed',
      status: false
    },
  ];
  Fun = [
    {
      id: 1,
      img: '/assets/ico/1.svg',
      status: false
    },
    {
      id: 2,
      img: '/assets/ico/2.svg',
      status: false
    },
    {
      id: 3,
      img: '/assets/ico/3.png',
      status: false
    },
    {
      id: 4,
      img: '/assets/ico/4.svg',
      status: false
    },
    {
      id: 5,
      img: '/assets/ico/5.svg',
      status: false
    },
    {
      id: 6,
      img: '/assets/ico/6.svg',
      status: false
    },
    {
      id: 7,
      img: '/assets/ico/7.svg',
      status: false
    },
    {
      id: 8,
      img: '/assets/ico/8.svg',
      status: false
    },
    {
      id: 9,
      img: '/assets/ico/9.svg',
      status: false
    },
    {
      id: 10,
      img: '/assets/ico/10.svg',
      status: false

    },
    {
      id: 11,
      img: '/assets/ico/11.svg',
      status: false
    },
    {
      id: 12,
      img: '/assets/ico/12.svg'
    },
    {
      id: 13,
      img: '/assets/ico/13.svg',
      status: false
    },
    {
      id: 14,
      img: '/assets/ico/14.svg',
      status: false
    },
    {
      id: 15,
      img: '/assets/ico/15.svg',
      status: false
    },
    {
      id: 16,
      img: '/assets/ico/16.svg',
      status: false
    },
    {
      id: 17,
      img: '/assets/ico/17.svg',
      status: false
    },
    {
      id: 18,
      img: '/assets/ico/18.svg',
      status: false
    },
    {
      id: 19,
      img: '/assets/ico/19.svg',
      status: false
    },
    {
      id: 20,
      img: '/assets/ico/20.svg',
      status: false
    },
    {
      id: 21,
      img: '/assets/ico/21.svg',
      status: false
    },
    {
      id: 22,
      img: '/assets/ico/22.svg',
      status: false
    },
    {
      id: 23,
      img: '/assets/ico/23.svg',
      status: false
    },
    {
      id: 24,
      img: '/assets/ico/24.svg',
      status: false
    },
    {
      id: 25,
      img: '/assets/ico/25.svg',
      status: false
    },
    {
      id: 26,
      img: '/assets/ico/26.svg',
      status: false
    },
    {
      id: 27,
      img: '/assets/ico/27.svg',
      status: false
    },
    {
      id: 28,
      img: '/assets/ico/28.svg',
      status: false
    },
    {
      id: 29,
      img: '/assets/ico/29.svg',
      status: false
    },
    {
      id: 30,
      img: '/assets/ico/30.svg',
      status: false
    }
  ]
  Countries: any[] = [];
  States: any[] = [];
  Cities: any[] = [];

  regForm = new FormGroup({
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    c_pass: new FormControl('', [Validators.required, Validators.minLength(8)]),
    full_name: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.min(1)]),
    cc: new FormControl('', [Validators.required]),
    // religion: new FormControl('', [Validators.required]),
  });
  regFormPass = new FormGroup({});
  smoke: any = '';
  fun: any[] = [];
  prefer: any[] = [];

  rela: any[] = [];
  years: any[] = [];
  months: any[] = [];
  days: any[] = [];
country: any = '';
state: any = '';
city: any = '';

  ethnicity: any = '';
  ty: boolean = false;
  noCity: boolean = false;
  noState: boolean = false;
  postal_code: any = '';
dailing_code: any[] = [];
relaa: any[] = [];
  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private fb: FormBuilder,
    private util: UtilService,
    private api: ApiService,
    public dail: CountryService
  ) {

    this.getYear();
    this.getMonth();
this.getCountry();


  }

  ngOnInit() {

  }

  df(){
    this.util.showError('','nii');
  }
  onSearchChange(event) {
    if(event.value.charAt(0) === '0'){

      console.log('jk')
  // .value.phone.replace('0', "");
event.value.replace('0', "");
event.value.slice(0, -1);

  // return;

    }
  console.log(event.value.charAt(0));
  }
  onFunEvent(event, item) {
    // this.getAra();
    if (event.target.checked) {
      if (this.fun.length <= 9) {
        this.fun.push(item.id);
        this.fun.forEach(res => {
          if (res === item.id) {
            item.status = true
          } else {
            item.status = false
          }
        })
        // event.target.checked = false;
      } else {
        event.target.checked = false;
        this.util.showInfo('', 'you can only select maximum of 10');


      }


    } else {

      this.fun.splice(this.fun.indexOf(item.id), 1);
      this.fun.find(res=>{
        // res = item.id
        if(res = item.id){
          item.status = false
        }
      })

    }
    // console.log(this.fun);
    // console.log(event);
  }


  onKeypressEvent(event){
    const fg = this.phone;
    if(event.target.value.length === 0 && event.which === 48){
      // this.util.showError('','')
      event.preventDefault();
      this.gh = true;
    // console.log(this.regForm.value.phone.length);

      // return false;
    }else{
      this.gh = false
    }

  }
  getYear() {
    var start = new Date().getFullYear();
    for (var i = start - 18; i > start - 100; i--) {
      this.years.push(i);
    }
  }
  getMonth() {
    for (var j = 0 + 1; j < 13; j++) {
      this.months.push(j);
    }
    for (var k = 0 + 1; k < 32; k++) {
      this.days.push(k);
    }
    // console.log(this.days);
  }

  getCountry(){
    this.api.get_public('location/countries').then((data)=>{
      console.log('countries',data);

      this.Countries = data.countries;
    })
  }


  showPass(){
    this.show ? this.show = false : this.show = true;
   }

  onRelaEvent(event, item) {
    if (event.target.checked) {
      if (this.rela.length < 2) {
        this.rela.push(item.id);
        this.relaa.push(item.name);

this.rela.forEach(res => {
  if (res === item.id) {
    item.status = true
  } else {
    item.status = false
  }
})
        // event.target.checked = false;
      } else {
        event.target.checked = false;
        this.util.showInfo('', 'you can only select upto 2');


      }


    } else {

      this.rela.splice(this.rela.indexOf(item.id), 1);
      this.relaa.splice(this.rela.indexOf(item.name), 1);
      this.rela.find(res=>{
        // res = item.id
        if(res = item.id){
          item.status = false
        }
      })
    }
    console.log(this.relaa);
    // console.log(event);
  }
  first() {


    if (this.current === 1) {
      if (this.regForm.value.email) {
        if (
          this.regForm.value.email.endsWith('@gmail.com') ||
          this.regForm.value.email.endsWith('@yahoo.com') ||
          this.regForm.value.email.endsWith('@hotmail.com') ||
          this.regForm.value.email.endsWith('@outlook.com')
        ) {
          const param = {
            email: this.regForm.value.email
          }
          this.api.post_public('user/check-email-account',param).then((data:any)=>{
            console.log(data);
            if(data && data.account_exists){
          this.util.showError('', 'Email already exist, please choose another or login again.');

            }else{
              this.current = 2;

            }
          })
          // if(this.regForm.value)
        } else {
          this.util.showError('', 'Invalid email address');
        }
      } else {
        this.util.showError('', 'Please enter your email address');
      }
    } else if (this.current === 2) {
      if (this.regForm.value.password && this.regForm.value.c_pass) {
        if (this.regForm.value.password === this.regForm.value.c_pass) {
          this.current = 3;
        } else {
          this.util.showError('', 'Passwords are not the same');
        }
      } else {
        this.util.showError('', 'Please enter your password');
      }
    } else if (this.current === 3) {
      if (this.regForm.value.full_name && this.regForm.value.last_name) {
        this.current = 4;
      } else {
        if (!this.regForm.value.full_name) {
          this.util.showError('', 'Please enter your first name');

        } else {
          this.util.showError('', 'Please enter your last name');

        }
      }
    } else if (this.current === 4) {
      if (this.regForm.value.phone && this.regForm.value.cc) {
        this.submitReg();
        // this.current = 5;
      } else {
        this.util.showError('', 'Please enter your phone number');
      }
    } else if (this.current === 5) {
      if(this.country === ''){
        this.util.showError('', 'Please select your location');
        return;
      }else if(this.postal_code === ''){
        this.util.showError('', 'Please enter your postal code');
        return;
      }else{
        this.current = 6;

      }
    } else if (this.current === 6) {
      if (this.religion !== "") {
        this.current = 7;
      } else {
        this.util.showError('', 'Please select your religion');
      }

    } else if (this.current === 7) {
      if (this.day === '' || this.month === '' || this.year === '') {
        this.util.showError('', 'Please enter your Birthday');
        return;

      } else {
        this.current = 8;

      }
    } else if (this.current === 8) {
      if (this.gender === '') {
        this.util.showError('', 'Please select your gender');
        return;
      } else {
        this.current = 9;

      }
    } else if (this.current === 9) {
      if (this.looking_for === '') {
        this.util.showError('', 'Please select what you are looking for');
        return;
      }
      this.current = 10;
    } else if (this.current === 10) {
      if (this.height === '') {
        this.util.showError('', 'Please enter your height');
        return;
      }else if(this.height < 50){
        this.util.showError('','height must be greater than or equal to 50')
      }else{
        this.current = 11;
      }

    } else if (this.current === 11) {
      if (this.build === '') {
        this.util.showError('', 'Please select your build');
        return;
      }
      this.current = 12;
    } else if (this.current === 12) {
      if (this.free === '') {
        this.util.showError('', 'Please select one');
        return;
      }
      this.current = 13;
    } else if (this.current === 13) {
      if (this.drink === '') {
        this.util.showError('', 'Please select one');
        return;
      }
      this.current = 14;
    } else if (this.current === 14) {
      if (this.smoke === '') {
        this.util.showError('', 'Please select one');
        return;
      }
      this.current = 15;
    } else if (this.current === 15) {
      if (this.children === '') {
        this.util.showError('', 'Please select one');
        return;
      }
      this.current = 16;
    } else if (this.current === 16) {
      if (this.education === '') {
        this.util.showError('', 'Please select one');
        return;
      }
      this.current = 17;
      // this.getAra();

    } else if (this.current === 17) {
      if (this.fun.length === 0) {
        this.util.showError('', 'Please select atleast one');
        return;
      }
      // localStorage.setItem('fun',JSON.stringify(this.fun));
      this.current = 18;
      // console.log('th',this.fun);

    } else if (this.current === 18) {
      if (this.rela.length < 2) {
        this.util.showError('', 'Please select two');
        return;
      }


      this.current = 19;
    } else if (this.current === 19) {
      if (this.ethnicity === "") {
        this.util.showError('', 'Please select one');
        return;
      }
      this.current = 20;
    }  else if (this.current === 20) {
      if (this.prefer.length === 0) {
        this.util.showError('', 'Please select atleast one');
        return;
      }

      this.current = 21;
    } else if (this.current === 21) {
      if (this.prefer_ethnicity.length === 0) {
        this.util.showError('', 'Please select atleast one');
        return;
      }

      this.updateProfile();
      // this.current = 22;
    } else if (this.current === 22) {
      this.router.navigate(['/lovelanguagequiz']);
    }
  }

  back() {
    // this.getAra()

    if (this.current === 1) {
      this.router.navigate(['/index']);
    } else if (this.current === 5) {
      this.router.navigate(['/index']);
    } else {

      this.current -= 1;

    }
  }

  OnInputChange(event){
    var ctl = document.getElementById('myText');
    var startPos = ctl['selectionStart'];

    if (startPos == 0 && String.fromCharCode(event.which) == '0') {
      return false
    }
  }

  educ(item){
    if(this.education != item){
      this.education = item
    }else {
      this.education = '';
    }
    console.log('checking'+item);

  }

  Children(item){
    if(this.children != item){
      this.children = item
    }else {
      this.children = '';
    }
    console.log('checking'+item);

  }

  Smoke(item){
    if(this.smoke != item){
      this.smoke = item
    }else {
      this.smoke = '';
    }
    // console.log('checking'+item);

  }

  Drink(item){
    if(this.drink != item){
      this.drink = item
    }else {
      this.drink = '';
    }
    // console.log('checking'+item);

  }

  Ethnicityy(item){
    if(this.ethnicity != item){
      this.ethnicity = item
    }else {
      this.ethnicity = '';
    }
    // console.log('checking'+item);

  }



  select(religion) {
    if (this.religion != religion) {
      this.religion = religion;
    } else {
      this.religion = "";
    }

  }


  selectReligion(religion) {
    if (this.religion != religion) {
      this.religion = religion;
    } else {
      this.religion = "";
    }

  }

preferstatus(item){
  const includesTwenty = this.prefer.includes(item);
  if(!includesTwenty){
    return false
  }
  // console.log(includesTwenty);

  return true
}

preferEthnicity(item){
  const includesTwenty = this.prefer_ethnicity.includes(item);
  if(!includesTwenty){
    return false
  }
  // console.log(includesTwenty);

  return true
}

  selectPReligion(event, religion,name) {

    if (event.target.checked) {

        this.prefer.push(religion);
        this.prefer_relig.push(name);

        // event.target.checked = false;


    } else {

      this.prefer.splice(this.prefer.indexOf(religion), 1);
      this.prefer_relig.splice(this.prefer.indexOf(name), 1);



    }

    console.log(this.prefer_relig)



  }

  selectPEthnicity(event, religion) {

    if (event.target.checked) {

        this.prefer_ethnicity.push(religion);

        // event.target.checked = false;


    } else {

      this.prefer_ethnicity.splice(this.prefer.indexOf(religion), 1);


    }

    console.log(this.prefer_ethnicity)



  }


  Check(event) {
    console.log(event.target.checked);
    if (event.target.checked) {
      this.selectedItems += 1;
      if (this.selectedItems === 2) {
        event.target.checked = false;
      }
      console.log(this.selectedItems);
    } else {
      this.selectedItems -= 1;
      console.log(this.selectedItems);
    }
  }

  Pog() {
    Swal.fire({
      html: '<h2>African-American</h2><p>If you were born natively in the United States of America.</p>',
      imageUrl: '/assets/images/african-american.svg',
      imageHeight: 100,
      backdrop: false,
      showConfirmButton: false,
      timer: 2000,
    });
  }
  Afri() {
    Swal.fire({
      html: '<h2>African</h2><p>If you were born anywhere on the continent of Africa.</p>',
      imageUrl: '/assets/images/african.svg',
      imageHeight: 100,
      backdrop: false,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  Ura() {
    Swal.fire({
      html: '<h2>African-Urasian</h2><p>If you were born in Africa or moved to other countries out side of Africa or were born in another country outside of Africa or the United Sates.</p>',
      imageUrl: '/assets/images/afro-urasian.svg',
      imageHeight: 100,
      backdrop: false,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  Others() {
    Swal.fire({
      html: '<h2>Others</h2><p> If you were not born or native in Africa or other sub African countries. We still have a place for you!</p>',
      imageUrl: '/assets/images/ethnicity-other.svg',
      imageHeight: 100,
      backdrop: false,
      showConfirmButton: false,
      timer: 2000,
    });
  }

  async openSingle() {
    const modal = await this.modalCtrl.create({
      component: SinglePage,
    });
    modal.present();

    modal.onDidDismiss().then((data) => {
      console.log('single=>', 'dismiss');
    });
  }

  async openRed() {
    const modal = await this.modalCtrl.create({
      component: RedlightPage,
    });
    modal.present();

    modal.onDidDismiss().then((data) => {
      console.log('redlight=>', 'dismiss');
    });
  }

  async openLongTerm() {
    const modal = await this.modalCtrl.create({
      component: LongtermPage,
    });
    modal.present();

    modal.onDidDismiss().then((data) => {
      console.log('longterm=>', 'dismiss');
    });
  }

  async openFriends() {
    const modal = await this.modalCtrl.create({
      component: FriendzonePage,
    });
    modal.present();

    modal.onDidDismiss().then((data) => {
      console.log('friends=>', 'dismiss');
    });
  }

  changeCountry(event: any) {
    console.log('country', event.target.value);
    const country = event.target.value;
    this.country = country;
    this.api.get_public('location/states/'+country).then((data:any)=>{
      // console.log(data);
      this.States = data.states;
      if (this.States.length === 0){
        this.noState = true;
        this.noCity = true;
      }
    })
  }


  changeState(event) {
    const state = event.target.value;
    this.state = state;
    this.api.get_public('location/cities/'+state).then((data:any)=>{
      console.log(data);
      this.Cities = data.cities;
      if (this.Cities.length === 0) {
        this.noCity = true;
      }
    })
  }
  changeCity(event) {
    const city = event.target.value;
    this.city = city;

  }

  postalChange($event: any) {
    console.log($event);
    // const fg = this.phone;
    if($event.target.value.length === 6 && $event.keyCode != 8){
      // this.util.showError('','')
      // $event.preventDefault();
      // console.log(this.regForm.value.phone.length);

      return false;
    }

  }

  submitReg(){
    this.util.showLoading();
if(this.regForm.valid){

  const param = {
    email: this.regForm.value.email,
    password: this.regForm.value.password,
    name: this.regForm.value.full_name + ' '+ this.regForm.value.last_name,
    phone_code: this.regForm.value.cc,
    phone_number: this.regForm.value.phone
  }
  console.log('userss', param);
  this.api.post_public('user/create-account',param).then((data:any) => {
    this.util.hideLoading();
    if (data && data.user){
      this.util.hideLoading();
      localStorage.setItem('token', data.token);
      this.util.showSuccess('', 'Your account has been created successfully');
      this.current = 5;
    }else{
      this.util.showError('', 'Something went wrong');
    }
  })
}else{
  this.util.showError("","Please all fields are required");
}
  }
  updateProfile(){
this.util.showLoading();
    const religion = this.religion == 1 ? 'Cristianity' : this.religion == 2 ? 'Hinduism'
      : this.religion == 3 ? 'Sikhism' : this.religion == 4 ? 'Folk Religion' : this.religion == 5 ? 'Judaism' : this.religion == 6 ? 'Buddhism'
        : this.religion == 7 ? 'Irreligion' : this.religion == 8 ? 'Atheist' : 'Islam';
    const month = this.month < 10 ? '0'+this.month : this.month;
    const day = this.day < 10 ? '0'+this.day : this.day;
    const birthday = this.year+'-'+month+'-'+day;
    const param = {
      country: this.country,
      state: this.state,
      city: this.city,
      postal_code: this.postal_code,
      religion: religion,
      birthday: birthday,
      gender: this.gender,
      interest: this.looking_for,
      height: this.height,
      build: this.build,
      children: this.children,
      relationship_personality: JSON.stringify(this.relaa),
      ethnicity: this.ethnicity,
      drink: this.drink,
      smoke: this.smoke,
      build_interest: this.build,
      most_free: this.free,
      highest_education: this.education,
      preferred_religion: JSON.stringify(this.prefer_relig),
      preferred_ethnicity: JSON.stringify(this.prefer_ethnicity),
      api_token: localStorage.getItem('token'),
      onboarding_status: 1

    }
    this.api.post_private('user/update-profile-info',param).then((data:any)=>{
      this.util.hideLoading();
      if (data){
        this.util.hideLoading();
        this.util.showSuccess('',data.message);
      this.router.navigate(['/tabs']);
        
    const fun = {
      fun_places: JSON.stringify(this.fun)
    }
//     this.api.post_private('user/save-fun-places',fun).then((res:any)=>{
//       this.util.hideLoading();
// console.log(res);
//       this.util.showSuccess('',data.message);
//       this.router.navigate(['/tabs']);
//     })

      }else {
        this.util.hideLoading();
        this.util.showError('','Unable to update');
      }
    });
    // console.log(param);


  }
}
