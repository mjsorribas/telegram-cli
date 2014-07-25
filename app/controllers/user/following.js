var UserFollowingController = Ember.ArrayController.extend({
	followees: function(){
  // 	console.log(" === ==== UserFollowingController ==== ===");
		// console.log(this);
		return this;
  }.property('@each.followingCurrentUser')
});

export default UserFollowingController;