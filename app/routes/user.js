var UserRoute = Ember.Route.extend({

  // actions: {
  //   followUnfollow: function(user){
  //     var myself = this.get('session.user');

  //     Ember.Logger.debug('Authenticated user: ', myself, 'Current user: ', user);

  //     if(user !== myself && myself){

  //       var isFollowedByMe = user.get('followedByCurrentUser');

  //       Ember.Logger.debug('Are you followed by current user : ', isFollowedByMe);

  //       if(isFollowedByMe){
  //         user.set('followedByCurrentUser', false);

  //         Ember.Logger.debug('Send unfollow request to server');

  //         $.ajax({
  //           url: '/api/unfollow/',
  //           type: 'GET',
  //           dataType: 'json',
  //           data: {user: user.id}
  //         });

  //       } else {
  //         user.set('followedByCurrentUser', true);

  //         Ember.Logger.debug('Send follow request to server');

  //         $.ajax({
  //           url: '/api/follow/',
  //           type: 'GET',
  //           dataType: 'json',
  //           data: {user: user.id}
  //         });
  //       }
  //     }
  //   }
  // }

});
export default UserRoute;