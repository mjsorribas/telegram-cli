var UserFollowersController = Ember.ArrayController.extend({
	needs: 'user', // Load UserRoute's returned users (followers)
	followee: Ember.computed.alias('controllers.user.model'),
	followers: function(){
		var followee = this.get('followee');
		var authenticatedUser = this.get('session.user');

		if(followee.get('followedByCurrentUser')){ // following now
			// Include authenticated user
			var users = [];
			users.push(this);
			if(this.indexOf(authenticatedUser) < 0){
				users[0].push(authenticatedUser);
			}
			return users[0];
		} else { // not following yet
			// Exclude authenticated user 
			var users = this;
			var index = users.indexOf(authenticatedUser);
			if(index >= 0){
				// users.splice(index, 1);		
				delete users[authenticatedUser];
			}
			return users;
		}
  }.property('followee.followedByCurrentUser', '[]') // @each or []
});

export default UserFollowersController;