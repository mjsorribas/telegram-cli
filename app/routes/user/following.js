var UserFollowingRoute = Ember.Route.extend({
	// Filter users by checking if containing currentURLuser as a follower
	model: function(){
		// return this.modelFor('user');
  	var currentURLuser = this.modelFor('user');
  	// return this.store.find('user', {followers: currentURLuser.id});
  	// console.log("= = = = = = = = =");
		return this.store.filter(
		  "user",
		  {
		    follower: currentURLuser.id
		    // skip: 40,
		  	// limit: 20
		  },
		  function(user) {
		  	return user.get('followedByCurrentUser');
		  	// console.log(user);
		   //  return user.get('user') === user;
		  }
		);
  }
});
export default UserFollowingRoute;