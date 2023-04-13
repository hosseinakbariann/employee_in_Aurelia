import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {Router} from 'aurelia-router';

@inject(HttpClient, Router)

export class EmployeeServices {
  constructor(httpClient, router) {
    this.UserRecords = [];
    this.httpClient = httpClient;
    this.httpClient.configure(config => {
      config
        .withDefaults({
          headers: {
            'Content-Type': 'application/json',
            'org': 'internTest3'
          }
        });
    });
    this.router = router;
  }

  postUser(address, objdata) {
    return this.httpClient.fetch(address, {
      method: 'PUT',
      body: JSON.stringify(objdata)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        return data;
      });
  }
  getUserList(address) {
    return this.httpClient.fetch(address)
      .then(response => response.json())
      .then(data =>  {
        return data;
      });
  }
  getCurrentUser(address) {
    return this.httpClient.fetch(address, {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }

  postEditUser(address, objdata) {
    this.httpClient.fetch(address, {
      method: 'POST',
      body: JSON.stringify(objdata)
    })
      .then(response => response.json())
      .then(data => {
        return data;
      });
  }
}
