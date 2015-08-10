import {Component, View, NgFor} from 'angular2/angular2';
import template from './friends-component.template.html!text';

import { List } from 'immutable';

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
    this.friends = List(['Jack', 'Sam', 'Max']);
  }

  addFriend(name: string) {
    this.friends = this.friends.push(name);
  }
}
