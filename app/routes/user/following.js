var UserFollowingRoute = Ember.Route.extend({
	model: function(){
  	var thisUser = this.modelFor('user');
  	// return this.store.find('user', {'followers': thisUser.id});
		return this.store.filter(
		  "user",
		  {
		    followers: thisUser.id
		    // skip: 40,
		  	// limit: 20
		  },
		  function(user) {
		    return user.get('user') === user;
		  }
		);
  }
});
export default UserFollowingRoute;