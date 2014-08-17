var UserFollowingController = Ember.ArrayController.extend({
  needs: 'user',
  follower: Ember.computed.alias('controllers.user.model'),

  followees: function(){

    var followeesList = [];
    var follower      = this.get('follower');
    var authUser      = this.get('session.user');

    this.forEach(function(object){
      Ember.Logger.debug('each followee: ', object);
      Ember.Logger.debug('Each followee to be pushed: ', object);

      followeesList.push(object);
    
      if(object.get('followedByCurrentUser')){
        if(followeesList.indexOf(object) < 0){

          Ember.Logger.debug('A followee I follow: ', object);
          followeesList.push(object);
        }

      } else {
        Ember.Logger.debug('A followee I dont follow: ', object);

        if(followeesList.indexOf(object) >= 0 && follower === authUser){

          Ember.Logger.debug('I just stopped following (at my following page): ', object);
          followeesList.splice(followeesList.indexOf(object), 1);
        } 
      }    
    });

    if(followeesList.indexOf(authUser) >= 0){
      Ember.Logger.debug('Remove 1 occurence of authUser added for loading authUser');
      followeesList.splice(followeesList.indexOf(authUser), 1);
    }   

    return followeesList;

  }.property('@each.followedByCurrentUser', '@each')
});

export default UserFollowingController;