import {PLATFORM} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {AuthorizeStep} from './authenticated-step/AuthenticatedStep';

@inject(Router)
export class App {
  configureRouter(config, router) {
    config.options.pushState = true;
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'home'], title: 'home',   name: 'home', moduleId: PLATFORM.moduleName('./acount/home')},
      { route: 'profile', title: 'profile',  name: 'profile', moduleId: PLATFORM.moduleName('./profile/profile'), settings: { secured: true }},
      { route: 'changepass', title: 'changepass',  name: 'changepass', moduleId: PLATFORM.moduleName('./changepass/changepass'), settings: { secured: true }},
      { route: 'employee', title: 'employee',  name: 'employee', moduleId: PLATFORM.moduleName('./employee/employee'), settings: { secured: true}}
    ]);
    this.router = router;
  }
}

