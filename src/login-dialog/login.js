import {inject} from 'aurelia-framework';
import {DialogController, DialogService} from 'aurelia-dialog';
import {AppRouter} from 'aurelia-router';
import {Myservices} from '../acount/httservices';

@inject(DialogController, AppRouter, DialogService, Myservices)

export class Signin {
  constructor(dialogController, router, dialogservice, myserv) {
    this.dialogController = dialogController;
    this.dialogservice = dialogservice;
    this.router = router;
    this.myserv = myserv;
    this.username = '';
    this.password = '';
    this.signdata = {};
    this.userid = '';
  }

  getdata() {
    this.signdata.username = this.username;
    this.signdata.password = this.password;
    this.myserv.postLogin('/app/userProfile/login', this.signdata);
  }
}

