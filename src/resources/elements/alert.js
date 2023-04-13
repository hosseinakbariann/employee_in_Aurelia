import {bindable} from 'aurelia-framework';

export class Alert {
  @bindable response;
  @bindable responsecolor;
  constructor() {
    this.response = '';
  }
}

