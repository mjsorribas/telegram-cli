var UserRoute = Ember.Route.extend({
  // beforeModel: function(){
  //   if(!this.get('session.user')) {
  //     this.transitionTo('auth.login');
  //   }
  // },
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
            // .done(function(){console.log('DONE UNFOLLOW');})
            // .fail(function(){console.log('ERR UNFOLLOW');})
            // .always(function(){console.log('ALW UNFOLLOW');});
        } else {
          user.set('followedByCurrentUser', true);
          $.ajax({
            url: '/api/follow/',
            type: 'GET',
            dataType: 'json',
            data: {user: user.id}
            // success: function() {
            //   console.log('Follow sucess');
            // },
            // error: function() {
            //   console.log('Error on Follow');
            // }
          });
        }
      }
    }
  }
});
export default UserRoute;