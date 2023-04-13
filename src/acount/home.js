import {DialogService} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';
import {signup} from '../signup-dialog/signup';
import {Signin} from '../login-dialog/login';
import {AppRouter} from 'aurelia-router';

@inject(DialogService, AppRouter)
export class home {
  constructor(dialogService, router) {
    this.dialogService = dialogService;
    this.router = router;
  }
  signup() {
    this.dialogService.open({viewModel: signup, model: 'ثبت نام', lock: false}).whenClosed(response => {
      response.output;
    });
  }
  login() {
    this.dialogService.open({viewModel: Signin, model: 'ورورد کاربران', lock: false}).whenClosed(response => {
      response.output;
    });
  }
}
