var ApplicationRoute = Ember.Route.extend({

  beforeModel: function() {
    var _this = this;

    var onSuccess = function(response){
      var authenticatedUser = response.get('firstObject');

      Ember.Logger.debug('beforeModel - Logged-in user : ', authenticatedUser);

      var user = _this.store.push('user', authenticatedUser);
      _this.set('session.user', user);
    };

    var onFail = function(){
      Ember.Logger.error('beforeModel failed login');
      _this.set('error', "The user doesn't exist");
    };

    return this.store.find('user', {isAuthenticated: true}).then(onSuccess, onFail);
  },

  actions: {
    logout: function(){
      var _this = this;

      $.get('/api/logout')
        .done(function(){
          Ember.Logger.debug('LOGOUT-Ember-done');

          _this.transitionTo('auth.login');
        })
        .fail(function(){
          Ember.Logger.error('LOGOUT-Ember-fail');
        })
        .always(function(){
          Ember.Logger.debug('LOGOUT-Ember-always');
        });
    }
  }
});
export default ApplicationRoute;