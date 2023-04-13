import {inject} from 'aurelia-framework';
import {DialogController, DialogService} from 'aurelia-dialog';
import {HttpClient} from 'aurelia-fetch-client';
import {ValidationController, ValidationRules, Validator, validationMessages} from 'aurelia-validation';
import {Myservices} from '../acount/httservices';

@inject(Myservices, DialogController, HttpClient, ValidationController, ValidationRules, Validator, validationMessages, DialogService)

export class signup {
  constructor(myserv, dialogcontroller, httpClient, router, dialogservice) {
    this.myserv = myserv;
    this.dialogcontroller = dialogcontroller;
    this.dialogservice = dialogservice;
    this.router = router;
    this.httpClient = httpClient;
    this.username = '';
    this.password = '';
    this.idNumber = '';
    this.email = '';
    this.type = 'real';
    this.signdata = {};
    this.usernametooltip = 'نام کاربری شامل عدد وحروف';
    this.passwordtooltip = 'رمز عبور حداقل 6 رقم شامل عدد وحروف';
    this.idnumbertooltip = 'حداقل 10 رقم به صورت 5 رقم و معکوس آن (1234554321)';
    this.emailtooltip = 'user@server.com';
    ValidationRules.customRule('nationalidvalid',
      (input) => this.isValidIranianNationalCode(input) === true,
      'فرمت صحیح کد ملی را وارد نمایید',
    );

    this.validator = ValidationRules
      .ensure('username').required().withMessage('نام کاربری را وارد نمایید')
      .ensure('password').required().withMessage('رمز عبور را وارد نمایید')
      .minLength(6).withMessage('رمز عبور حداقل باید 6 رقم باشد')
      .ensure('email').required().withMessage('ایمیل را وارد نمایید').email().withMessage('فرمت ایمیل صحیح نیست')
      .ensure('idNumber').satisfiesRule('nationalidvalid')
      .on(this);
    this.formresponse = '';
    this.succesresponse = '';
  }

  isValidIranianNationalCode(input) {
    if (!/^\d{10}$/.test(input)) {return false;}
    let check = +input[9];
    let sum = Array(9).fill().map((_, i) => +input[i] * (10 - i)).reduce((x, y) => x + y) % 11;
    return (sum < 2 && check === sum) || (sum >= 2 && check + sum === 11);
  }

  postsignup() {
    this.signdata.username = this.username;
    this.signdata.password = this.password;
    this.signdata.idNumber = this.idNumber;
    this.signdata.email = this.email;
    this.signdata.type = this.type;
    this.myserv.putSignup('/app/userProfile/signUp', this.signdata);
  }
}

