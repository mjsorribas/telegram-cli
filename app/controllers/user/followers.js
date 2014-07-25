var UserFollowersController = Ember.ArrayController.extend({
	followers: function(){
		// console.log(" === ==== UserFollowersController ==== ===");
		// console.log(this);
		return this;
  }.property('@each.followedByCurrentUser')
});

export default UserFollowersController;