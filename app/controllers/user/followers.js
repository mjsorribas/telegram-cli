var UserFollowersController = Ember.ArrayController.extend({
	needs: 'user',
	followee: Ember.computed.alias('controllers.user.model'),
	followers: function(){
		var followee 					= this.get('followee'),
				authenticatedUser = this.get('session.user'),
				users = [];
		// Update the followers list of the user whom authenticatedUser is visisting now
		if(followee.get('followedByCurrentUser')){
			this.forEach(function(object) {
				users.push(object);
			});
			if(users.indexOf(authenticatedUser) < 0){
				users.push(authenticatedUser);
			}
			return users;
		} else {
			this.forEach(function(object) {
				users.push(object);
			});
			if(users.indexOf(authenticatedUser) >= 0){
				users.splice(users.indexOf(authenticatedUser), 1);
			}
			return users;
		}
  }.property('followee.followedByCurrentUser', '@each')
});
export default UserFollowersController;