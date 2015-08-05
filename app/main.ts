/// <reference path="typings/angular2/angular2.d.ts" />

import 'zone.js';
import 'reflect-metadata';
import 'es6-shim';

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app',
})
@View({
  template: '<h1>Hello {{ name }}</h1',
})
class MyAppComponent {
  name: string;

  constructor() {
    this.name = 'Jack';
  }
}

bootstrap(MyAppComponent);

