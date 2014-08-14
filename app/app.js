import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'telegram-cli',
  Resolver: Resolver,
});

loadInitializers(App, 'telegram-cli');

export default App;
