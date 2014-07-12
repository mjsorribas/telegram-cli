var UserIndexRoute = Ember.Route.extend({
  model: function() {
  	var user = this.modelFor('user');
    // http://stackoverflow.com/questions/20957870/deleterecord-in-findall-vs-findquery
		return this.store.filter(
		  "post",
		  {
		    user: user.id
		    // skip: 40,
		  	// limit: 20
		  },
		  function(post) {
		    return post.get('user') === user;
		  }
		);
  }
});
export default UserIndexRoute;
