var UserFollowingRoute = Ember.Route.extend({
	model: function(){
		// return this.modelFor('user');
  	var thisUser = this.modelFor('user');
  	// return this.store.find('user', {followers: thisUser.id});
  	console.log("= = = = = = = = =");
		return this.store.filter(
		  "user",
		  {
		    followers: thisUser.id
		    // skip: 40,
		  	// limit: 20
		  },
		  function(user) {
		  	console.log(user);
		    return user.get('user') === user;
		  }
		);
  }
});
export default UserFollowingRoute;