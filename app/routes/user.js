var UserRoute = Ember.Route.extend({
  model: function(user){
    return this.store.find('user', user.username);
  },

  actions: {
    followUnfollow: function(user){
      // console.log('======== FOLLOW =======');
      // console.log('======== user ========= ' + user);
      var yourself = this.get('session.user');
      // console.log('======== Yourself ===== ' + yourself);
      if(user !== yourself && yourself){
        var isfollowedByCurrentUser = user.get('followedByCurrentUser');
        // console.log('======== isfollowedByCurrentUser : ' + isfollowedByCurrentUser);
        if(isfollowedByCurrentUser){
          user.set('followedByCurrentUser', false);
          $.ajax({
            url: '/api/unfollow/',
            type: 'GET',
            dataType: 'json',
            data: {user: user.id}
          });
        } else {
          user.set('followedByCurrentUser', true);
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