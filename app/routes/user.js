var UserRoute = Ember.Route.extend({
  model: function(user){
    return this.store.find('user', user.username);
  }
});
export default UserRoute;