var UserFollowersRoute = Ember.Route.extend({
	// Filter users by checking if containing currentURLuser as a followee
	model: function(){
		// return this.modelFor('user');

  	var currentURLuser = this.modelFor('user');
  	// return this.store.find('user', {followings: currentURLuser.id});
  	// console.log("= = = = = = = = =");
  	return this.store.find( "user",
		  {
		    followee: currentURLuser.id // currentUserAsFollowee
		    // skip: 40,
		  	// limit: 20
		  }
		);
  }
});
export default UserFollowersRoute;