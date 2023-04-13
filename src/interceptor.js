import {inject} from 'aurelia-framework';
import {ConsoleAppender} from './ConsoleAppender';

@inject(ConsoleAppender)
export class AuthInterceptor {
  constructor(consoleAppender) {
    this.consoleAppender = consoleAppender;
  }

  request(message) {
    this.consoleAppender.info({type: 'info', message: 'درخواست ارسال شد'});
    return message;
  }
  requestError(error) {
    this.consoleAppender.error({type: 'error', message: 'خطا در ارسال درخواست'});
    throw error;
  }

  responseError(error) {
    this.consoleAppender.error({type: 'error', message: 'خطا در دریافت پاسخ'});
    return error;
  }
  response(response) {
    this.consoleAppender.info({type: 'info', message: 'پاسخ با موفقیت دریافت شد'});
    return response;
  }
}
