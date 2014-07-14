export default Ember.Component.extend({
  isYou: function(){
    return this.get('user') === this.get('session.user');
  }.property('user', 'session.user'),

  actions: {
    // Need to make 'FOLLOW/UNFOLLOW' persistent
    follow: function(user){
      var yourself = this.get('session.user');
      if(user !== yourself && yourself){
        var followed = this.get('controller').get('user.followedByCurrentUser');
        if(followed === true){
          this.get('controller').set('user.followedByCurrentUser', false);
        } else {
          this.get('controller').set('user.followedByCurrentUser', true);
        }
      }
      console.log(user);
      $.ajax({
        url: '/api/follow/',
        type: 'GET',
        dataType: 'json',
        data: {user: user.id},
        success: function(response) {
          console.log('response: ' + response);
        },
        error: function() {
          console.log('Error');
        }
      });
    }
  }
});