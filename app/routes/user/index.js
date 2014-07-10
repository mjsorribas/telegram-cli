var UserIndexRoute = Ember.Route.extend({
  model: function(user) {
    return this.store.find("post", {
		  user: user.username
		  // skip: 40,
		  // limit: 20
		});
  }
});
export default UserIndexRoute;
