var UserIndexRoute = Ember.Route.extend({
  model: function() {
  	var user = this.modelFor('user');
    return this.store.find("post", {
		  user: user.id
		  // skip: 40,
		  // limit: 20
		});
  }
});
export default UserIndexRoute;
