var UserController = Ember.ObjectController.extend({
  isYou: function(){
    return this.get('model') === this.get('session.user');
  }.property('model', 'session.user'),

  actions: {
    follow: function(user){
      // console.log('======== FOLLOW =======');
      // console.log('======== Yourself ===== ' + yourself);
      // console.log('======== user ========= ' + user);
      var yourself = this.get('session.user');
      if(user !== yourself && yourself){
        var isfollowedByCurrentUser = this.get('model.followedByCurrentUser');
        // console.log('======== isfollowedByCurrentUser : ' + isfollowedByCurrentUser);
        if(isfollowedByCurrentUser){
          this.set('model.followedByCurrentUser', false);
        } else {
          this.set('model.followedByCurrentUser', true);
        }
      }
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
    },
    unfollow: function(user){
      var yourself = this.get('session.user');
      if(user !== yourself && yourself){
        var isfollowedByCurrentUser = this.get('model.followedByCurrentUser');
        if(isfollowedByCurrentUser){
          this.set('model.followedByCurrentUser', false);
        } else {
          this.set('model.followedByCurrentUser', true);
        }
      }
      $.ajax({
        url: '/api/unfollow/',
        type: 'GET',
        dataType: 'json',
        data: {user: user.id}
        // success: function() {
        //   console.log('Unfollow sucess');
        // },
        // error: function() {
        //   console.log('Error on Unfollow');
        // }
      });
    }
  }
});

export default UserController;