import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Cookies} from 'aurelia-plugins-cookies';
import {Router} from 'aurelia-router';
import {EmployeeServices} from './employeeservices';

@inject(HttpClient, Router, EmployeeServices)
export class List {
  constructor(httpClient, router, employeeServices, UserRecords) {
    this.httpClient = httpClient;
    this.router = router;
    this.employeeServices = employeeServices;
    this.UserRecords = [];
  }


  attached() {
    this.employeeServices.getUserList('/dataService')
      .then((User) => {
        // console.log(User);
        this.UserRecords = User;
      });
  }

  logout() {
    localStorage.clear();
    Cookies.removeAll();
    this.router.navigateToRoute('home');
  }
}
