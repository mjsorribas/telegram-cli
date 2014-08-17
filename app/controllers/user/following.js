var UserFollowingController = Ember.ArrayController.extend({
  needs: 'user',
  follower: Ember.computed.alias('controllers.user.model'),

  followees: function(){

    var followeesList = [];
    var follower      = this.get('follower');
    var authUser      = this.get('session.user');

    this.forEach(function(object){
      Ember.Logger.debug('each followee: ', object);
      // if(follower !== authUser && object !== follower && object !== authUser){
        Ember.Logger.debug('Each followee to b pushed: ', object);
        followeesList.push(object);
      // }

      // remove self at someone's place if he not follow me
    
      if(object.get('followedByCurrentUser')){
        if(followeesList.indexOf(object) < 0){

          Ember.Logger.debug('A followee I follow: ', object);
          followeesList.push(object);
        }

      } else {
        Ember.Logger.debug('A followee I dont follow: ', object);

        if(followeesList.indexOf(object) >= 0 && follower === authUser){ // At my page

          Ember.Logger.debug('I just stopped following (at my following page): ', object);
          followeesList.splice(followeesList.indexOf(object), 1);

        } 
        // else if(followeesList.indexOf(object) >= 0 &&  !object.get('followingCurrentUser') && object === authUser){

        //   Ember.Logger.debug('Removing myself at someones page: ', object);
        //   followeesList.splice(followeesList.indexOf(object), 1);
        // }
      }    

    });

    return followeesList;

  }.property('@each.followedByCurrentUser', '@each')
});

export default UserFollowingController;