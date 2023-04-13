import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Cookies} from 'aurelia-plugins-cookies';

@inject(Router)
export class profile {
  constructor(router) {
    this.username = localStorage.username;
    this.userid = localStorage.userid;
    this.router = router;
  }

  logout() {
    localStorage.clear();
    Cookies.removeAll();
    this.router.navigateToRoute('home');
  }
}

