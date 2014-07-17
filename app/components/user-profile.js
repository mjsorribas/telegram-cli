export default Ember.Component.extend({
  isYou: function(){
    return this.get('user') === this.get('session.user');
  }.property('user', 'session.user'),

  actions: {
    follow: function(user){
      var yourself = this.get('session.user');
      if(user !== yourself && yourself){
        var isfollowedByCurrentUser = this.get('controller').get('user.followedByCurrentUser');
        if(isfollowedByCurrentUser){
          this.get('controller').set('user.followedByCurrentUser', false);
        } else {
          this.get('controller').set('user.followedByCurrentUser', true);
        }
      }
      $.ajax({
        url: '/api/follow/',
        type: 'GET',
        dataType: 'json',
        data: {user: user.id},
        success: function(response) {
          console.log(' ==== Follow response: ' + response);
        },
        error: function() {
          console.log('Error on Follow');
        }
      });
    },
    unfollow: function(user){
      var yourself = this.get('session.user');
      if(user !== yourself && yourself){
        var isfollowedByCurrentUser = this.get('controller').get('user.followedByCurrentUser');
        if(isfollowedByCurrentUser){
          this.get('controller').set('user.followedByCurrentUser', false);
        } else {
          this.get('controller').set('user.followedByCurrentUser', true);
        }
      }
      $.ajax({
        url: '/api/unfollow/',
        type: 'GET',
        dataType: 'json',
        data: {user: user.id},
        success: function(response) {
          console.log(' ==== Unfollow response: ' + response);
        },
        error: function() {
          console.log('Error on Unfollow');
        }
      });
    }
  }
});