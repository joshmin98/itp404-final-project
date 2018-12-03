import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('training-data', { path: 'labeled-images' });
  this.route('label', {path: '/labeled-images/:id'});
  this.route('about');
});

export default Router;
