import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-kursovaya-rabota-должность-l');
  this.route('i-i-s-kursovaya-rabota-должность-e',
  { path: 'i-i-s-kursovaya-rabota-должность-e/:id' });
  this.route('i-i-s-kursovaya-rabota-должность-e.new',
  { path: 'i-i-s-kursovaya-rabota-должность-e/new' });
});

export default Router;
