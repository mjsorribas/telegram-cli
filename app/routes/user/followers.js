var UserFollowersRoute = Ember.Route.extend({
  beforeModel: function(){
    if(!this.get('session.user')) {
      this.transitionTo('auth.login');
    }
  },
	// Filter users by checking if containing currentURLuser as a followee
	model: function(){
  	var currentURLuser = this.modelFor('user');
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