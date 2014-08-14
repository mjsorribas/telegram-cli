var UserFollowersController = Ember.ArrayController.extend({
	needs: 'user',
	followee: Ember.computed.alias('controllers.user.model'),
	followers: function(){
		var followee 					= this.get('followee'),
				authenticatedUser = this.get('session.user'),
				users = [];

		if(followee.get('followedByCurrentUser')){

			this.forEach(function(object) {
				users.push(object);
			});
			if(users.indexOf(authenticatedUser) < 0 ){//&& followee === authenticatedUser
				Ember.Logger.debug('I just started to follow');
				users.push(authenticatedUser);
			}
			return users;
		} else {
			this.forEach(function(object) {
				users.push(object);
			});
			if(users.indexOf(authenticatedUser) >= 0 && followee === authenticatedUser){
				Ember.Logger.debug('I just stopped to follow');
				users.splice(users.indexOf(authenticatedUser), 1);
			}
			return users;
		}
  }.property('followee.followedByCurrentUser', '@each')
});
export default UserFollowersController;