var UserFollowingController = Ember.ArrayController.extend({
  needs: 'user',
  follower: Ember.computed.alias('controllers.user.model'),

  followees: function(){

    var users    = [],
        follower = this.get('follower'),
        authUser = this.get('session.user');

    this.forEach(function(object) {

      users.push(object);

      if(object.get('followedByCurrentUser')){
        if(users.indexOf(object) < 0){

          Ember.Logger.debug('A followee I just started to follow: ', object);
          users.push(object);
        }
      } else {
        Ember.Logger.debug('A followee: ', object);

        if(users.indexOf(object) >= 0 && follower === authUser){

          Ember.Logger.debug('A followee I just stopped to follow: ', object);
          users.splice(users.indexOf(object), 1);
        }
      }
    });

    return users;

  }.property('@each.followedByCurrentUser', '@each')
});

export default UserFollowingController;