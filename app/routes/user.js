var UserRoute = Ember.Route.extend({
  model: function(user){
    return this.store.find('user', user.username);
  },
  afterModel: function(user){
  	var loggedInUser = this.get('session.user');
  	console.log('======= Before Model Call ======');
  	console.log('loggedInUser: '+loggedInUser);
  	var username = user.id;
  	console.log('username: '+username);
    return $.ajax({
      url: '/api/users/'+username,
      type: 'GET',
      dataType: 'json',
      data: {},//follower: loggedInUser.id
      success: function(response) {
        console.log('response: ' + response);
      },
      error: function() {
        console.log('Error');
      }
    });
  },

  // actions: {
  //   follow: function(user){
  //     // console.log('======== FOLLOW =======');
  //     // console.log('======== Yourself ===== ' + yourself);
  //     // console.log('======== user ========= ' + user);
  //     var yourself = this.get('session.user');
  //     if(user !== yourself && yourself){
  //       var isfollowedByCurrentUser = this.get('controller.model.followedByCurrentUser');
  //       // console.log('======== isfollowedByCurrentUser : ' + isfollowedByCurrentUser);
  //       if(isfollowedByCurrentUser){
  //         this.set('controller.model.followedByCurrentUser', false);
  //       } else {
  //         this.set('controller.model.followedByCurrentUser', true);
  //       }
  //     }
  //     $.ajax({
  //       url: '/api/follow/',
  //       type: 'GET',
  //       dataType: 'json',
  //       data: {user: user.id}
  //       // success: function() {
  //       //   console.log('Follow sucess');
  //       // },
  //       // error: function() {
  //       //   console.log('Error on Follow');
  //       // }
  //     });
  //   },
  //   unfollow: function(user){
  //     var yourself = this.get('session.user');
  //     if(user !== yourself && yourself){
  //       var isfollowedByCurrentUser = this.get('controller.model.followedByCurrentUser');
  //       if(isfollowedByCurrentUser){
  //         this.set('controller.model.followedByCurrentUser', false);
  //       } else {
  //         this.set('controller.model.followedByCurrentUser', true);
  //       }
  //     }
  //     $.ajax({
  //       url: '/api/unfollow/',
  //       type: 'GET',
  //       dataType: 'json',
  //       data: {user: user.id}
  //       // success: function() {
  //       //   console.log('Unfollow sucess');
  //       // },
  //       // error: function() {
  //       //   console.log('Error on Unfollow');
  //       // }
  //     });
  //   }
  // }
});
export default UserRoute;