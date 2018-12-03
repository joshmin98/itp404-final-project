import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Labeled Images',
  model(params) {
    return this.store.findRecord('label', params.id);
  }
});
