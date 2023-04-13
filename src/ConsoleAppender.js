import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class ConsoleAppender {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
    this.subscribe();
  }
  debug(param) {
    this.eventAggregator.publish('logger', param);
  }
  info(param) {
    this.eventAggregator.publish('logger', param);
  }
  warn(param) {
    this.eventAggregator.publish('logger', param);
  }
  error(param) {
    this.eventAggregator.publish('logger', param);
  }

  subscribe() {
    this.eventAggregator.subscribe('logger', param => {
      if (param.type === 'error') {
        console.error(param.message);
      }
      if (param.type === 'info') {
        console.info(param.message);
      }
      if (param.type === 'warning') {
        console.warn(param.message);
      }
      if (param.type === 'debug') {
        console.debug(param.message);
      }
    });
  }
}

