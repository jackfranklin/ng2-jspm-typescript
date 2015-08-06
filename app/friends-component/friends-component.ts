import {Component, View, NgFor} from 'angular2/angular2';
import template from './friends-component.template.html!text';

@Component({
  selector: 'friends-list',
})
@View({
  template: template,
  directives: [NgFor],
})
export default class FriendsComponent {
  name: string;
  friends: Array<string>;

  constructor() {
    this.name = 'Jack';
    this.friends = ['Sam', 'Max', 'Jamie'];
  }
}
