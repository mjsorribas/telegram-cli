export default {

// var Session = Ember.Object.extend({
//   user: null, 
//   isAuthenticated: function(){
//     return this.get('user') != null;
//   }.property('user')
// });

// App.register('session:main', Session);
// App.inject('route', 'session', 'session:main');
// App.inject('controller', 'session', 'session:main');
  name: 'session',
  initialize: function(container, app){
    var Session = Ember.Object.extend({
      user: null, 
      isAuthenticated: function(){
        return this.get('user') != null;
      }.property('user')
    });
    app.register('session:main', Session);
    app.inject('route', 'session', 'session:main');
    app.inject('controller', 'session', 'session:main');
  }

};