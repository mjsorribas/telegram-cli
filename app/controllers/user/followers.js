var UserFollowersController = Ember.ArrayController.extend({
  needs: 'user',
  followee: Ember.computed.alias('controllers.user.model'),

  followers: function(){
    
    var users    = [],
        followee = this.get('followee'),
        authUser = this.get('session.user');

    if(followee.get('followedByCurrentUser')){

      this.forEach(function(object) {
        users.push(object);
      });

      if(users.indexOf(authUser) < 0 ){
        Ember.Logger.debug('I just started to follow');

        users.push(authUser);
      }

      return users;

    } else {

      this.forEach(function(object) {
        users.push(object);
      });

      if(users.indexOf(authUser) >= 0){
        Ember.Logger.debug('I just stopped to follow');

        users.splice(users.indexOf(authUser), 1);
      }

      return users;
    }

  }.property('followee.followedByCurrentUser', '@each')
});

export default UserFollowersController;