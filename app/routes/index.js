import Route from '@ember/routing/route';

export default Route.extend({
  title: 'Image Classifier',
  model() {
    return this.store.findAll('label');
  }
});
