var UserFollowingRoute = Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },
	// Filter users by checking if containing currentURLuser as a follower
	model: function(){
  	var currentURLuser = this.modelFor('user');
		return this.store.find("user",
		  {
		    follower: currentURLuser.id // currentUserAsFollower
		    // skip: 40,
		  	// limit: 20
		  }
		);
  }
});
export default UserFollowingRoute;