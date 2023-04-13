import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import {EmployeeServices} from './employeeservices';

@inject(HttpClient, Router, EmployeeServices)
export class Register {
  constructor(httpClient, router, employeeServices) {
    this.httpClient = httpClient;
    this.router = router;
    this.employeeServices = employeeServices;
    this.mydata = {};
    this.regobj = {};
    this.message = '';
    this.messagecolor = '';
    this.resmessage = '';
  }
  activate(params) {
    this.employeeServices.getCurrentUser('/dataService?id=' + params.id).then((User) => {
      this.UserRecords = User[0];
    });
  }
  Editinformation() {
    this.regobj.id = this.UserRecords.id;
    this.regobj.parent = this.UserRecords.parent;
    this.mydata.username = this.UserRecords.data.username;
    this.mydata.email =  this.UserRecords.data.email;
    this.regobj.data = this.mydata;
    console.log(this.regobj);
    this.resmessage = this.employeeServices.postEditUser('/dataService', this.regobj);
  }
}
