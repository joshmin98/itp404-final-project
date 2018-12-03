import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Labels',
  model() {
    return this.store.findAll('label');
  }
});
