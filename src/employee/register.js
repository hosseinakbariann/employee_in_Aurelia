import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Cookies} from 'aurelia-plugins-cookies';
import {EmployeeServices} from './employeeservices';

@inject(HttpClient, EmployeeServices)
export class Register {
  constructor(httpClient, employeeServices) {
    this.httpClient = httpClient;
    this.employeeServices = employeeServices;
    this.httpClient.configure(config => {
      config
        .withDefaults({
          headers: {
            'org': 'internTest3'
          }
        });
    });
    this.username = '';
    this.email = '';
    this.id = '';
    this.parent = '';
    this.data = {};
    this.regobj = {};
    this.message = '';
    this.messagecolor = '';
  }

  registeremployee() {
    this.regobj.id = this.id;
    this.regobj.parent = this.parent;
    this.data.username =  this.username;
    this.data.email =  this.email;
    this.regobj.data = this.data;
    console.log(this.regobj);
    this.employeeServices.postUser('/dataService', this.regobj).then((User) => {
      // console.log(User);
      if (User.message === 'Duplicate ID') {
        this.message = 'شماره کارمندی تکراری است';
        this.messagecolor = 'alert alert-danger';
      } if (User.message === 'Data Saved') {
        this.message = 'ثبت کارمند با موفقیت انجام شد';
        this.messagecolor = 'alert alert-success';
      } else {
        this.message = 'خطا در انجام عملیات';
        this.messagecolor = 'alert alert-danger';
      }
    });
  }

  logout() {
    localStorage.clear();
    Cookies.removeAll();
    this.router.navigateToRoute('home');
  }
}
