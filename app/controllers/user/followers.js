var UserFollowersController = Ember.ArrayController.extend({
  needs: 'user',
  followee: Ember.computed.alias('controllers.user.model'),

  followers: function(){
    
    var followersList = [];
    var followee      = this.get('followee');
    var authUser      = this.get('session.user');

    this.forEach(function(object) {
      Ember.Logger.debug('each follower: ', object);
      followersList.push(object);
    });

    if(followee === authUser){
      Ember.Logger.debug('Remove myself at my page');
      followersList.splice(followersList.indexOf(authUser), 1);
    }

    if(!followee.get('followedByCurrentUser')){
      if(followersList.indexOf(authUser) >= 0 && followee !== authUser){

        Ember.Logger.debug('I just stopped to follow at', followee.get('username'), 'page');
        followersList.splice(followersList.indexOf(authUser), 1);
      }     
    }

    // if(followee.get('followedByCurrentUser')){
    //   if(followersList.indexOf(authUser) < 0 ){

    //     Ember.Logger.debug('I just started to follow');
    //     followersList.push(authUser);
    //   }

    // } else {
    //   if(followersList.indexOf(authUser) >= 0 && followee !== authUser){

    //     Ember.Logger.debug('I just stopped to follow at someones page');
    //     followersList.splice(followersList.indexOf(authUser), 1);
    //   }
    // }

    return followersList;

  }.property('followee.followedByCurrentUser', '@each')
});

export default UserFollowersController;