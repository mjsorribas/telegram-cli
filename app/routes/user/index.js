var UserIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('user');
  }
});
export default UserIndexRoute;