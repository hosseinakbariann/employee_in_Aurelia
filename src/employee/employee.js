import {PLATFORM} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class employee {
  configureRouter(config, router) {
    config.options.pushState = true;
    config.map([
      {route: ['/register'], title: 'register', name: 'register', moduleId: PLATFORM.moduleName('./register'), nav: true},
      {route: ['/list'], title: 'list', name: 'list', moduleId: PLATFORM.moduleName('./list'), nav: true},
      {route: ['/:id'], name: 'userDetail', moduleId: PLATFORM.moduleName('./EditEmployee')},
      {route: ['/'], redirect: '/list'}
    ]);
    this.router = router;
  }
}

