var UserFollowersRoute = Ember.Route.extend({
	model: function(){
  	var thisUser = this.modelFor('user');
  	// return this.store.find('user', {'followings': thisUser.id});
  	return this.store.filter(
		  "user",
		  {
		    followings: thisUser.id
		    // skip: 40,
		  	// limit: 20
		  },
		  function(user) {
		    return user.get('user') === user;
		  }
		);
  }
});
export default UserFollowersRoute;