import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-prilozhenie10-справ-дол-l');
  this.route('i-i-s-prilozhenie10-справ-дол-e',
  { path: 'i-i-s-prilozhenie10-справ-дол-e/:id' });
  this.route('i-i-s-prilozhenie10-справ-дол-e.new',
  { path: 'i-i-s-prilozhenie10-справ-дол-e/new' });
});

export default Router;
