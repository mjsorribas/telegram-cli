var UserRoute = Ember.Route.extend({
  model: function(user){
  	console.log(user);
    return this.store.find('user', user.username);
  }
});
export default UserRoute;