import Route from '@ember/routing/route';

export default class ItemRoute extends Route {
  model(params) {
    return params.item_id;
  }
}
