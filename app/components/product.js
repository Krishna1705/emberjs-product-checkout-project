import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class ProductComponent extends Component {
  @tracked number = 0;

  @action
  addNumber() {
    this.number++;
  }
}
