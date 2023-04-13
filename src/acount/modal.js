import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import {AppRouter} from 'aurelia-router';
@inject(DialogController, AppRouter)

export class Prompt {
  constructor(controller, router) {
    this.controller = controller;
    this.router = router;
  }
}

