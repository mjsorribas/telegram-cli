var UserIndexRoute = Ember.Route.extend({
  model: function(params) {
    return this.modelFor('user');
  }
});
export default UserIndexRoute;