export default {
  name: 'session',
  initialize: function(container, app){
    app.deferReadiness();
    $.get("/api/users/", function(data) {
      // Check if already logged
      app.advanceReadiness();
    });

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