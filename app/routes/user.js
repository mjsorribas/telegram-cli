var UserRoute = Ember.Route.extend({
  model: function(user){
    return this.store.find('user', user.username);
  },

  actions: {
    followUnfollow: function(user){
      var yourself = this.get('session.user');
      Ember.Logger.debug('Authenticated user: ', yourself);
      Ember.Logger.debug('Current user: ', user);
      if(user !== yourself && yourself){
        var isfollowedByCurrentUser = user.get('followedByCurrentUser');
        Ember.Logger.debug('Are you followed by current user : ', isfollowedByCurrentUser);
        if(isfollowedByCurrentUser){
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
export default UserRoute;