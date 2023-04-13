import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {AureliaCookie} from 'aurelia-cookie';
import {AppRouter} from 'aurelia-router';
import {AuthInterceptor} from '../interceptor';
import {DialogController, DialogService} from 'aurelia-dialog';
@inject(HttpClient, AppRouter, AuthInterceptor, DialogController, DialogService)
export class Myservices {
  constructor(httpClient, router, au, dialogController, dialogservice) {
    this.httpClient = httpClient;
    this.router = router;
    this.au = au;
    this.httpClient.configure(config => {
      config.useStandardConfiguration()
        .withInterceptor(this.au);
    });
    this.dialogController = dialogController;
    this.dialogservice = dialogservice;
    this.loginError = '';
  }

  postLogin(address, postobj) {
    this.httpClient.fetch(address, {
      method: 'POST',
      body: JSON.stringify(postobj)
    })
      .then(result => result.json())
      .then(data => {
        if (data.error) {
          console.log(data.error.message.fa);
        }
        if (!data.error) {
          AureliaCookie.set('token', data.data.token, {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
          });
          this.router.navigateToRoute('profile');
          localStorage.setItem('username', JSON.stringify(data.data.username));
          localStorage.setItem('userid', JSON.stringify(data.data.idNumber));
          this.dialogservice.closeAll();
        }
      }).catch(error => {
        this.loginError = error.response;
      });
  }
  postchangepass(address, postobj) {
    this.httpClient.fetch(address, {
      method: 'POST',
      body: JSON.stringify(postobj)
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          console.log(data.error.message.fa);
        }
        if (!data.error) {
          AureliaCookie.set('token', data.data.token, {
            expiry: 1,
            path: '',
            domain: '',
            secure: false
          });
        }
        console.log(data);
      });
  }

  putSignup(address, putobj) {
    this.httpClient.fetch(address, {
      method: 'PUT',
      body: JSON.stringify(putobj)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.error) {
          console.log(data.error.message.fa);
        }
        if (!data.error) {
          // console.log(data);
          this.dialogservice.closeAll();
        }
      });
  }
}
