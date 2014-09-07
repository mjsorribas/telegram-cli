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
      Ember.Logger.debug('beforeModel Not logged-in yet / failed to login');
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
    },

    followUnfollow: function(user){
      Ember.Logger.debug('followUnfollow app');
      var myself = this.get('session.user');

      Ember.Logger.debug('Authenticated user: ', myself, 'Current user: ', user);

      if(user !== myself && myself){

        var isFollowedByMe = user.get('followedByCurrentUser');

        Ember.Logger.debug('Are you followed by current user : ', isFollowedByMe);

        if(isFollowedByMe){
          user.set('followedByCurrentUser', false);

          Ember.Logger.debug('Send unfollow request to server');

          $.ajax({
            url: '/api/unfollow/',
            type: 'GET',
            dataType: 'json',
            data: {user: user.id}
          });

        } else {
          user.set('followedByCurrentUser', true);

          Ember.Logger.debug('Send follow request to server');

          $.ajax({
            url: '/api/follow/',
            type: 'GET',
            dataType: 'json',
            data: {user: user.id}
          });
        }
      }
    }
  }

});
export default ApplicationRoute;