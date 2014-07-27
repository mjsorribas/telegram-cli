// var UserFollowersController = Ember.ArrayController.extend({
// 	needs: 'user', // Load UserRoute's returned users (followers)
// 	followee: Ember.computed.alias('controllers.user.model'),
// 	followers: function(){
// 		var followee = this.get('followee');
// 		var authenticatedUser = this.get('session.user');

// 		if(followee.get('followedByCurrentUser')){ // following now
// 			// Include authenticated user
// 			var users = [];
// 			users.push(this);
// 			if(this.indexOf(authenticatedUser) < 0){
// 				users.push(authenticatedUser);
// 			}
// 			return users;
// 		} else { // not following yet
// 			// Exclude authenticated user 
// 			var users = this;
// 			var index = users.indexOf(authenticatedUser);
// 			if(index >= 0){
// 				// users.splice(index, 1);		
// 				delete users[authenticatedUser];
// 			}
// 			return users;
// 		}
//   }.property('followee.followedByCurrentUser', '@each') // @each or []
// });

// export default UserFollowersController;


var UserFollowersController = Ember.ArrayController.extend({
	needs: 'user',
	followee: Ember.computed.alias('controllers.user.model'),
	followers: function(){
		var followee = this.get('followee');
		var authenticatedUser = this.get('session.user');

		var users = [];
		users.push(this);
		if(followee.get('followedByCurrentUser')){
			// this === this.get('followers')
			return users;
		} else {
			return users;
		}
  }.property('followee.followedByCurrentUser', '@each')
});
export default UserFollowersController;