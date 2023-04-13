import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
// import {AureliaCookie} from 'aurelia-cookie';
import {Cookies} from 'aurelia-plugins-cookies';
import {Myservices} from '../acount/httservices';

@inject(Myservices, Router, HttpClient)
export class changepass {
  constructor(myserv, router, controller, httpClient) {
    this.myserv = myserv;
    this.router = router;
    this.controller = controller;
    this.httpClient = httpClient;
    this.username = '';
    this.newPassword = '';
    this.email = '';
    this.idNumber = '';
    this.signdata = {};
    this.formresponse = '';
    this.succesresponse = '';
  }
  changepost() {
    this.signdata.username = this.username;
    this.signdata.newPassword = this.newPassword;
    this.signdata.idNumber = this.idNumber;
    this.signdata.email = this.email;
    this.myserv.postchangepass('/app/userProfile/changePass?', this.signdata);
  }

  logout() {
    localStorage.clear();
    Cookies.removeAll();
    this.router.navigateToRoute('home');
  }
}
