var UserFollowersRoute = Ember.Route.extend({
	model: function(){
		// return this.modelFor('user');
  	var thisUser = this.modelFor('user');
  	// return this.store.find('user', {followings: thisUser.id});
  	// console.log("= = = = = = = = =");
  	return this.store.filter(
		  "user",
		  {
		    followings: thisUser.id
		    // skip: 40,
		  	// limit: 20
		  },
		  function(user) {
		  	// console.log(user);
		    return user.get('user') === user;
		  }
		);
  }
});
export default UserFollowersRoute;