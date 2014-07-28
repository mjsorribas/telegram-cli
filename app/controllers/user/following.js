var UserFollowingController = Ember.ArrayController.extend({
 	needs: 'user',
	follower: Ember.computed.alias('controllers.user.model'),
	followees: function(){
		// var follower 					= this.get('follower'), // authenticatedUser
		// 		authenticatedUser = this.get('session.user'),
		var	users = [];
		// console.log('============= CHECK =============');
		// Update the followers list of the user whom authenticatedUser is visisting now

		this.forEach(function(object) {
			users.push(object);
			if(object.get('followedByCurrentUser')){
				console.log(object);
				if(users.indexOf(object) < 0){
					users.push(object);
				}
			} else {
				console.log(object);
				if(users.indexOf(object) >= 0){
					users.splice(users.indexOf(object), 1);
				}
			}
		});
		// console.log(users);
		return users;
  }.property('@each.followedByCurrentUser', '@each')
});

export default UserFollowingController;