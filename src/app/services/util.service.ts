import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {LoadingController} from "@ionic/angular";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private toastr: ToastrService,   private loadingCtrl: LoadingController, private spinner: NgxSpinnerService
  ) { }

  async showSuccess(title, message) {
    await this.toastr.success(title, message, {
      timeOut: 3000,
    });
  }
  async showError(title, message) {
    await this.toastr.error(title, message, {
      timeOut: 3000,
    });
  }
  async showInfo(title, message) {
    await this.toastr.info(title, message, {
      timeOut: 3000,
    });
  }

  async showLoading() {
    this.spinner.show();
  }

  async hideLoading() {
    await this.spinner.hide();
  }
}
