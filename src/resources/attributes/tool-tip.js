import {bindable, inject} from 'aurelia-framework';
import 'bootstrap';

@inject(Element)
export class ToolTipCustomAttribute {
  @bindable title;
  constructor(element) {
    this.element = element;
    this.title = '';
  }
  attached() {
    $(this.element).tooltip({
      title: '',
      placement: 'top'
    });
  }
}

